import Vue from 'vue';
import router from './../router';
import Vuex from 'vuex';
import firebase from 'firebase';
import moment from 'moment';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        needs: [
            {id: 1, name: 'Sleep', status: 0},
            {id: 2, name: 'Social Life', status: 0}
        ],
        entries: [
            {sleep: [
                {
                    weekday: "Monday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Tuesday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Wednesday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Thursday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Friday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Saturday",
                    hrsSlept: 0,
                },
                {
                    weekday: "Sunday",
                    hrsSlept: 0,
                }
            ]},
            {social: [
                {
                    weekday: "Monday",
                    socialized: 0,
                },
                {
                    weekday: "Tuesday",
                    socialized: 0,
                },
                {
                    weekday: "Wednesday",
                    socialized: 0,
                },
                {
                    weekday: "Thursday",
                    socialized: 0,
                },
                {
                    weekday: "Friday",
                    socialized: 0,
                },
                {
                    weekday: "Saturday",
                    socialized: 0,
                },
                {
                    weekday: "Sunday",
                    socialized: 0,
                }
            ]}
        ],
        weeklyEntriesSleep: [],
        weeklyEntriesSocial: [],
        chartColors: [],
        weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        users: [],
        hrsSleep: [
            {key: 0, value: 0, number: '0'},
            {key: 1, value: 1, number: '1'},
            {key: 3, value: 2, number: '2'},
            {key: 4, value: 3, number: '3'},
            {key: 5, value: 4, number: '4'},
            {key: 6, value: 5, number: '5'},
            {key: 7, value: 6, number: '6'},
            {key: 8, value: 7, number: '7'},
            {key: 9, value: 8, number: '8'},
            {key: 10, value: 10, number: '9+'}
        ]
    }, 
    mutations: {
        updateEntrySleep(state, quantity){
            state.needs[0].status = quantity;
        },
        updateEntrySocial(state, quantity){
            state.needs[1].status = quantity;
        },
        updateStatus(state, newState){
            state.users[0].status = newState;
        }
    },
    actions: {
        newSleepEntry() {
            var weekDay = moment().format('dddd');
            var date = moment().format("MMM Do YY");
            var time = moment().format();

            // Save to firestore
            firebase.firestore().collection('needs/1/sleep').orderBy("timeStamp", "desc").limit(1)
            .get()
            .then(querySnapshot => {

                const queryDocumentSnapshot = querySnapshot.docs[0];

                if (queryDocumentSnapshot.data().day && queryDocumentSnapshot.data().day == date) {
                    // Overwrite entry of that date
                    return queryDocumentSnapshot.ref.update({
                        hrsSlept: this.state.needs[0].status,
                        timeStamp: time,
                    });
                } 
                else {
                    // First entry of that date
                    firebase.firestore().collection('needs/1/sleep').doc().set({
                        user_id: this.state.users[0].id,
                        hrsSlept: this.state.needs[0].status,
                        timeStamp: time,
                        day: date,
                        weekday: weekDay
                    })
                } 
            })

        },
        newSocialEntry() {
            var weekDay = moment().format('dddd');
            var date = moment().format("MMM Do YY");
            var time = moment().format();

            firebase.firestore().collection('needs/2/social').orderBy("timeStamp", "desc").limit(1)
            .get()
            .then(querySnapshot => {

                    const queryDocumentSnapshot = querySnapshot.docs[0];

                    if (queryDocumentSnapshot.data().day && queryDocumentSnapshot.data().day == date) {
                        // Overwrite entry of that date
                        return queryDocumentSnapshot.ref.update({
                            socialized: this.state.needs[1].status,
                            timeStamp: time,
                        })
                        .then(() => {
                            router.push({name:'home'});                          
                        });
                    } 
                    else {
                        // First entry of that date
                        firebase.firestore().collection('needs/2/social').doc().set({
                            user_id: this.state.users[0].id,
                            socialized: this.state.needs[1].status,
                            timeStamp: time,
                            day: date,
                            weekday: weekDay
                        })
                        .then(() => {
                            router.push({name:'home'});                     
                        });
                    } 
            });
        },
        getUserData() {
            // Get date data with moment.js
            let today = moment();
            let from_date = today.startOf('isoWeek').format();
            this.state.chartColors = [];
            this.state.weeklyEntriesSocial = [];
            let currentDay = moment().format('dddd');

            // Get Sleep entries of the week
            firebase.firestore()
            .collection('needs/1/sleep')
            .where("timeStamp", ">", from_date)
            .orderBy("timeStamp", "desc")
            .get()
            .then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    let day = this.state.entries[0].sleep.find(obj => obj.weekday == doc.data().weekday);
                    day.hrsSlept = doc.data().hrsSlept;
                })
                
                // Set Needbar quantity to entry of current day 
                this.state.needs[0].status = this.state.entries[0].sleep.find(obj => obj.weekday == currentDay).hrsSlept * 10;
                
                // Create Array with sleep data for each weekday for chart
                this.state.weeklyEntriesSleep = this.state.entries[0].sleep.map(a => a.hrsSlept);

                // Show weekday entry green if user slept more than 7hrs, red if less
                this.state.chartColors = [];
                this.state.weeklyEntriesSleep.forEach(entry => {
                    if (entry >= 7) {
                        this.state.chartColors.push('rgb(175, 228, 107)');
                    } else {
                        this.state.chartColors.push('#f87979');
                    }
                });
            })

            // Get Social entries of the week
            firebase.firestore()
            .collection('needs/2/social')
            .where("timeStamp", ">", from_date)
            .orderBy("timeStamp", "asc")
            .get()
            .then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    let day = this.state.entries[1].social.find(obj => obj.weekday == doc.data().weekday);
                    day.socialized = doc.data().socialized;
                })

                // Create Array with social data for each weekday for chart
                this.state.weeklyEntriesSocial = this.state.entries[1].social.map(a => a.socialized);

                // Set Needbar quantity to entry of current day 
                this.state.needs[1].status = this.state.entries[1].social.find(obj => obj.weekday == currentDay).socialized

            });

            firebase.firestore().collection('users').get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.state.users.push(doc.data());
                })

                if (this.state.needs[0].status !== 0) {
                    this.state.users[0].status = 'logged';
                }
            })
        },
    }
})