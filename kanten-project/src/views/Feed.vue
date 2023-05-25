<template class="w-full ">
    <main 
      v-if="true"
      class="aboutme-section w-screen pt-10 justify-center"
    >
      <div class="w-10/12 bb ">
        <div class="bgtext text-5xl md:text-9xl  lg:text-9xl ">
            <h1 class="opacity-20 "></h1>
          </div>
  
        <div class="flex flex justify-center flex-row border-l-3 ">
          <div class="flex flex-row  w-8/12 pb-3  ">
            <TransitionGroup
            appear
            tag="div"
            @before-enter="beforeEnter"
            @enter="enter"
            >
              <button
                type="button"
                @click="showModal = !showModal"
                key="button1"
                class=" z-10  hover:text-gray-50">                
                <div class="relative pr-8 pt-2">
                <img src="../assets/vertex.svg" class="rb w-32" alt="">              
                </div>              
              </button>
          
              <button
                type="button"
                key="button2"
                @click="showModalDub = !showModalDub"
                class=" z-10  hover:text-gray-50">                
                <div class="relative  pt-2 pr-8 mr-2">
                  <img src="../assets/dub.svg" class="rb w-36" alt="">  
                </div>              
              </button>

              <button
                type="button"
                key="button3"
                @click="showModalMana = !showModalMana"
                class=" z-10  hover:text-gray-50">             
                <div class="relative  pt-2 pr-8 mr-2">
                  <img src="../assets/mana.svg" class="rb w-36" alt="">  
                </div>              
              </button>

              <button
                type="button"
                key="button4"
                @click="showModalDeft = !showModalDeft"
                class=" z-10  hover:text-gray-50">                
                <div class="relative pt-2 pr-8 mr-2">
                  <img src="../assets/deft.svg" class="rb w-36" alt="">  
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
  import VertexDialog from'../components/VertexModal.vue';
  import DubDialog from '../components/DubModal.vue';
  import ManaDialog from '../components/ManaModal.vue';
  import DeftDialog from '../components/DeftModal.vue';
  
 
    
  const components = {
     VertexDialog, DubDialog, ManaDialog, DeftDialog,
  }; 
  
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
    const enter = (el,done) => {
      const index = Array.from(el.parentNode.children).indexOf(el);
      const delay = index * 0.2; // Adjust the delay duration as needed
        gsap.fromTo(el, {
          opacity:0,
          y:100 },
          {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay,
          onComplete: done,
        },
        )
      }

        return {
        ...
        modal,showModal, showModalDub, showModalMana, showModalDeft,
        beforeEnter, enter,
        };
    }
  
  };
  
  </script>
  
  <style lang="scss" >
    
      main{
          display: flex;
          height: 100%;
          position: relative;
        
          
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
  