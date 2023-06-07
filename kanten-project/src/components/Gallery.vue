<template>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }" :pagination="true" :modules="modules" :autoplay="{
  delay: 1500,
  disableOnInteraction: true,
}" class="mySwiper">
    <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg8.jpg?alt=media&token=4c545543-44b0-4407-a722-23a08fb1fb9b"> </swiper-slide>
    <swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg12.jpg?alt=media&token=2fcdf5a5-7660-4793-a8fe-ecba057b7d98" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg14.jpg?alt=media&token=5aaa33be-c3b1-42eb-b81f-ea10e7c72d66" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg16.jpg?alt=media&token=2de86444-0e2f-4d67-9641-8c803f9eda60" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg21.jpg?alt=media&token=40f2d1da-a11c-46ec-9609-15cdcadd03f0" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg23.jpg?alt=media&token=78d4b802-abcc-4b94-a431-6e0c6d2d1977" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg23.jpg?alt=media&token=78d4b802-abcc-4b94-a431-6e0c6d2d1977" /></swiper-slide><swiper-slide><img
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web-a8989.appspot.com/o/Kanten%20-%20Gallery%2FCrowd%2Fimg8.jpg?alt=media&token=4c545543-44b0-4407-a722-23a08fb1fb9b" /></swiper-slide>
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
import { EffectCoverflow, Pagination, Autoplay, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    
    return {
      modules: [EffectCoverflow, Pagination, Autoplay, EffectFade],
    };
  },
};
</script>
  


<style lang="scss" scoped>
#app {
  height: 100%
}

html,
body {
  position: relative;

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
  width: 90%;
  padding-top: 50px;
  padding-bottom: 50px;

}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 380px;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>