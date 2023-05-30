<template>
    <div class="w-full  flex-wrap ">
      <div class="wrapper mt-10 flex  justify-center">
        <div class="container  flex  relative">
          <div class="card flex justify-center w-full  overflow-hidden">
            <div class="card-content w-full flex flex-col text-center items-center">
              <h5 class="text-muted">{{ product.category }}</h5>
              <img :src="product.image" style="height: 200px; width: auto;" alt="" class="image">
              <h1>{{ product.name }}</h1>
              <p class="description">Description: <br>{{ description }}</p> 
              <h5 class="price">Price: {{ product.price.toFixed(2) }}DKK</h5>
              <button class="view-product-button " @click="addToCart">Buy</button>
            </div>
          </div>
          <div class="effect flex justify-center items-center absolute "></div>
          <div class="background absolute w-auto h-full"></div>
        </div>
      </div>
      <div class="pagination">
        <button
        v-for="(image,index) in product.images"
        :key="index"
        @click="changeImage(index)"
        :class="{ active: index === selectedImageIndex }"
        >{{ index + 1 }}</button>
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
    data() {
        return {
            selectedImageIndex: 0
        }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product);
        console.log('addToCart', this.product)
      }
    },
    computed: {
        selectedImage() {
            return this.productimages[this.selectedImageIndex]
        },
      description() {
        return this.product.description.substring(0, 150);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../../modules/variables';

  
  .container {
    width: 17rem;
    height: 28em;
  }
  
  .effect {
    background-color: &primaryone;
    filter: blur(30px);
    transition: 4s ease-in-out;
  
    &::before {
      position: absolute;
      content: "";
      width: 200%;
      height: 290%;
      background-color: $primaryone;
      filter: blur(10px);
      transform: scale(0);
      transition: 5s ease-in-out;
    }
  }
  
  .background {
    mix-blend-mode: multiply;
  }
  
  .card {
    cursor: pointer;
    transition: 0.9s ease-in-out;
    z-index: 10;
    background-color: $primaryone;
    height: auto;

    h1 {
      font-weight: 800;
      padding-bottom: 2;
      font-size: 1.2rem;
    }
    &::after {
      position: absolute;
      content: "";
      width: 150%;
      height: 190%;
      background-color: $kblue;
      animation: spin 10s linear infinite;
      box-shadow: 0 0 7px 7px $kblue;
      transition: 5s linear;
    }
  
    &::before {
      position: absolute;
      content: "";
      inset: 4px;
      background-color: $primaryone;
      z-index: 10;
      
    }
  
    &:hover {
      box-shadow: 0 0 2px #5ABFF9, 0 0 70px #5ABFF9;
  
      &::after {
        animation-play-state: paused;
        width: 500%;
  
        .effect {
          transform: scale(2.5);
  
          &::before {
            transform: scale(.5);
            transition-delay: 1s;
          }
        }
      }
    }
  
    .card-content {
      z-index: 20;
      color: $white;
      padding-top: 10%;
      margin-bottom: 10%;
      height: 24em;
  
      img {
        width: 100%;
        margin-top: 5%;
        object-fit: contain;
        filter: drop-shadow(0 10px 10px $primaryone);
      }
  
      button {
        width: 80px;
        height: 30px;
        background-color: $kblue;
        font-family: inherit;
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s ease;
        border: none;
        margin-top: 10px;
        margin-bottom: 15%;
        color: $primaryone;
  
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
  
  </style>
  