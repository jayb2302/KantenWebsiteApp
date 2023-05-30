// src/store/mutations.js
const mutations = {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    
  };
  
  export default mutations;
  