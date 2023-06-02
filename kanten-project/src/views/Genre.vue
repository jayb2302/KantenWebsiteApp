<template>
   <main v-if="true" class="aboutme-section">
    <div class="btnwrapper w-full ">
      <div class="flex flex-wrap justify-center">
        <button type="button" :key="button3" @click="showModalMana = !showModalMana"
          class="z-10  bottom-36 hover:text-gray-50 ">
          <div class="image1 transform ">
            <img src="../assets/manaanimation.gif" class="cover hover:scale-110 " alt="" />
          </div>
        </button>

        <button type="button" :key="button2" @click="showModal = !showModal"
          class="z-10  bottom-40 hover:text-gray-50">
          <div class="image1 transform hover:scale-110">
            <img src="../assets/vertexanimtion.gif" class="cover hover:scale-110" alt="" />
          </div>
        </button>
      </div>

      <div class="flex flex-wrap justify-center">
        <button type="button" @click="showModalDeft = !showModalDeft" :key="button1"
          class="z-10 bottom-20  hover:text-gray-50 ">
          <div class="image hover:scale-110 ">
            <img src="../assets/deftanimation.gif" class="cover hover:scale-110" alt="" />
          </div>
        </button>

        <button type="button" :key="button4" @click="showModalDub = !showModalDub"
          class="z-10 bottom-20 hover:text-gray-50 hover:scale-110">
          <div class="image1 hover:scale-110 ">
            <img src="../assets/dubanimation.gif" class="cover hover:scale-110" alt="" />
          </div>
        </button>
      </div>
    </div>
  </main>

  <VertexDialog :show="showModal" />
  <DubDialog :show="showModalDub" />
  <ManaDialog :show="showModalMana" />
  <DeftDialog :show="showModalDeft" />
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VertexDialog from "../components/VertexModal.vue";
import DubDialog from "../components/DubModal.vue";
import ManaDialog from "../components/ManaModal.vue";
import DeftDialog from "../components/DeftModal.vue";

const components = {
  VertexDialog,
  DubDialog,
  ManaDialog,
  DeftDialog,
};

gsap.registerPlugin(ScrollTrigger);

export default {
  components,
  setup() {
    const showModal = ref(false);
    const showModalDub = ref(false);
    const showModalMana = ref(false);
    const showModalDeft = ref(false);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
      console.log("after");
    };

    const enter = (el, done) => {
      const index = Array.from(el.parentNode.children).indexOf(el);
      const directions = ["top", "left", "right", "bottom"];
      const direction = directions[index % directions.length];
      const delay = index * 1; // Adjust the delay duration as needed

      const initialPosition = {
        top: { opacity: 0, y: -0, },
        left: { opacity: 0, x: 0 },
        right: { opacity: 0, x: 0 },
        bottom: { opacity: 0, x: -0 },
      };

      const finalPosition = { opacity: 1, x: 0, y: 0 };

      gsap.fromTo(el, initialPosition[direction], {
        ...finalPosition,
        opacity: 0.8,

        y: 100,
        duration: 0.7,
        delay: delay,
        ease: 1,
        onComplete: done,
        rotation: 0,
      });
    };

    return {
      showModal,
      showModalDub,
      showModalMana,
      showModalDeft,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style lang="scss">
@import "../modules/variables";



.box {
  font-family: $brother;
  border: 2px solid $gray;
  border-radius: 0;
  background-color: transparent;
  transform: rotate(45deg);
  height: 200px;
  width: 200px;
  box-shadow: 14px 3px 44px -6px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 14px 3px 44px -6px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 14px 3px 44px -6px rgba(0, 0, 0, 0.64);
}

.btnwrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

// @media (min-width: 768px) {
//   .btnwrapper {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//   }

//   .btnwrapper button {
//     margin-right: 4px;
//     margin-bottom: 8px;
//   }
// }

.button {
  
  img {
    background-color: transparent;
    
    transition: all 1s ease 0.55s;
  }
}

.image {
  animation: float 4s ease-in-out infinite;
  
}

.image1 {
  animation: float 4s ease-in-out infinite;
  
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-15px);
  }

  100% {
    transform: translatey(0px);
  }
}
</style>
