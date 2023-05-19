<template class="w-full ">
    <main 
      v-if="true"
      class="aboutme-section w-screen pt-6  justify-center"
    >
      <div class="w-12/12 flex justify-center bb  ">
        <div class="bgtext text-5xl ">
            <h1 class="opacity-20 "></h1>
          </div>
  
        <div class="flex w-10/12 rb justify-center border-l-3 ">
         
            <div class="btnwrapper flex text-center   bb wrap w-8/12 ">
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
                  class=" z-10 w-4/12  right-20 bottom-28 hover:text-gray-50">             
                  <div class="   ">
                    <img src="../assets/mana.png" class="rb" alt="">  
                  </div>              
                </button>
                <button
                  type="button"
                  key="button2"
                  @click="showModalDub = !showModalDub"
                  class=" z-10  w-4/12 left-36 top-32 hover:text-gray-50">                
                  <div class=" ">
                    <img src="../assets/dub.svg" class="rb" alt="">  
                  </div>              
                </button>

                <button
                  type="button"
                  @click="showModal = !showModal"
                  key="button1"
                  class=" z-10 left-20 bottom-32  w-3/12 hover:text-gray-50">                
                  <div class=" ">
                  <img src="../assets/vertex.svg" class="rb " alt="">              
                  </div>              
                </button>
            
              

               

                <button
                  type="button"
                  key="button4"
                  @click="showModalDeft = !showModalDeft"
                  class=" z-10 right-28 bottom-28  w-4/12 hover:text-gray-50">                
                  <div class="  ">
                    <img src="../assets/deft.png" class="rb" alt="">  
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
    const enter = (el, done) => {
  const index = Array.from(el.parentNode.children).indexOf(el);
  const directions = ['top', 'left', 'right', 'bottom'];
  const direction = directions[index % directions.length];
  const delay = index * 0.2; // Adjust the delay duration as needed
   
  const initialPosition = {
    top: { opacity: 0, y: -100 },
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    bottom: { opacity: 0, y: 100 },
  };

  const finalPosition = { opacity: 1, x: 0, y: 0 };

  gsap.fromTo(
    el,
    initialPosition[direction],
    {
      ...finalPosition,
      opacity: 0.8,
      y: 100,
      duration: 0.8,
      delay: delay,
      onComplete: done,
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
        
         
        }
        .bb {
          box-sizing: border-box;
       
        }
  </style>
  