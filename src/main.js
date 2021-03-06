import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';
import firebase from 'firebase';
import 'firebase/firestore';

// Required for side-effects
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyBkQ5zhn6xJDaeUTZAvhz5MIb1kgsFJvBE",
  authDomain: "your-needs.firebaseapp.com",
  databaseURL: "https://your-needs.firebaseio.com",
  projectId: "your-needs",
  storageBucket: "your-needs.appspot.com",
  messagingSenderId: "309328936591"
};
firebase.initializeApp(config);

// Initialize Cloud firestore through Firebase
const db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
});
