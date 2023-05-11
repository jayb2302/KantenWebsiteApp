<template>
    <main class="background lg:w-12/12 flex flex-col justify-center">
        <header class="rb w-fit">
            <div class="maintitle  top-16  lg:text-[470px] ">
               <h1 class="">KANTEN</h1> 
            </div>
            <div class=" rb lg:text-7xl uppercase ">
               <h2 class="">Esbjergs nye kulturfælleskab</h2> 
            </div>
        </header>
        <div class="event-section rb w-12/12 h-[100vh] ">
            <div class=" rb lg:text-3xl uppercase ">
               <h2 class=""></h2> 
            </div>
        </div>
        <div class="upcoming-section rb w-12/12 h-[100vh] ">
            <div class=" rb lg:text-3xl uppercase ">
               <h2 class="">Upcoming events</h2> 
            </div>
        </div>
    </main>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
main {
font-family: 'K2D', sans-serif;
   .rb{
   box-sizing: border-box;
   border-width: 0.5px;
   border-color: red;
   }
   h1 {
    font-weight: 800;
    filter:blur(9px);
    opacity: 0.3;
   }
}
</style>