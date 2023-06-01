const actions = {
  addToCart({ commit }, product) {
    // Perform any necessary logic here
    commit("addToCart", product);
  },
};

export default actions;
