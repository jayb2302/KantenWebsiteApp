<template> 

    <nav class="fixed w-full text-center shadow-slade-500 z-20">

      <RouterLink class="li text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <a class="li text-2xl mr-4 ml-4" href="#events"> Events </a>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/about"> About </RouterLink>
      
      <RouterLink class="li text-2xl mr-4 ml-4" to="/news"> News </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/sign-in"> Admin </RouterLink> 
      <RouterLink class="li text-2xl mr-4 ml-4" :class="{active: $route.name === 'Shop'}" to="/shop"> Shop </RouterLink> 
      
    </nav>
  <RouterView/>    
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
  },
}

</script>

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
@import url("https://use.typekit.net/aav7gcq.css");
@import 'modules/_variables.scss';



nav {
  font-family: 'K2D', sans-serif;
  color: $gray;
  .li {
    color: $gray
  }



}
</style>