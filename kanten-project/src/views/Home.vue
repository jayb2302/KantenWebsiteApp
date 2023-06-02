<template>
  <progress max="100" value="0"></progress>

  <div id="home-wrapper" class="home.wrapper">
    <!-- Home Section -->
    <button id="btn-kraft" type="button" @click="showModalKraft = !showModalKraft" 
    class=" z-10 ">
      <p>Kraftværket</p>
    </button>
    <section id="home" class="w-full h-screen">
      <img src="../assets/kantenhomelogo.gif" class="m-auto top-52 " alt="" />
      <KraftModal :show="showModalKraft" />
    </section>

    <div class="wrapper w-full">
      <!-- Upcoming Events Section -->  
      
      <section id="events" class="w-full ">
        <div :key="eventsText" class="text ">
            <p> Upcoming Events </p>
          </div>
        
          <Events :key="'eventsKey'" />
       
      </section>

      <!-- Our Genre Section -->
      <section id="genre" class="w-full pt-52">
          
            <div :key="genreText" class="text left-20">
              <p class="">Discover</p>
            </div>
            <Genre class="genre-box" :key="genreKey" />
         
      </section>
      <!-- Recent Posts Section -->
      <section id="posts" class="w-10/12 m-auto ">
        
            <div :key="genreText" class="text left-10">
              <p class="">Recent Posts</p>
            </div>
             
        <div class="recent-posts w-full flex flex-col lg:flex-row gap-5 place-items-center ">
        
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fposts%2Fpfbid022gnzUfacaS96zMnfKfF47RpUjz5w3msHchRfDDVZCgKateWQvkEQik6XENDfyr1Jl&show_text=true&width=500"
            width="500"
            height="712"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fposts%2Fpfbid034yhdt6CAyNiU7h9NHvtXttbb2ciHdwSY6m79wYebSPThosttbVWF3HPEb12CYg9Sl&show_text=true&width=500"
              width="500"
              height="738"

              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>     
          <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkanten.esbjerg%2Fposts%2Fpfbid034yhdt6CAyNiU7h9NHvtXttbb2ciHdwSY6m79wYebSPThosttbVWF3HPEb12CYg9Sl&show_text=true&width=500"
              width="500"
              height="738"

              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>      
        </div>
      </section>

       <!-- Newsletter section --> 

       <section id="news" class="py-10 flex flex-col justify-center  h-auto">
          <h2 class="text-3xl font-bold mb-5 text-center"></h2>
		<div class="newsbg  "><Newsletter/>
    </div>
  </section>

      <!-- Footer Section -->
      <footer id="footer" class="flex flex-col w-full ">
        <div class="footer-content flex flex-row justify-center">
          <div class="footer-list w-3/12 ">
            <h3>Find us here</h3>
            <ul>
              <li>
                <h4>Kanten</h4>
                <a href="https://goo.gl/maps/FiNur8K3VDgcWFk39">FINSENSGADE 1, 6700 Esbjerg</a>
              </li>
              <li>
                <h4>Kraftværket</h4>
                <a href="https://goo.gl/maps/m9AhRALJE7bfsctq9">GL NOVRUPVEJ 14, 6705 ESBJERG Ø</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact w-3/12 ">
            <div class="footer-widget-heading">
              <h3>Contact us</h3>
            </div>
            <ul>
              <li>
                <h4>Phone</h4>
                <p>+45 28 97 11 85</p>
              </li>
              <li>
                <h4>E-mail</h4>
                <p>MUSIKFORENINGENKANTEN@GMAIL.COM</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="copyright-area  ">
          <div class="copyright">
            <p>Copyright &copy; 2018, All Right Reserved Kanten</p>
          </div>
          <div class="footer-widget">

            <!-- Follow button -->
            <!-- <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i class='bx bxl-facebook' style='color:$whitefff'></i></a>
                    <a href="#"><i class='bx bxl-instagram' style='color:$whitefff'  ></i></a>
                  </div> -->
          </div>
        </div>

        <img src="../assets/img/Logo.png" class="img-fluid" alt="logo">
        <RouterLink class="login  fixed right-1/2 " to="/sign-in"> Admin </RouterLink>
      </footer>
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

