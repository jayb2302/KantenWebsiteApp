<template>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/feed"> Feed </RouterLink>
    <RouterLink to="/register"> Register </RouterLink>
    <RouterLink to="/sign-in"> Login </RouterLink> 
    <RouterView/>
  </nav>

</template>

<script setup>

// import { db } from '@/firebase'

</script>

<style lang="scss" scoped>

</style>