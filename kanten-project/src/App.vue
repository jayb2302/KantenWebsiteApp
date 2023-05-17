<template> 

    <nav class="m-1 w-12/12 text-center">
        <button @click="handleSignOut" >Log out</button>

      <RouterLink class="text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/feed"> Feed </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/register"> Register </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/sign-in"> Login </RouterLink> 
      <RouterLink class="text-2xl mr-4 ml-4" to="/event"> Add Event </RouterLink> 
      <RouterView/>
    </nav>
      
</template>

<script setup>
import { ref as refVue, onMounted} from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter
const isLoggedIn = refVue(false)

let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}



</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
nav {
  font-family: 'K2D', sans-serif;
}
</style>