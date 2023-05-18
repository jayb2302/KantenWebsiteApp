<template>
    <main class="background w-full lg:w-full flex flex-col justify-center">
        <header class=" rb w-full h-96 ">
            <div class="maintitle rb h-100 top-16 text-8xl ">
               <h1 class="text-center">KANTEN</h1> 
            </div>
            <div class="rb lg:text-5xl uppercase ">
               <h2 class="text-center">Esbjergs nye kulturfælleskab</h2> 
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
   .bb{
   box-sizing: border-box;
   border-width: 0.5px;
   border-color: blue;
   }
   h1 {
    font-weight: 800;
    // filter:blur(9px);
    opacity: 0.3;
    color: #a020ea;
   }
}
</style>