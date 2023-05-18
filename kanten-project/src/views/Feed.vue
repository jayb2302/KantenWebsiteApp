<template class="w-full ">
    <main 
      v-if="true"
      class="aboutme-section  pt-10  md:h-auto  lg:h-screen lg:-pt-12 lg:pb-10 flex justify-center"
    >
      <div class="w-full h-screen md:h-screen  lg:h-4/5 ">
        <div class="bgtext pt-4 text-5xl md:text-9xl  lg:text-9xl lg:pt-0">
            <h1 class="opacity-20 text-sky-300 pb-5 md:pt-10 "></h1>
        </div>
  
        <div class="flex w-11/12 h-fit md:w-10/12  lg:w-9/12  lg:h-full pt-8 pb-8 mt-12 mx-auto lg:-mt-24 md:-mt-14  md:w-11/12 mystory border-l-3 relative p-3">
          <div class="flex flex-col absolute h-3/6 w-2/4 bottom-0  ">
              <button type="button" @click="showModal = !showModal" class=" z-10  hover:text-gray-50">
                <div class="relative -ml-6 pt-2 pr-8 mr-2">
                    <h2
                    class="text-2xl md:text-5xl lg:text-6xl lg:w-full arrow 
                    pl-3 pt-3 pb-3 pr-8 lg:pr-12 lg:pt-3 lg:pb-3 md:pb-3 md:pt-3 md:pr-12 ">VERTEX</h2>               
                </div>              
              </button>
              <button type="button" @click="showModalDub = !showModalDub" class=" z-10  hover:text-gray-50">
                <div class="relative -ml-6 pt-2 pr-8 mr-2">
                    <h2
                    class="text-2xl md:text-5xl lg:text-6xl lg:w-full arrow 
                    pl-3 pt-3 pb-3 pr-8 lg:pr-12 lg:pt-3 lg:pb-3 md:pb-3 md:pt-3 md:pr-12 ">DUB</h2> 
                </div>              
              </button>
              <button type="button" @click="showModalMana = !showModalMana" class=" z-10  hover:text-gray-50">
                <div class="relative -ml-6 pt-2 pr-8 mr-2">
                    <h2
                    class="text-2xl md:text-5xl lg:text-6xl lg:w-full arrow 
                    pl-3 pt-3 pb-3 pr-8 lg:pr-12 lg:pt-3 lg:pb-3 md:pb-3 md:pt-3 md:pr-12 ">MANA</h2> 
                </div>              
              </button>
              <button type="button" @click="showModalDeft = !showModalDeft" class=" z-10  hover:text-gray-50">
                <div class="relative -ml-6 pt-2 pr-8 mr-2">
                    <h2
                    class="text-2xl md:text-5xl lg:text-6xl lg:w-full arrow 
                    pl-3 pt-3 pb-3 pr-8 lg:pr-12 lg:pt-3 lg:pb-3 md:pb-3 md:pt-3 md:pr-12 ">MANA</h2> 
                </div>              
              </button>
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

  
  
        return {
        ...
        modal,showModal, showModalDub, showModalMana, showModalDeft,
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
  </style>
  