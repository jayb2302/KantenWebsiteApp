<template> 

    <nav class="m-1 w-12/12 text-cente z-20">

      <RouterLink class="text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/sign-in"> Login </RouterLink> 
      <RouterLink class="text-2xl mr-4 ml-4" to="/shop"> Shop </RouterLink> 
      
    </nav>
  <RouterView/>    
</template>

<script setup>


</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
@import url("https://use.typekit.net/aav7gcq.css");

nav {
  font-family: 'K2D', sans-serif;
}
</style>