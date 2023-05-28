import { createApp } from 'vue'
import { createStore } from 'vuex'

/* 
const product = {
    id: 1,
    name: 'Product 1',
    price: 10.00,
} */

const store = createStore({
    state() {
        return {
            cart: [], // Array of products
        }
    },

    getters: {
        cartSorted(state) {
            return state.cart.sort((a, b) => {
                
            })
        }
    },

    mutations: {
        ADD_CART(state, product) {
            state.cart.push(product)
        },

        REMOVE_FROM_CART(state, product) {
            state.cart = state.cart.filter((stateProduct) => {
                return stateProduct.id !== product.id
            })
        },
    },

    actions: {

        add({ commit }, product) {
            commit('ADD_CART', product)
        },

        remove({ commit }, product) {
            commit('REMOVE_FROM_CART', product)
        }

    }

})




import { useStore } from 'vuex'

setup() {
    const store = useStore()
    
    // Component A
    const cart = computed(() => store.cart)


    // Component B
    store.commit('ADD_CART', product)

    store.dispatch('remove', product)

}