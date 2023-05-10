<template> 
  <div class="header w-screen flex flex-column flex-wrap">
    <nav class="m-1 flex w-full">
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/feed"> Feed </RouterLink>
      <RouterLink to="/register"> Register </RouterLink>
      <RouterLink to="/sign-in"> Login </RouterLink> 
      <RouterView/>
    </nav>

    <div class=" w-10/12 title has-text-centered">
    Events
    </div>
   
    <div class="field is-grouped max-w-md flex p-2 m-2">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo">
      </p>
      <p class="control">
        <a class="button is-info">
          Add
        </a>
      </p>
    </div>
   
    <div class="card w-10/12">
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>

// import { db } from '@/firebase'

</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
</style>