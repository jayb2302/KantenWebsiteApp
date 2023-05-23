<template>
   <div>
    <!-- Home Section -->
    <section id="home" class="py-10">
      <!-- Home Section Content -->
    </section>

    <!-- Our Genre Section -->
    <section id="genre" class="py-10">
      <h2 class="text-3xl font-bold mb-5">Our Genre</h2>
      <div class="flex justify-between">
        <Genre />
       
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section id="events" class="py-10">
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

  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { useRouter } from 'vue-router'
  import Genre from './Genre.vue'

  
  
  export default {
	name: 'HomePage',
  	components: {
	
    Genre,
    routerView: useRouter.component,
  	
  	},
    setup() {
      onMounted(() => {
        const body = document.querySelector('body');

        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15,
          snap: 1 / 5,
		  markers: true,
         
        });
      });
    }
  }
  </script>
  

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
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