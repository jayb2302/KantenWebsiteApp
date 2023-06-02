<template>
  <div class="site-wrapper flex flex h-screen">
    <nav class="fixed w-full text-center fixed shadow-slade-500 z-20">

      <RouterLink class="li text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/about"> About </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" :class="{ active: $route.name === 'Shop' }" to="/shop"> Shop </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4 border-l-2 pl-9" to="/registration"> Membership </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/volunteer"> Volunteer </RouterLink>

    </nav>
 <main class="w-screen">
    <transition>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition>
  </main>
  
  </div>
</template>

<script>

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  
}
</script>

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
@import url("https://use.typekit.net/aav7gcq.css");
@import 'modules/_variables.scss';

.site-wrapper {
  nav {
    font-family: $brother;
    color: $gray;
    background: linear-gradient(to top,rgba(37, 38, 37, 0) 0%,rgb(68, 15, 99) 100%);
    height: 12vh;
    padding-top: 1%;

    .li {
      color: $gray
    }
  }
}
</style>