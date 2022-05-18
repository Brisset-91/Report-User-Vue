import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBagoxx85j0OpA2b6y4Tq2QSOCUI8Qa2hY',
  authDomain: 'entrevistas-36a8b.firebaseapp.com',
  projectId: 'entrevistas-36a8b',
  storageBucket: 'entrevistas-36a8b.appspot.com',
  messagingSenderId: '771350242444',
  appId: '1:771350242444:web:9baa13de7eb9f540d607a9'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Get a reference to the database service
export const db = getDatabase(app)

export const starCountRef = ref(db, 'users')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
