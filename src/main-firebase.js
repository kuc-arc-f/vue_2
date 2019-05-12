import Vue from 'vue'
import router from './router'
import App from './App.vue'

import firebase from 'firebase'
//
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEWHm9n33ayZ-_ktBFW_nE6Bis01_nXEA",
  authDomain: "spa1-project.firebaseapp.com",
  databaseURL: "https://spa1-project.firebaseio.com",
  projectId: "spa1-project",
  storageBucket: "spa1-project.appspot.com",
  messagingSenderId: "597018011814"
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

