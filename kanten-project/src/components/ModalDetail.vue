<template>
    <teleport to="body">
        <transition enter-active-class="transition ease-in-out duration-900" enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-900 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div @click="$emit('close')" class="modal-backdrop fixed bg-black w-full h-full bg-opacity-80 z-10 inset-0 " >
                <transition enter-active-class="transition ease-in-out duration-900 transform " enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
                                leave-active-class="ease-in duration-900" leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
                    <div class="flex justify-center mt-24 md:mt-28 h-full md:w-full ">
                        <div class=" modal bg-slate-800 w-11/12 md:w-10/12 lg:w-8/12 shadow-md shadow-slate-500 shadow-inner md:w-2/5 pt-7 pl-7 pr-5 h-4/5 rounded-lg " role="dialog" ref="modal">
                            <button class=" absolute right-3 top-2 z-20" @click="$emit('close')"><font-awesome-icon style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                        
                            <div class="modal-container  overflow-auto hover:overflow-auto scrollbar md:w-full lg:w-full ">

                                <div class="portfolio-item flex flex-col h-96" v-if="portfolioDetails" >            
                                    
                                    <p class="category text-2xl lg:text-2xl mb-5 " :class="portfolioDetails.category">{{ portfolioDetails.category}}</p>
                                    
                                    <h3 class="text-2xl lg:text-3xl mb-3">{{ portfolioDetails.title }}</h3>
                                
                                    <h2 class="flex lg:text-lg mb-2 justify-center border border-slate-600 pt-2 bg-cyan-800/70 pl-2 pr-2 w-3/12 rounded-lg">{{ portfolioDetails.description }}</h2>               
                                    <img id="outlineimg" class="outline-none p-0.5 mt-2 rounded-lg shadow-lg" :src="portfolioDetails.image" alt="">
                                    <h4 class="pt-3 pb2 text-2xl lg:text-3xl ">ABOUT :</h4>
                                    <p class="text-1xl pt-4 lg:text-2xl">{{ portfolioDetails.detail }}</p>
                                
                                    <a class="flex justify-end text-3xl lg:text-3xl " target="_blank"  :href="portfolioDetails.link" >{{portfolioDetails.linkname}}</a>
                                    <img class="h-auto w-6/12 place-self-center" :src="portfolioDetails.logo" alt="">
                                    <img class="h-auto w-10/12 place-self-center md:w-8/12 md:h-5/5 md:pt-0 lg:w-6/12 pt-4" :src="portfolioDetails.logo1" alt="">
                                    <h4 class="pt-2 pb-3 text-2xl lg:text-3xl ">{{ portfolioDetails.h4 }}</h4>
                                    <img class="h-auto place-self-center pt-3 w-10/12 md:w-10/12 lg:w-8/12" :src="portfolioDetails.color" alt="">
                                    <h4 class="pt-3 pb-2 text-2xl lg:text-3xl ">{{ portfolioDetails.heading }}</h4>
                                    <img class="place-self-center w-11/12 md:w-8/12 pt-2" :src="portfolioDetails.webp" alt="">


                                </div>
            
                                
                            </div>
                                <div class=" opacity-50  flex justify-end top-34 mb-1 pt-10 pr-1 animate-bounce">
                                        <font-awesome-icon class=" icon w-10 h-5" style="color: aliceblue;" id="closebutton" :icon="['fas', 'angles-down']" />
                                </div>
                        </div>
                
                    </div> 
                </transition>
            </div>
        </transition>
    </teleport>    
</template>

<script setup >

import items from '../data/items'

import { toRefs, computed} from 'vue'



    const props = defineProps ({
        id: Number
    })



    const { id } = toRefs(props)


    



</script>

<style lang="scss" scoped>
 
  
.modal {
    height: 590px;
    box-shadow: 
        1px 3px 6px #515253,        
        inset 0 0 2px #868686;
        text-shadow: 2px 1px 1px #4f5255;


    .modal-container{
    font-family: republica;
    color: aliceblue;
    height: 490px;  
    
    .outlineimg {
        box-shadow: 
        1px 3px 6px #515253,        
        inset 0 0 2px #868686;
    }
    p {
        font-family: lettergothic ;
        letter-spacing: 1px;
        line-height: 1.3;
        text-align: justify;
        padding-left: 4%;
        padding-right: 0%;
        word-spacing: -5px;
        text-shadow: 2px 2px 3px #515253;
    }
    h3 {
        text-transform: uppercase;
    }
    h2{
        letter-spacing: 1px;
        font-weight: 900;
        font-family: lettergothic;
    }
   
    .Web {
        color: rgba(5, 242, 218, 0.693);
        border-left: 2px solid rgba(5, 242, 218, 0.693);
        padding-left: 10px;
        font-family: republica;
        height: 20px;

    }
    .Video {
        color: rgba(179, 206, 80, 0.796);
        border-left: 2px solid rgba(179, 206, 80, 0.796);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
      
    }
    .Design {
        color: rgba(230, 86, 215, 0.873);
        border-left: 2px solid  rgba(230, 86, 215, 0.873);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
      }
     .Photos {
        color: rgba(238, 188, 62, 0.873);
        border-left: 2px solid  rgba(238, 188, 62, 0.873);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
    }

    a {
        color: alicebluex  !important;
        padding-bottom: 3%;
        padding-top: 2%;
        &:hover {
            color: aliceblue;
        }
    }

    #outlineimg {
    background:   linear-gradient( 127deg, rgba(102, 56, 166, 0.552), rgba(5, 242, 218, 0.517) 70.71%),
            linear-gradient( 336deg, rgba(5, 242, 219, 0.2), rgba(0, 0, 255, 0.614) 70.71%);;
    } 
}
}

</style>