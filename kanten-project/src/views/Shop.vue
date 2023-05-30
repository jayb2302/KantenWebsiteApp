<template>
<div class="text">
    <h1>Shop with us!</h1>
</div>
    <div  class="shop flex center-align justify-center w-full h-screen" >
        <ProductDescriptionDrawer
            :product="product"
            :active="active.product_drawer"
        />
 
        <div class="product-cards-container flex wrap w-full relative overflow-hidden">
                <ProductSummaryCard v-for="product in items"
                   :key="product.id"
                   :product="product"
                   v-on:view-product="viewProduct($event)"
                   />
        </div>
    </div>

    <div class="footer">
        <footer>
            
        </footer>
    </div>

</template>

<script >
import items from '../data/items.js';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue';

import {ref, toHandlers} from 'vue'
import { increment } from 'firebase/firestore';

export default {
    name: 'Shop',
    components: {
        ProductSummaryCard, ProductDescriptionDrawer,
    },
    methods: {
        viewProduct(product){
            this.product = product
            console.log(this.product)
        },
       
    },
    data () {
        return {
            items: items,
            product: null,
            active: {
                product_drawer: false,
            }
        }
    },
   }

</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';

.text{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    font-size: 30px;
    font-weight: 700;
    color: #fff !important;
}
.shop {
    font-family: $brother;
    overflow-y: auto;
    background-color: $primaryone;
    #app {
    font-family: $brother;
    background-color: $primaryone;
    .container {
        width: 15rem;
        height: 28em;
        margin: 10px;
        flex-wrap: wrap ;
        
        
      .effect{
        border-radius: 50%;
        background-color: &primaryone;
        filter: blur(30px);
        transition: 2s ease-in-out;
        &::before{
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
      .card{
        border-radius: 20px;
        cursor: pointer;
        transition: 1s ease-in-out;
        z-index: 10;
        background-color: $primaryone;
        
        height: auto;
        &::after{
            position: absolute;
            content: "";
            width: 50%;
            height: 150%;
            background-color: $kblue;
            animation: spin 6s linear infinite;
            box-shadow: 0 0 10px 10px $kblue;
            transition: 1.5s linear;
        }
        &::before{
            position: absolute;
            content: "";
            inset: 4px;
            background-color: $primaryone;
            z-index: 10;
            border-radius: 16px;
        }
        &:hover {
            box-shadow: 0 0 5px #5ABFF9, 0 0 30px #5ABFF9,;
            &::after {
                animation-play-state: paused;
                width: 200%;
                .effect{
                    transform: scale(1.5);
                    &::before {
                        transform: scale(1.5);
                        transition-delay: 1s;
                    }
                 }
            }
        }
        .card-content{
            z-index: 20;
            color: $white;
        
            img{
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
                &::after{
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
    }
    
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


*{
    margin: 0;
    padding: 0;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

}
.product-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding-left: 10%;
  padding-top: 10%;
}

.card-item {
  height: 200px; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Rest of your card styles */
}

@media screen and (min-width: 768px) {
  .product-cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .product-cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>