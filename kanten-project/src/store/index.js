import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce
      ((total, item) => total + item.price, 0);
    },
  },
});

export default store;
