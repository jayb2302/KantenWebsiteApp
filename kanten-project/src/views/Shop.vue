<template>
  <div class="text text-2xl  lg:w-12/12 mb-5">
    <h1>Kanteen Merchandise Shop</h1>
  </div>
  <div class="product-cards-wrapper 
    lg:flex-col  flex h-screen flex w-full ">
    <div class="shop  w-8/12 pl-16 pr-16 ">
      <div class="product-cards-container w-full">
        <ProductSummaryCard v-for="product in items" :key="product.id" :product="product"
          v-on:view-product="viewProduct($event)" class="card-item" @add-to-cart="addToCartHandler" />
      </div>
    </div>
    <div div class="cart z-10 lg:w-4/12  lg:absolute 
      lg:right-0 top-5">
      <Cart />
    </div><footer id="footer" class="flex flex-col w-full ">
        <div class="footer-content flex flex-row justify-center">
          <div class="footer-list w-3/12 ">
            <h3>Find us here</h3>
            <ul>
              <li>
                <h4>Kanten</h4>
                <a href="https://goo.gl/maps/FiNur8K3VDgcWFk39">FINSENSGADE 1, 6700 Esbjerg</a>
              </li>
              <li>
                <h4>Kraftværket</h4>
                <a href="https://goo.gl/maps/m9AhRALJE7bfsctq9">GL NOVRUPVEJ 14, 6705 ESBJERG Ø</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact w-3/12 ">
            <div class="footer-widget-heading">
              <h3>Contact us</h3>
            </div>
            <ul>
              <li>
                <h4>Phone</h4>
                <p>+45 28 97 11 85</p>
              </li>
              <li>
                <h4>E-mail</h4>
                <p>MUSIKFORENINGENKANTEN@GMAIL.COM</p>
              </li>
            </ul>
          </div>

        </div>


        <div class="copyright-area  ">
          <div class="copyright">
            <p>Copyright &copy; 2018, All Right Reserved Kanten</p>
          </div>
          <div class="footer-widget">

            <!-- Follow button -->
            <!-- <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i class='bx bxl-facebook' style='color:$whitefff'></i></a>
                    <a href="#"><i class='bx bxl-instagram' style='color:$whitefff'  ></i></a>
                  </div> -->
          </div>
        </div>
        
        <img src="../assets/img/Logo.png" class="img-fluid" alt="logo">

   </footer>
  </div>

  <!-- Footer -->
  
</template>

<script >
import items from '../data/items.js';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue';
import { mapActions, mapGetters } from 'vuex';
import Cart from '../components/Cart.vue';

export default {
  components: {
    ProductSummaryCard, ProductDescriptionDrawer, Cart,
  },
  methods: {
    ...mapActions(['addToCart']),
    addToCartHandler(product) {
      this.addToCart(product);
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    }
  },
  computed: {
    ...mapGetters(['cartItems'])
  },
  data() {
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

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  font-size: 2.6rem;
  font-weight: 700;
  color: $white;
}

.product-cards-wrapper {

  .shop {
    font-family: $brother;
    background-color: $primaryone;
    font-family: $brother;
    background-color: $primaryone;

    .product-cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      overflow: hidden;
    }
    .container {
      width: 15rem;
      height: 28em;
      flex-wrap: wrap;
      margin-bottom: 3%;
      .effect {
        border-radius: 50%;
        background-color: &primaryone;
        filter: blur(80px);
        transition: 7s ease-in-out;
        &::before {
          position: absolute;
          content: "";
          width: 250%;
          height: 430%;
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
        transition: 1s ease-in-out;
        z-index: 10;
        background-color: $primaryone;

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
          border-radius: 16px;
        }

        &:hover {
          box-shadow: 0 0 5px #5ABFF9, 0 0 30px #5ABFF9, ;

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
          margin-bottom: 2%;
          height: 300px;

          img {
            width: 100%;
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
    }

  }



}

#footer {
  font-family: $brother;
  background: $primaryone;
  padding: 0;
  height: 300px;
  padding-top: 1%;
  .footer-content {

    ul {
      list-style-type: none;
      padding: 0;
      a {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
      }
      p {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
        line-height: 28px;
      }
    }

    h4 {
      font-size: 1.2em;
      padding-top: 3%;
      color: $gray;
      font-weight: 800;
    }

    h3 {
      color: $white;
      font-weight: 800;
      position: relative;
      font-size: 1.2em;

      &::before {
        content: "";
        position: absolute;
        bottom: -7px;
        height: 2px;
        width: 117px;
        background: $kpink;
      }
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 2%;
    height: 10em;
  }
  .copyright {
    margin: 0;
    font-size: 1em;
    color: $gray;
    text-align: center;
    padding-top: 5%;
    opacity: 0.5;
  }
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: $gray;
}

// @media screen and (min-width: 768px) {
//   // .product-cards-container {
//   //   grid-template-columns: repeat(2, 1fr);
//   // }

// }

// @media screen and (min-width: 1024px) {
//   .product-cards-container {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }

.product-cards-wrapper {
  height: 100vh;
  /* Set the height to occupy the full screen */
  
}
</style>