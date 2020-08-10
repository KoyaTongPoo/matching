import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";


Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDbISF_C2Nn3rraU1kknpa8-YkqH87hj8E",
  authDomain: "aberyuzaki.firebaseapp.com",
  databaseURL: "https://aberyuzaki.firebaseio.com",
  projectId: "aberyuzaki",
  storageBucket: "aberyuzaki.appspot.com",
  messagingSenderId: "330264077283",
  appId: "1:330264077283:web:8b903d9e031534ce3f76d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