export default {
  name: "HomePage",

  components: {
    KraftModal,
    Genre,
    Events,
    Newsletter,
    routerView: useRouter.component,
  },

  setup() {
    const showModalKraft = ref(false);
    const showGenreSection = ref(false);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(0px)";
      console.log("after");
    };

    const enter = (el, done) => {
      const index = Array.from(el.parentNode.children).indexOf(el);
      const directions = ["top", "left", "right", "bottom"];
      const direction = directions[index % directions.length];

   

      const finalPosition = { opacity: 1, x: 0, y: 10 };

      gsap.fromTo(el, initialPosition[direction], {
        ...finalPosition,
        opacity: 0.8,
        y: 100,
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


      gsap.set(".wrapper", { opacity: 0, y: "0%" });
      ScrollTrigger.create({
        trigger: "#events", // Use the #genre section as the trigger
        start: "top top ",
        end: "bottom bottom",
        duration: 0.2,
        scrub: 0,


        onEnter: () => {
          gsap.to(".wrapper", { opacity: 1, y: 0 });
          showGenreSection.value = true;
        },// Show the .wrapper when entering the trigger area

        onLeaveBack: () => {
          gsap.to(".wrapper", { opacity: 0, y: 100 });
          showGenreSection.value = true;
        },// Hide the .wrapper when leaving the trigger area
      });

      ScrollTrigger.create({
        trigger: "#home-wrapper",
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
  background: linear-gradient(to left,
      $kpink,
      $kblue,
      $kyellow,
      $kgreen,
      $primarytwo,
      $kred );
  background-attachment: fixed;
}

progress::-moz-progress-bar {
  background: linear-gradient((45deg),
      $kpink,
      $kblue,
      $kyellow,
      $kgreen,
      $primarytwo,
      $kred );
  background-attachment: fixed;
}

#btn-kraft {
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
  color: $white;
  box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 1px 3px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 31px 12px rgb(255, 255, 255);
  transition: all 0.5s;
  box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kblue;
    animation: animate 3s linear infinite;
  

@keyframes animate {
    0% {
      box-shadow: 0 0 0 2px $kblue, 0 0 20px 1px $kblue;
    }
    40% {
      box-shadow: 0 0 0 2px $kblue, 0 0 30px 2px $kyellow;
    }
    60% {
      box-shadow: 0 0 0 2px $kblue, 0 0 40px 3px $kpink;
    } 
    80% {
      box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kgreen;
    }
    100% {
      box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kblue;
    }
  }
  
  p {
    letter-spacing: 9px;
    font-family: $brother;
    text-transform: uppercase;
    rotate: 90deg;
    top: -30%;
  }

  &:hover {
    height: 440px;
    border-color: $white;
    font-size: 2.2em;
    transform: scaleX(1);
    box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 2px 3px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 41px 12px rgb(255, 255, 255);
  }
}
.text {
  position: fixed;
  color: $white;
  background: $primaryone;
  z-index: 10;
  font-size: 1.3rem;
  width: auto;
  padding-top: 1%;
  padding-left: 1%;
  padding-right: 1%;
  height: 65px;
  top: 13%;
  margin-left: -5%;
  color: $white;
  box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 1px 3px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 31px 12px rgb(255, 255, 255);
  transition: all 0.5s;
  letter-spacing: 9px;
  font-family: $brother;
  text-transform: uppercase;
  rotate: -90deg;
  }
#home {
  background-image: url("../assets/kantenbg.webp");
  background-size: cover;
  position: fixed;
  filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
  -webkit-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
  -moz-filter: grayscale(76%) blur(1px) brightness(49%) hue-rotate(273deg) saturate(170%) opacity(87%) contrast(206%) invert(3%);
  transition: opacity 0.5s ease-in-out;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
    
  //   /* Adjust the height as needed */

  // }

}

#events {
  
  .test {
    
    top: 2%;
  }
}


#genre {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(79, 44, 95, 0.3) 20%, rgba(79, 44, 95, 0.3) 60%, rgba(37, 38, 37, 0.6) 70%, rgba(37, 38, 37, 0) 100%);
  
  .genre-box{
    transition: all 1s ease 0s;

  }
  .text {
    top: 35%;
    
    
  }

}

#posts {
  
  background: linear-gradient(180deg, rgba(69, 68, 68, 0) 0%, rgba(37, 38, 37, 1) 57%, rgba(69, 68, 68, 0.439) 0%, );
 iframe{
  background: $gray;
 }
  .text {
    top: 57%;
    
    
  }
}

#footer {
  font-family: $brother;
  background: $primaryone;
  padding: 0;
  height: 300px;
  padding-top: 1%;
  .footer-content {

    ul {
      list-style-type: none;
      padding: 0;
      a {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
      }
      p {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
        line-height: 28px;
      }
    }

    h4 {
      font-size: 1.2em;
      padding-top: 3%;
      color: $gray;
      font-weight: 800;
    }

    h3 {
      color: $white;
      font-weight: 800;
      position: relative;
      font-size: 1.2em;

      &::before {
        content: "";
        position: absolute;
        bottom: -7px;
        height: 2px;
        width: 117px;
        background: $kpink;
      }
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 2%;
    height: 10em;
  }
  .copyright {
    margin: 0;
    font-size: 1em;
    color: $gray;
    text-align: center;
    padding-top: 5%;
    opacity: 0.5;
  }
  .login {
    color: gray;
 
  }
}

/* Newsletter */
.newsbg{
  margin: auto;
}

</style>
