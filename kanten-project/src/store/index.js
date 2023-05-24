import { createApp } from 'vue'
import {createStore} from 'vuex'

const store = createStore ({
    state () {
        return {
            count:0
        }
    }, 
    mutations: {
        increment (state) {
            state.count++
        }

    }
})

const app = createApp

app.use(store)

store.commit('increment')
console.log(store.state.count)


