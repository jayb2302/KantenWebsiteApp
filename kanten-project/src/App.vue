<template>
  <div class="site-wrapper flex ">
    <nav class="fixed w-full text-start fixed shadow-slade-500 z-30">
      <div class="dropdown visible md:invisible lg:invisible">
        <button class="dropdown-toggle pt-2 pl-8"><font-awesome-icon :icon="['fas', 'bars']" /></button>
        <div class="dropdown-menu">
          <RouterLink class="li text-2xl  ml-0" to="/"> Home </RouterLink>
          <RouterLink class="li text-2xl  ml-0" to="/about"> About </RouterLink>
          <RouterLink class="li text-2xl  ml-0" :class="{ active: $route.name === 'Shop' }" to="/shop"> Shop </RouterLink>
          <RouterLink class="li text-2xl  ml-0  " to="/registration"> Membership </RouterLink>
          <RouterLink class="li text-2xl  ml-0" to="/volunteer"> Volunteer </RouterLink>
        </div>
      </div>

      <div class="navbar-links justify-center invisible md:visible lg:visible  ">
        <RouterLink class="li text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
        <RouterLink class="li text-2xl mr-4 ml-4" to="/about"> About </RouterLink>
        <RouterLink class="li text-2xl mr-4 ml-4" :class="{ active: $route.name === 'Shop' }" to="/shop"> Shop </RouterLink>
        <RouterLink class="li text-2xl mr-4 ml-4 border-l-2 pl-9" to="/registration"> Membership </RouterLink>
        <RouterLink class="li text-2xl mr-4 ml-4" to="/volunteer"> Volunteer </RouterLink>
      </div>
    </nav>

 <main class="">

      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
   
  </main>

  <footer class=" app-footer pt-3 pl-20 flex  md:pl-4 lg:pl-3  lg:flex-col   lg:h-28 lg:w-2/12 w-4/12 ">
    <a  href="https://www.instagram.com/kanten_esbjerg/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'instagram']"/></a>
    <a  href="https://www.facebook.com/kanten.esbjerg" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'facebook-f']"/></a>

  </footer>
  
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


.dropdown-toggle {
  display: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  width: 250px;
  padding-top: 1%;
  right: 0;
  display: none;
  background: linear-gradient((-120deg),rgba(37, 38, 37, 0) 0%,rgb(45, 45, 45, 1) 100%);
  padding: 1rem;
 
}

.dropdown-menu a {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 0.2rem;
  &:hover {
    color: $kpink;
  }
}

.navbar-links {
  display: flex;
}

.navbar-links a {
  display: inline-block;
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  
}
.app-footer {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  top: 0;
  left: 0%;
  z-index: 52000;
  padding-bottom: 8%;
  margin-top: 0%;
  
  a {
    display: flex;
    top: 0;
    left: 0;
    width: 35px;
    height: 50px;
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
    justify-content: center;
    align-items: center;
    color: $kblue;
    margin-bottom: 5%;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 20%;
        transition: .8s;
        transform: scale(4);
        z-index: -1;
      }
      &:hover {
        background: linear-gradient( 217deg, rgba(46, 16, 60, 0.2), rgba(194, 80, 242, 0) 70.71%), 
                    linear-gradient( 127deg, rgba(102, 56, 166, 0.2), rgba(5, 242, 219, 0) 70.71%),
                    linear-gradient( 336deg, rgba(74, 239, 90, 0.2), rgba(0, 0, 255, 0) 70.71%);
        box-shadow: 0 0 15px rgba(137, 175, 236, 0.5);
        color: $gray;
        border-radius: 10%;
        outline: 1.5px solid rgba(137, 175, 236, 0.5);
        transition: .8s;
        transform: scale(1.2);
       
      }  
      &:hover::before{
        transform: scale(1.1);
        
      }
      .icon{
        height: 31px;
        width: 31px;
      }

    
  }
  
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .dropdown-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: $kblue;
    z-index: 53100;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  
  }
  .app-footer{
    left: 25%;
  }
}


</style>