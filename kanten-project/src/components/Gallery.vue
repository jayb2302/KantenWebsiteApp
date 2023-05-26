<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="../assets/img/01.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/02.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/03.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/04.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/05.JPG"/></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/06.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/07.JPG" /></swiper-slide
      ><swiper-slide
        ><img
          src="../assets/img/08.JPG" /></swiper-slide
      ><swiper-slide
        ><img src="../assets/img/09.JPG" /></swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
  </script>
  


<style lang="scss" scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px; /*
  padding-bottom: 50px; */
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 600px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>