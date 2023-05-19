
<template>
  
  <div v-if="showModal"><ModalDetail :id="id" @close="toggleModal"/></div> 
   
  <div class="upper-container">
    <h1>Shop with us!</h1>
    <p>Check out our merch. All Kanten for you.</p>
  
   
     <main class="md:max-xl:flex">
         <div class="portfolio-container pt-20">
             <!-- {{ state }} -->
             <div id="card" class="card " v-for="(item) in state" :key="item">
                 <div itemId="item.id" class="card-content"> 
                     <span class="overlaycard"> 
                     {{ itemId }}
                         <h3>{{ item.title }}</h3>
                         <p class="description">{{ item.description }}</p>               
                         <img :src="item.image" style="height: 195px; width: 375px;" alt="">
                         <button class="btn w-20 h-8 md:w-28 lg:text-4xl"  @click="toggleModal(item.id)" > More</button>
                     </span>    
                 </div>
             </div>
         </div>
         <div class="effect flex justify-center items-center absolute w-10/12 h-5/6"></div>
          <div class="background absolute w-full h-full "></div>
     </main>
    </div>
 </template>
 
 <script setup >
     import ModalDetail from'../components/ModalDetail.vue';
     import { ref } from 'vue'; 
     import portfoliodb from '../modules/ShopProducts'
     import '../modules/_variables.scss';
     // eslint-disable-next-line no-unused-vars
       const { components } = {ModalDetail,}
       const { state } = portfoliodb()
       const showModal = ref(false)
       
       const id = ref()
 
     defineProps({
       itemId: Number
     })
 
      //let clickedId = ref('');
 
         function toggleModal(itemId){
           id.value = itemId
           showModal.value = !showModal.value;
           // console.log( showModal.value )
          
         }
    
 </script>
 
 <style lang="scss" scoped>
 
 * {
margin: 0;
padding: 0;
box-sizing: border-box;
}
 .upper-container{
  width: 100%;
  position: absolute;
  text-align: center;
  color: #c4c6c8;        //color is hard coded
 }
 .upper-container h1 {
  font-size: 70px;
  margin-top: 80px;
 }
 .upper-container p{
  margin: 20px auto;
  font-weight: 100;
  line-height: 25px;
 }

/*  .background {
        background: url(../assets/img/tshirt.png) center / cover;
        mix-blend-mode: multiply;
        width: 100%;
        height: 100%;
      } */
 .portfolio-container{
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     flex-direction: row;
     flex: 1;
     width: 100%;
     position: relative;
     height: auto;
     padding-bottom: 5%;
     .content {
      .effect{
        border-radius: 50%;
        background-color: #252625;
        filter: blur(30px);
        transition: 2s ease-in-out;
        &::before{
            position: absolute;
            content: "";
            width: 120%;
            height: 120%;
            background-color: #252625;
            filter: blur(10px);
            transform: scale(0);
            transition: 2s ease-in-out;
        }
      }
     }
     h3{
       text-align: center;
       text-transform: uppercase;
       padding-bottom: 1%;
       font-size: 1.2rem;
     }
     .description{
       font-size: 18px;
       padding-top: 2%;
       
     }
     .card{
        border-radius: 20px;
        cursor: pointer;
        transition: 1s ease-in-out;
        z-index: 10;
        background-color: #252625;
        height: 530px;
        &::after{
            position: absolute;
            content: "";
            width: 50%;
            height: 150%;
            background-color: #5ABFF9;
            animation: spin 6s linear infinite;
            box-shadow: 0 0 10px 10px #5ABFF9;
            transition: 1.5s linear;
        }
        &::before{
            position: absolute;
            content: "";
            inset: 4px;
            background-color: #252625;
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
            color: #c4c6c8;
            padding: 10px 20px;
        
            img{
                width: 90%;
                object-fit: contain;
                filter: drop-shadow(0 10px 10px #252625);
            }
            button {
                width: 150px;
                height: 50px;
                background-color: #5ABFF9;
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
                    background-color: #252625;
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
                    background-color: #252625;
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
       
   @keyframes rotate-hue {
   to {
     filter: hue-rotate(1turn);
   }
 }
}
 </style>