<template>
    <div class="w-full  flex-wrap ">
      <div class="wrapper w-12/12 flex justify-center">
        <div class="container pb-5flex relative">
          <div class="card flex justify-center items-center w-full overflow-hidden">
            <div class="card-content w-full flex flex-col justify-evenly text-center items-center">
              <img :src="product.image" style="height: 195px; width: 375px;" alt="">
              <h1>{{ product.name }}</h1>
              <p class="description">Description: {{ description }}</p>
              <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
              <p class="text-muted">{{ product.category }}</p>
              <button class="view-product-button" @click="addToCart">Add</button>
            </div>
          </div>
          <div class="effect flex justify-center items-center absolute h-5/6"></div>
          <div class="background absolute w-auto h-full"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product);
        console.log('addToCart', this.product)
      }
    },
    computed: {
      description() {
        return this.product.description.substring(0, 150);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../../modules/variables';

  
  .container {
    width: 15rem;
    height: 28em;
  }
  
  .effect {
    background-color: &primaryone;
    filter: blur(30px);
    transition: 2s ease-in-out;
  
    &::before {
      position: absolute;
      content: "";
      width: 120%;
      height: 120%;
      background-color: $primaryone;
      filter: blur(10px);
      transform: scale(0);
      transition: 2s ease-in-out;
    }
  }
  
  .background {
    mix-blend-mode: multiply;
  }
  
  .card {
    
    cursor: pointer;
    transition: 1s ease-in-out;
    z-index: 10;
    background-color: $primaryone;
    height: auto;
  
    &::after {
      position: absolute;
      content: "";
      width: 50%;
      height: 150%;
      background-color: $kblue;
      animation: spin 6s linear infinite;
      box-shadow: 0 0 10px 10px $kblue;
      transition: 1.5s linear;
    }
  
    &::before {
      position: absolute;
      content: "";
      inset: 4px;
      background-color: $primaryone;
      z-index: 10;
      
    }
  
    &:hover {
      box-shadow: 0 0 5px #5ABFF9, 0 0 30px #5ABFF9;
  
      &::after {
        animation-play-state: paused;
        width: 200%;
  
        .effect {
          transform: scale(1.5);
  
          &::before {
            transform: scale(1.5);
            transition-delay: 1s;
          }
        }
      }
    }
  
    .card-content {
      z-index: 20;
      color: $white;
      padding: 10px 20px;
      margin-bottom: 10%;
  
      img {
        width: 90%;
        object-fit: contain;
        filter: drop-shadow(0 10px 10px $primaryone);
      }
  
      button {
        width: 150px;
        height: 50px;
        background-color: $kblue;
        font-family: inherit;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s ease;
        border: none;
        margin-top: 10px;
  
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
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .rb {
    box-sizing: border-box;
    border-width: 0.5px;
    border-color: red;
  }
  
  .bb {
    box-sizing: border-box;
    border-width: 0.5px;
    border-color: rgb(162, 167, 192);
  }
  </style>
  