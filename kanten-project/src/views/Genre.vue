<template class="w-full ">
    <main 
      v-if="true"
      class="aboutme-section w-screen pt-6  justify-center"
    >
      <div class="w-12/12 flex justify-center   ">
        <div class="bgtext text-5xl ">
            <h1 class="opacity-20 "></h1>
          </div>
  
        <div class="flex w-10/12   justify-center border-l-3 ">
         
            <div class="btnwrapper flex text-center  wrap w-7/12 ">
                <TransitionGroup
                appear
                tag="div"
                @before-enter="beforeEnter"
                @enter="enter"
                >  
                <button
                  type="button"
                  key="button3"
                  @click="showModalMana = !showModalMana"
                  class=" z-10 w-4/12  right-20 bottom-36 hover:text-gray-50">             
                  <div class="image">
                    <img src="../assets/mana.png" class="" alt="">  
                  </div>              
                </button>

                <button
                  type="button"
                  key="button2"
                  @click="showModalDub = !showModalDub"
                  class=" z-10  w-4/12 left-48 top-48 hover:text-gray-50">                
                  <div class="image1">
                    <img src="../assets/dub.svg" class="" alt="">  
                  </div>              
                </button>

                <button
                  type="button"
                  @click="showModal = !showModal"
                  key="button1"
                  class=" z-10 left-16 bottom-32 mt-10  w-3/12 hover:text-gray-50">                
                  <div class="image">
                  <img src="../assets/vertex.svg" class=" " alt="">              
                  </div>              
                </button>

                <button
                  type="button"
                  key="button4"
                  @click="showModalDeft = !showModalDeft"
                  class=" z-10 right-52 bottom-16  w-4/12 hover:text-gray-50">                
                  <div class="image1">
                    <img src="../assets/deft.svg" class="" alt="">  
                  </div>              
                </button>
              </TransitionGroup> 
            </div>
          </div>
        </div>
      
    </main>

    <VertexDialog :show="showModal" />
    <DubDialog :show="showModalDub"/> 
    <ManaDialog :show="showModalMana"/>
    <DeftDialog :show="showModalDeft"/>
    
  </template>
  
  <script >
  import { ref } from 'vue';
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import VertexDialog from'../components/VertexModal.vue';
  import DubDialog from '../components/DubModal.vue';
  import ManaDialog from '../components/ManaModal.vue';
  import DeftDialog from '../components/DeftModal.vue';
  
 
    
  const components = {
     VertexDialog, DubDialog, ManaDialog, DeftDialog,
  }; 

  gsap.registerPlugin(ScrollTrigger);

  
  
  export default {
    name: 'VertexModal',
    nameone: 'DubModal',
    nametwo: 'ManaModal',
    namethree: 'DeftModal',
    components,
    setup() {
  
    const modal = ref(0);
    const showModal = ref(false);
    const showModalDub = ref(false);
    const showModalMana = ref(false);
    const showModalDeft = ref(false);

    const beforeEnter = (el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(100px)'
        console.log('after')
    }
    const enter = (el, done) => {
      const index = Array.from(el.parentNode.children).indexOf(el);
      const directions = ['top', 'left', 'right', 'bottom'];
      const direction = directions[index % directions.length];
      const delay = index * 0.6; // Adjust the delay duration as needed
   
      const initialPosition = {
        top: { opacity: 0, x: -120 },
        left: { opacity: 0, x: 180 },
        right: { opacity: 0, y: -150 },
        bottom: { opacity: 0, y: 220 },
      };

      const finalPosition = { opacity: 1, x: 0, y: 0 };

  gsap.fromTo(
    el,
    initialPosition[direction],
    {
      ...finalPosition,
      opacity: 0.8,
      y: 120,
      duration: 0.9,
      delay: delay,
      ease: 1,
      onComplete: done,
      rotation: 0,
    }
  );
};


        return {
        ...
        modal,showModal, showModalDub, showModalMana, showModalDeft,
        beforeEnter, enter, 
        };
    }
  
  };
  
  </script>
  
  <style lang="scss" >
    
     

        .rb {
          box-sizing: border-box;
          border-color: red;
          border-width: 1px;
        
         
        }
        .bb {
          box-sizing: border-box;
          border-color: rgb(163, 163, 175);
          border-width: 1px;
        }

        .image {
          animation: float 6s ease-in-out infinite;
        }
        .image1 {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
  </style>
  