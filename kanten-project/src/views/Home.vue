<template>
	<progress max="100" value="0"></progress>
   <div>
    <!-- Home Section -->
    <section id="home" class=" w-full h-screen">
	<div class="logo">
		<img src="" alt="">
	</div>
      <!-- Home Section Content -->
	  <button
	  	@click="showModalKraft = !showModalKraft"
	    class=" w-5/12 h-28 "><p>Kraftværket</p></button>
		
    </section>

    <!-- Our Genre Section -->
    <section id="genre" class="w-full  justify-center  items-center  text-center">
      <div class="box pr absolute"> <h2 class="">Discover</h2></div>
      <div class="flex justify-between">
        <Genre />
       
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section id="events" class="py-10 w-full h-screen">
		<div class="eventsbg"></div>
      <h2 class="text-3xl font-bold mb-5">Upcoming Events</h2>
      <router-view></router-view>
    </section>

    <!-- Recent Posts Section -->
    <section id="posts" class="py-10">
      <h2 class="text-3xl font-bold mb-5">Recent Posts</h2>
      <!-- Show recent posts from Facebook -->
    </section>

    <!-- Meet Our Team Section -->
    <section id="team" class="py-10">
      <h2 class="text-3xl font-bold mb-5">Meet Our Team</h2>
      <!-- Team member profiles -->
    </section>
  </div>
  <KraftDialog :show="showModalKraft"/>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { useRouter } from 'vue-router'
  import Genre from './Genre.vue'
  import KraftModal from '../components/KraftModal.vue';


  
  export default {
	name: 'HomePage',
	name: 'KraftModal',
	

  	components: {
		KraftModal,
    	Genre,
    routerView: useRouter.component,
  	
  	},
	  
    setup() {
      onMounted(() => {
        const body = document.querySelector('body');
		const showModalKraft = (false);
        gsap.registerPlugin(ScrollTrigger)
		gsap.to('progress', {
		value: 100,
		ease: 'none',
		scrollTrigger: { scrub: 0.3 }
		});

        ScrollTrigger.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
          snap: 1 / 4,
		  markers: true,
         
        });
		return {
			showModalKraft,
		}
      });
	 
    }
	
  }
  </script>
  

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
@import '../modules/_variables.scss';

progress {
  position: fixed;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border: none;
  background: transparent;
  z-index: 102;
}
progress::-webkit-progress-bar {
  background: transparent;
}
progress::-webkit-progress-value {
  background: linear-gradient(to left, #db38b5,#01b3e3,#25ce7b,#fdc741,#ff6b01,#fc4236);
  background-attachment: fixed;
}
progress::-moz-progress-bar {
  background: linear-gradient(to left, #db38b5,#01b3e3,#25ce7b,#fdc741,#ff6b01,#fc4236);
  background-attachment: fixed;
}

#home {
	background-image: url('../assets/kantenbg.webp');
	background-size: cover;
	filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
	-webkit-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
	-moz-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
	button {
		position: absolute;
		color: $white;
		background: $primaryone;
		z-index: 110;
		right: 2%;
		bottom: 50%;
		width: 300px;
   		height: 70px;
   		cursor: pointer;
		color: #fff;
		border: 4px solid $gray;
		border-radius: 0px;
		transition: all .4s;
		
		
			p {
				
				font-size: 1.5rem;
				letter-spacing: 9px;
				font-family: $brother;
				text-transform: uppercase;
				
			}
			&:hover {
				
				border-radius: 0px;
				border-color: #ffffff;
				font-size: 20em;
				transform: translateY(-10px);
				box-shadow: 0 7px 0 -2px #d88bd7,
					0 15px 0 -4px #8f9b49,
					0 16px 10px -3px #39a2db;
			}
		
	}
}
#events {
	background-image: url('../assets/fiber.png');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	
}

#genre {
	display: flex;

	.box {
		font-family: $brother;
		border: 2px solid $gray;
		border-radius: 0;
		background-color: transparent;
		transform: rotate(45deg);
		height: 200px;
		width: 200px;
		z-index: 100;
		box-shadow: 14px 3px 44px -6px rgba(0,0,0,0.64);
		-webkit-box-shadow: 14px 3px 44px -6px rgba(0,0,0,0.64);
		-moz-box-shadow: 14px 3px 44px -6px rgba(0,0,0,0.64);
		
	
		h2 {
			transform: rotate(-45deg);
			top: 40%;
			right: 40%;
			width: 280px;
			font-size: 3em;
			line-height: 0.8em;
			
		}
		
	}
}
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

</style>