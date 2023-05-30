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

    <div class="wrapper absolute">
  <!-- Our Genre Section -->
    <section id="genre" class="w-full h-screen justify-center text-center"
    >
      <div class="flex  justify-between ">
        <Genre />
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section id="events" class="py-10 w-full mt-20 z-10 mb-20 h-screen">
      <h2 class="text-3xl font-bold mb-5 text-center">Upcoming Events</h2>
     
    <Events />
    </section>

    <!-- Recent Posts Section -->
    <section id="posts" class="top-16 mt-36 w-full">
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
  
    <!-- Footer section -->
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

    onMounted(() => {
      

      gsap.registerPlugin(ScrollTrigger);
      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 },
      });
     
    
      gsap.set(".wrapper", { opacity: 0, y: "2%" });
      ScrollTrigger.create({
        trigger: "#genre", // Use the #genre section as the trigger
        start: "top top ",
        end: "top bottom",
        duration: 3,
       
        markers: true,
       
        onEnter: () => {
          gsap.to(".wrapper", { opacity: 1, y: 0 });
        showGenreSection.value=true; 
      },// Show the .wrapper when entering the trigger area
        onLeaveBack: () => {
          gsap.to(".wrapper", { opacity: 1, y: 0 });
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
      showModalKraft,
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
      top: -25%;
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.709) 0%, rgba(37,38,37,1) 57%,rgba(37,38,37,1) 57%,rgba(37,38,37,1) 0%);
  padding-top: 10%;
 height: 120vh;
  
}


h2 {
  text-align: center;
  font-size: 6em;
  font-family: $brother;
  height: 300px;
  margin-top: 0;
  padding-top: 10%;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);

}

#posts {
  background: linear-gradient(180deg, rgba(69, 68, 68, 0) 0%, rgba(37,38,37,1) 57%, rgba(69, 68, 68, 0.439) 70%,);
  padding-top: 5%;
  position: relative;
}

// #team {
//   .our-team {
//     padding: 15px 0 25px;
//     margin-bottom: 30px;
//     background-color: $white;
//     text-align: center;
//     overflow: hidden;
//     position: relative;
//     box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);
//     -webkit-box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);
//     -moz-box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);

//     .name {
//       font-size: 1.3rem;
//     }
//     .picture {
//       display: inline-block;
//       height: 130px;
//       width: 180px;
//       margin-bottom: 50px;
//       z-index: 1;
//       position: relative;
//       &::before {
//         content: "";
//         width: 100%;
//         height: 120%;
//         border-radius: 50%;
//         background-color: $primaryone;
//         position: absolute;
//         bottom: 100%;
//         right: 0;
//         left: 0;
//         opacity: 1;
//         transform: scale(3);
//         transition: all 0.3s linear 0s;
//       }
//       &::after {
//         content: "";
//         height: 100%;
//         border-radius: 50%;
//         background-color: $primaryone;
//         position: absolute;
//         top: 10%;
//         left: 0;
//         z-index: -1;
//       }
//       img {
//         margin-left: auto;
//         margin-right: auto;
//         width: 90%;
//         height: auto;
//         border-radius: 50%;
//         transform: scale(1);
//         transition: all 1.3s ease 0s;
//       }
//     }
//   }

//   .our-team:hover .picture::before {
//     height: 100%;
//   }

//   .our-team:hover .picture img {
//     box-shadow: 0 0 0 3px $kblue;

//     transform: scale(0.9);
//   }

//   .our-team:hover .team-content {
//     transform: translateY(-30px);
//     transition: all 1s ease 0s;
//   }

//   .our-team .title {
//     display: block;
//     font-size: 19px;
//     color: $primaryone;
//     text-transform: capitalize;
//   }

//   .our-team .social {
//     width: 100%;
//     padding: 0;
//     padding-top: 2%;
//     margin: 0;
//     background-color: $gray;
//     border-bottom: 4px solid $kblue;
//     position: absolute;
//     bottom: -100px;
//     left: 0;
//     transition: all 1s ease 0s;
//   }

//   .our-team:hover .social {
//     bottom: 0;
//     box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
//     -webkit-box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
//     -moz-box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
//   }

//   .our-team .social li {
//     display: inline-block;
//   }

//   .our-team .social li a {
//     display: block;
//     padding: 5px;

//     color: $white;
//     transition: all 0.3s ease 0s;
//     text-decoration: none;
//   }

//   .our-team .social li a:hover {
//     color: $kpink;
//     background-color: transparent;
//   }
// }

footer {
  font-family: $brother;
  display: flex;
  justify-content: center;
  .li {
    color: $gray;
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
