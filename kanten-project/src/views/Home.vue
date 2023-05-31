<template>
  <progress max="100" value="0"></progress>

  <div ref="body">

    <!-- Home Section -->
      <button
        type="button"
        @click="showModalKraft = !showModalKraft"
        class=" z-10 "
      >
        <p>Kraftværket</p>
      </button>
    <section id="home" class="w-full h-screen"
    >
      <div class="logo">
        <img src="../assets/kantenhomelogo.gif" class="m-auto top-52" alt="" />
      </div>

      <!-- Home Section Content -->
     
      <KraftModal :show="showModalKraft" />
    </section>

    <div class="wrapper ">
<<<<<<< Updated upstream

    <div class="wrapper">
    </div>
  <!-- Our Genre Section -->
    <section id="genre" class="w-full h-screen justify-center text-center"
=======
      <!-- Upcoming Events Section -->
      <section id="events" class="py-10 w-full relative   z-10 mb-52 h-6/6">
        <TransitionGroup
          appear
          tag="div"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <h2 class=" font-bold  mt-28 relative pb-3 text-center">Upcoming Events</h2>
          <Events />
        </TransitionGroup> 
        
      </section>

    <!-- Our Genre Section -->
    <section id="genre" class="w-full justify-center text-center"
>>>>>>> Stashed changes
    >
      <div class="flex  justify-between ">
        <Genre />
      </div>
    </section>

   

    <!-- Recent Posts Section -->
    <section id="posts" class=" w-full">
      <h2 class="text-3xl font-bold mb-5 text-center">Recent Posts</h2>
      <div class="recents-posts flex justify-center gap-5">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fvideos%2F1627597920996117%2F&show_text=true&width=560&t=0"
          width="300"
          height="584"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fvideos%2F1627597920996117%2F&show_text=true&width=560&t=0"
          width="300"
          height="584"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fvideos%2F1627597920996117%2F&show_text=true&width=560&t=0"
          width="300"
          height="584"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fvideos%2F1627597920996117%2F&show_text=true&width=560&t=0"
          width="300"
          height="584"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
    </section>
    </div>
    </div>

</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "vue-router";
import Genre from "./Genre.vue";
import KraftModal from "../components/KraftModal.vue";
import Events from "./Events.vue";
import Newsletter from "./Newsletter.vue";
// import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",

  components: {
    KraftModal,
    Genre,
    Events,
    routerView: useRouter.component,
  },

  setup() {
    const showModalKraft = ref(false);
    const showGenreSection = ref(false);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(-600px)";
      console.log("after");
    }; 

    const enter = (el, done) => {
      const index = Array.from(el.parentNode.children).indexOf(el);
      const directions = ["top", "left", "right", "bottom"];
      const direction = directions[index % directions.length];

      const initialPosition = {
        top: { opacity: 0, y: 10, },
        left: { opacity: 0, x: 0 },
        right: { opacity: 0, x: 0 },
        bottom: { opacity: 0, x: -0 },
      };

      const finalPosition = { opacity: 1, x: 0, y: 0 };

      gsap.fromTo(el, initialPosition[direction], {
        ...finalPosition,
        opacity: 0.8,
        y: 300,
        duration: 0.7,
        delay: 1,
        ease: 1,
        onComplete: done,
        rotation: 0,
      });
    };
    onMounted(() => {
      

      gsap.registerPlugin(ScrollTrigger);
      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 },
      });
     
    
      gsap.set(".wrapper", { opacity: 0, y: "5%" });
      ScrollTrigger.create({
        trigger: "#events", // Use the #genre section as the trigger
        start: "top top ",
        end: "bottom bottom",
        duration: 2,
       
        onEnter: () => {
          gsap.to(".wrapper", { opacity: 1, y: 0 });
        showGenreSection.value=true; 
      },// Show the .wrapper when entering the trigger area

        onLeaveBack: () => {
          gsap.to(".wrapper", { opacity: 0, y: 100 });
          showGenreSection.value = true; 
        },// Hide the .wrapper when leaving the trigger area
      });

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
       
      });
      
      
    });

    return {
      showModalKraft, beforeEnter, enter
    };
  },
};
</script>

<style lang="scss" scoped>
@import "bulma/css/bulma.min.css";
@import "../modules/_variables.scss";

progress {
  position: fixed;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border: none;
  background: transparent;
  z-index: 102;
}
progress::-webkit-progress-bar {
  background: transparent;
}
progress::-webkit-progress-value {
  background: linear-gradient(
    to left,
    $kpink,
    $kblue,
    $kyellow,
    $kgreen,
    $primarytwo,
    $kred
  );
  background-attachment: fixed;
}
progress::-moz-progress-bar {
  background: linear-gradient(
    (45deg),
    $kpink,
    $kblue,
    $kyellow,
    $kgreen,
    $primarytwo,
    $kred
  );
  background-attachment: fixed;
}

button {
    position: fixed;
    color: $white;
    background: $primaryone;
    z-index: 10;
    right: 5%;
    font-size: 2rem;
    width: 65px;
    margin-top: 5%;
    height: 430px;
    cursor: pointer;
    color: #fff;
    box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 1px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 31px 12px rgb(255, 255, 255);
    transition: all 0.5s;

    p {
      
      letter-spacing: 9px;
      font-family: $brother;
      text-transform: uppercase;
      rotate: 90deg;
      top: -30%;
      
      
    }
    &:hover {
     height: 440px;
      border-color: #ffffff;
      font-size: 2.2em;
      transform: scaleX(1.1);
      box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
      -webkit-box-shadow: 0px 0px 2px 3px rgb(255, 255, 255);
      -moz-box-shadow: 0px 0px 41px 12px rgb(255, 255, 255);
    }
  }
#home {
  background-image: url("../assets/kantenbg.webp");
  background-size: cover;
  position: fixed;
  filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg)
    saturate(170%) opacity(87%) contrast(206%) invert(3%);
  -webkit-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg)
    saturate(170%) opacity(87%) contrast(206%) invert(3%);
  -moz-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg)
    saturate(170%) opacity(87%) contrast(206%) invert(3%);
    transition: opacity 0.5s ease-in-out;
    &::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 200px; /* Adjust the height as needed */
      
    }
  
}


#genre {
  display: flex;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(79, 44, 95, 0.3) 20%,rgba(79, 44, 95, 0.3) 60%,rgba(37,38,37,0.6) 70%, rgba(37,38,37,0) 100%);
  margin-top: -10%;
  height: 100vh;
  
}


h2 {
  text-align: center;
  font-size: 6em;
  font-family: $brother;
  height: 100px;
  margin-top: 3%;
  margin-bottom: 3%;
  padding-top: 0%;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);

}

#posts {
  background: linear-gradient(180deg, rgba(69, 68, 68, 0) 0%, rgba(37,38,37,1) 57%, rgba(69, 68, 68, 0.439) 0%,);
  
}

footer {
  font-family: $brother;
  display: flex;
  justify-content: center;
  .li {
    color: $gray;
  }
}

</style>
