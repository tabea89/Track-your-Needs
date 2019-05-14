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
        updateEntry(state, quantity){
            state.needs[0].status = quantity;
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
            firebase.firestore().collection('needs/1/sleep').doc().set({
                user_id: this.state.users[0].id,
                hrsSlept: this.state.needs[0].status,
                timeStamp: date+' '+time
            })
        },
        newSocialEntry() {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
            // Save to firestore
            firebase.firestore().collection('needs/2/social').doc().set({
                user_id: this.state.users[0].id,
                socialized: this.state.needs[1].status,
                timeStamp: date+' '+time
            })
        },
        getNeedData() {
            firebase.firestore().collection('needs/1/sleep').orderBy("timeStamp", "desc").get().then((querySnapshot)=>{
                let hrsSleep = []
                querySnapshot.forEach(doc=>{
                  hrsSleep.push(doc.data())
                })
                this.state.needs[0].status = hrsSleep[0].hrsSlept * 10
                console.log('Sleep', hrsSleep[0].hrsSlept)
            })
            firebase.firestore().collection('needs/2/social').orderBy("timeStamp", "desc").get().then((querySnapshot)=>{
                let social = []
                querySnapshot.forEach(doc=>{
                  social.push(doc.data())
                })
                console.log('social', social[0].socialized)
                this.state.needs[1].status = social[0].socialized
            })
        },
        getUserData() {
            firebase.firestore().collection('users').get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    this.state.users.push(doc.data())
                })
            })

        },
    },
    getter: {}
})