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
          class="flex justify-center overflow-hidden scrollbar h-4/5 lg:h-screen p-10 lg:pt-10 mt-0"
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
            <h4 class="text-center ">SOUND STUDIO & TRANING facility</h4>
            <button
              class="btn absolute right-3 text-3xl pt-1 mt-1 pb-0.5 pl-2 pr-2 top-2 z-20"
              @click="closeModal"
            >
              &cross;
            </button>
            <div
            id="image-container"
              class="flex  justify-center h-auto pt-1"
              
            >
            <img src="../assets/kraft01.jpeg" class="image"/>
            <img src="../assets/kraft02.jpeg" class="image"/>
            <img src="../assets/kraft03.jpeg" class="image"/>
            <img src="../assets/kraft04.jpeg" class="image"/>
             
               
              </div>
              <div
                class="flex  place-self-center flex-col  mb-4 h-72"
              >
                <p class=" text-center place-self-center pt-2 pl-40 pr-40" >
    
                  For several years, Esbjerg has lacked dedicated music practice and recording facilities. 
                  Kanten aims to fill this gap by offering a high-quality sound studio and practice space.
                  In line with Kanten's vision to support the growth of local musicians, the studio will provide 
                  the services of a sound technician who can offer instruction  on sound studio techniques as required.
                <br> <br>
                  Situated in Østerbyen, Kanten is expected to generate interest in music, especially among 
                  local youth. To that end, the studio will offer music instruction and resources tailored 
                  to the needs of young people in the area. The space is open to all musicians who wish to 
                  take advantage of the sound studio and practice area
                </p>
                <div class="flex  w-10/12 m-auto pt-20 pb-20 gap-4">  
                  <img src="../assets/logonoK.svg" style="height: 3em;" alt=""/>
                  <p>Practice facility: 300 kr. per member for 3 months</p>
                  <img src="../assets/logonoK.svg" style="height: 3em;" alt=""/>
                  <p>Sound-studio: 350 kr. per member for 3 months + starting fee of 100 kr. </p>
                  <img src="../assets/logonoK.svg" style="height: 3em;" alt=""/>
                  <p>Kontakt:   28 97 11 85 / Musikforeningskanten@gmail.com</p>
                 </div> 
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
    const showModal = ref(false);

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
  #image-container {
  
  
    gap: 1.5rem;
    .image {
      width: 22%;
      height: auto;
      object-fit: cover;
      object-position: 90% center;
      z-index: 0;
      padding-top: 2%;
      padding-bottom: 2%;
      animation: float 2s ease;
    }
  }

  h3 {
    font-size: 6.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-family: $brother;
    letter-spacing: 3rem;
  }
  h4 {
    font-family: $k2d;
    font-size: 2.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
    z-index: 2;
    margin-top: -2%;
    border-bottom: 1px solid white;
    
  }
  p {
    font-family: $k2d;
    font-size: 1.3em;
    font-weight: 500;
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

::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: $gray;
}
</style>
