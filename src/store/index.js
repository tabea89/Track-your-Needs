import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        needs: [
            {id: 1, name: 'Sleep', status: 0},
            {id: 2, name: 'Social Life', status: 0},
            {id: 3, name: 'Nutrition', status: 60},
            {id: 4, name: 'Sport', status: 30}
        ],
        entries: [
            {sleep: []},
            {social: []}
        ],
        weeklyEntriesSleep: [],
        weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        users: [
        ],
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
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
            // Save to firestore
            firebase.firestore().collection('needs/1/sleep').orderBy("timeStamp", "desc").limit(1)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {

                    const queryDocumentSnapshot = querySnapshot.docs[0];

                    if (queryDocumentSnapshot.data().day && queryDocumentSnapshot.data().day == date) {
                        // Overwrite entry of that dat
                        return queryDocumentSnapshot.ref.update({
                            hrsSlept: this.state.needs[0].status,
                            timeStamp: date+' '+time,
                        });
                    } 
                    else {
                        // First entry of that date
                        firebase.firestore().collection('needs/1/sleep').doc().set({
                            user_id: this.state.users[0].id,
                            hrsSlept: this.state.needs[0].status,
                            timeStamp: date+' '+time,
                            day: date,
                            weekday: today.toLocaleString('en-us', {  weekday: 'long' })
                        })
                    } 
                } 
                else {
                    // First entry of database is empty
                    firebase.firestore().collection('needs/1/sleep').doc().set({
                        user_id: this.state.users[0].id,
                        hrsSlept: this.state.needs[0].status,
                        timeStamp: date+' '+time,
                        day: date,
                        weekday: today.toLocaleString('en-us', {  weekday: 'long' })
                    })
                }
            });

        },
        newSocialEntry() {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
            // Save to firestore
           /*  firebase.firestore().collection('needs/2/social').doc().set({
                user_id: this.state.users[0].id,
                socialized: this.state.needs[1].status,
                timeStamp: date+' '+time
            }) */
            firebase.firestore().collection('needs/2/social').orderBy("timeStamp", "desc").limit(1)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {

                    const queryDocumentSnapshot = querySnapshot.docs[0];

                    if (queryDocumentSnapshot.data().day && queryDocumentSnapshot.data().day == date) {
                        // Overwrite entry of that dat
                        return queryDocumentSnapshot.ref.update({
                            socialized: this.state.needs[1].status,
                            timeStamp: date+' '+time,
                        });
                    } 
                    else {
                        // First entry of that date
                        firebase.firestore().collection('needs/2/social').doc().set({
                            user_id: this.state.users[0].id,
                            socialized: this.state.needs[1].status,
                            timeStamp: date+' '+time,
                            day: date,
                            weekday: today.toLocaleString('en-us', {  weekday: 'long' })
                        });
                    } 
                } 
                else {
                    // First entry of database is empty
                    firebase.firestore().collection('needs/2/social').doc().set({
                        user_id: this.state.users[0].id,
                        socialized: this.state.needs[1].status,
                        timeStamp: date+' '+time,
                        day: date,
                        weekday: today.toLocaleString('en-us', {  weekday: 'long' })
                    })
                }
            });
        },
        getNeedData() {
            firebase.firestore().collection('needs/1/sleep').orderBy("timeStamp", "desc").limit(1).get().then((querySnapshot)=>{
                let hrsSleep = []
                querySnapshot.forEach(doc=>{
                  hrsSleep.push(doc.data())
                })
                this.state.needs[0].status = hrsSleep[0].hrsSlept * 10
                console.log('Sleep!!', this.state.needs[0].status )
            })
            firebase.firestore().collection('needs/2/social').orderBy("timeStamp", "desc").limit(1).get().then((querySnapshot)=>{
                let social = []
                this.state.needs[1].status = 0
                querySnapshot.forEach(doc=>{
                  social.push(doc.data())
                })
                console.log('social!!', social[0].socialized)
                this.state.needs[1].status = social[0].socialized
            })
        },
        getUserData() {
            firebase.firestore().collection('needs/1/sleep').orderBy("timeStamp", "desc").limit(7).get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.state.entries[0].sleep.push(doc.data())
                })
                this.state.weeklyEntriesSleep = this.state.entries[0].sleep.map(a => a.hrsSlept)
            })
            firebase.firestore().collection('needs/2/social').orderBy("timeStamp", "desc").limit(7).get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.state.entries[1].social.push(doc.data())
                })
            });
            firebase.firestore().collection('users').get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.state.users.push(doc.data())
                })
            })
        },
    },
    getter: {}
})