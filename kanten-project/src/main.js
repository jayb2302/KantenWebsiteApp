import './assets/main.css'
import router from './router' 
import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeApp } from "firebase/app";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, fas } from '@fortawesome/free-solid-svg-icons'
import { fab  } from '@fortawesome/free-brands-svg-icons'

const firebaseConfig = {
  apiKey: "AIzaSyBGroty_DwPsUK016nqp3FH8Ps4HzAivzQ",
  authDomain: "kanten-web-a8989.firebaseapp.com",
  projectId: "kanten-web-a8989",
  storageBucket: "kanten-web-a8989.appspot.com",
  messagingSenderId: "274632996466",
  appId: "1:274632996466:web:c06c5518a56f70e13bb4eb",
  measurementId: "G-V1J8FRD5JN"
};


initializeApp(firebaseConfig);
library.add(faUserSecret, fab, fas)

const app =createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)

app.mount('#app')
