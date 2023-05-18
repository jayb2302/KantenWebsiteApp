import './assets/main.css'
import router from './router' 
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)

const app =createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
