<template>
  <div class="cart-container ">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cart" 
        :key="item.id">
        <strong>{{ item.name }}</strong>
        {{ item.price }} DKK
        <button class="buttonone" 
        @click="removeCartItem(item.id)">
          Remove
        </button>
      </li>
    </ul>
    <p class="mb-5"> 
      <strong>Total:</strong> 
      {{ cartTotal }} DKK
    </p>
    <button class="" 
    @click="clearCart">
      Clear cart
    </button>
    <button class="buttontwo" 
      @click="purchase">
      Purchase
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart']),
    removeCartItem(id) {
      this.removeFromCart({ id }); // Pass the id as an object
    },
    purchase() {
      // Perform purchase logic here
      // For example, you can clear the cart after the purchase
      this.clearCart();
      // You can also show a success message or navigate to a confirmation page
      // based on your application requirements
      alert('Purchase successful!');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';

.cart-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: $primaryone;
  border: 2px solid $kblue;



  h2 {
    font-family: $brother;
    font-size: 1.4em;
    margin-bottom: 20px;
    color: $kblue;
  }

  p {
    color: $white;
    font-family: $k2d;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: $white;
    font-family: $k2d;

  }

  li {
    display: flex;
    font-family: $k2d;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;
  }

  button {
    width: 130px;
    height: 30px;
    background-color: $kblue;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
    transition: 0.5s ease;
    border: none;

    color: $primaryone;
    right: 10%;
    margin-left: 10%;

    &::after {
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      background-color: $primaryone;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%) rotate(45deg);
      z-index: 1;
    }

    &::before {
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      background-color: $primaryone;
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%) rotate(45deg);
      z-index: 2;
    }
  }

  .buttonone {
    width: 90px;
    height: 25px;
    padding-left: 3%;
    padding-right: 3%;
    font-size: 1em;
  }




}
</style>
