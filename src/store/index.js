import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        needs: [
            {id: 1, name: 'Sleep', status: 0},
            {id: 2, name: 'Social Life', status: 80},
            {id: 3, name: 'Nutrition', status: 60},
            {id: 4, name: 'Sport', status: 30}
        ],
        users: [
            {name: 'Lisa', status: 'empty'}
        ],
        hrsSleep: [
            {key: 1, number: '1'},
            {key: 3, number: '2'},
            {key: 4, number: '3'},
            {key: 5, number: '4'},
            {key: 6, number: '5'},
            {key: 7, number: '6'},
            {key: 8, number: '7'},
            {key: 9, number: '8'},
            {key: 10, number: '9+'}
        ],
    }, 
    mutations: {
        updateEntry(state, quantity){
            state.needs[0].status = quantity;
        },
        updateStatus(state, newState){
            state.users[0].status = newState
        },
        updateUsers(state, users){
            state.users = users
        }
    },
    actions: {
        newEntry(){
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            // Save to firestore
            firebase.firestore().collection('needs').add({
                user: 'admin',
                need: 'sleep',
                hrsSlept: this.state.needs[0].status,
                timeStamp: date+' '+time
            })
        },
        getNeedData(){
            this.state.needs[0].status *= 10;
            /* firebase.firestore().collection('needs').get().then((querySnapshot)=>{
                let hrsSleep = []
                querySnapshot.forEach(doc=>{
                  hrsSleep.push(doc.data())
                })
                this.state.needs[0].status = parseInt(hrsSleep[hrsSleep.length-1].hrsSlept)*10
            }) */
        },
        getUserData(){
            firebase.firestore().collection('users').get().then((querySnapshot)=>{
                let users = []
                querySnapshot.forEach(doc=>{
                  users.push(doc.data())
                })
                this.state.users = users
            })

        },
    },
    getter: {}
})