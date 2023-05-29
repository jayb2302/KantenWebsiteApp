<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-in duration-800 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-out duration-100 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        v-show="showModal"
        @click="closeModal"
        class="modal-backdrop fixed bg-black w-full h-full bg-opacity-10 z-10 inset-0"
      >
        <div
          class="flex justify-center overflow-auto scrollbar h-4/5 lg:h-screen pt-10 lg:pt-10 mt-0"
        >
          <div
            class="modal overflow-auto hover:overflow-auto scrollbar-thin 
            shadow-md shadow-slate-500 shadow-inner w-screen pt-5 p-8 lg:mb-2 h-full mb-2"
            role="dialog"
            ref="modal"
          >
            <!-- <h1 class="text-2xl mb-3">Vertex</h1>    -->
            <!-- <img src="../assets/smallkanten.svg" class="w-28 absolute" alt="" /> -->
            <h3 class=" mt-10 text-center ">Kraftværket</h3>
            <p class="text-center ">SOUND STUDIO & TRANING facility</p>
            <button
              class="btn absolute right-3 text-3xl pt-1 mt-1 pb-0.5 pl-2 pr-2 top-2 z-20"
              @click="closeModal"
            >
              &cross;
            </button>
            <div
              class="aboutme bb flex flex-col justify-center h-auto w-12/12 pt-1"
            >
             
               
              </div>
              <div
                class="flex rb place-self-center flex-col w-10/12 mb-4 h-72"
              >
              
              </div>
            </div>
          </div>
        </div>
     
    </transition>
  </teleport>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { Swiper } from "swiper/vue";
import { Navigation } from 'swiper';

const props = {
  show: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: "KraftModal",
  props,
  component: {
   
  },
  setup(props) {
    const showModal = ref(true);

    function closeModal() {
      showModal.value = false;
      
    }
    
    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );
    onMounted(() => {
    
     
  
   
  


    })
    return {
      showModal,
      closeModal, 
      
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../modules/_variables.scss";

.modal {
  background-color: $primaryone;
  box-shadow: 0px 0px 2px $gray, inset 0 0 3px $gray;
  color: $white;
  .aboutme {
    .carousel-gallery{
    margin: 10px 0;
    padding: 0 30px;
    width: 100%;
  

  
  .div{
    
    height: 500px;
    margin-top: 3%;
    margin-left: 0%;
    margin-bottom: 3%;
   
    a{
      display: block;
      
      height: 600px;
      border-radius: 4px;
      position: relative;
      gap: 10%;
      -webkit-box-shadow: 3px 2px 20px 0px rgba(0,0,0, .2);
      -moz-box-shadow: 3px 2px 20px 0px rgba(0,0,0, .2);
      box-shadow: 3px 2px 20px 0px rgba(0,0,0, .2);

      &:hover{
        .image{
          .overlay{opacity: 1}
        }
      }

      .image{
      
        height: 100%;
        background-size: cover;
        background-position: center center;
        .overlay{
          
          height: 100%;
          background-color: rgba(20,20,20, .8);
          text-align: center;
          opacity: 0;
          
          -webkit-transition: all .2s linear; 
          -o-transition: all .2s linear; 
          transition: all .2s linear;

          em{
            color: #fff;
            font-size: 26px;
            position: relative;
            top: 10%; 
            -webkit-transform: translateY(-20%); 
            -ms-transform: translateY(-20%); 
            -o-transform: translateY(-20%); 
            transform: translateY(-20%);
            display: inline-block;
          }
        }
      }
    }
  }
  .swiper-pagination{
    position: relative;
    bottom: auto;
    text-align: center;
    margin-top: 25px;
    height: 30px;

    .swiper-pagination-bullet{
      -webkit-transition: all .2s linear; 
      -o-transition: all .2s linear; 
      transition: all .2s linear;

      &:hover{
        opacity: .7;
      }

      &.swiper-pagination-bullet-active{
        background-color: #d9d3d3;
        transform: scale(1.1, 1.1)
      }
    }
  }
}
  }

  h3 {
    font-size: 7rem;
    text-transform: uppercase;
    font-weight: 800;
    font-family: $brother;
    letter-spacing: 3rem;
  }
  p {
    font-family: $k2d;
    font-size: 2.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
  }

  .btn {
    color: $gray;
    opacity: 0.4;
    #closebutton {
      &:hover {
        color: $kpink;
      }
    }
    &:hover {
      color: $kpink;
      transition: ease-in-out duration-1000 transform;
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
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: $kpink;
}
</style>
