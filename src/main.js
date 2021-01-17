import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire' 
import router from './router/index'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCsOHuugeqca_ooYQUs7w19hAZgk7LcfFg",
  authDomain: "platziblog-31c7e.firebaseapp.com",
  databaseURL: "https://platziblog-31c7e.firebaseio.com",
  projectId: "platziblog-31c7e",
  storageBucket: "platziblog-31c7e.appspot.com",
  messagingSenderId: "1093272134999",
  appId: "1:1093272134999:web:9e9cf4dc931127bb234a12",
  measurementId: "G-Z75V1VKWYQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
