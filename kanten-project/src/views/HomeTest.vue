<template>
    <div class="w-full flex flex-col justify-center about">
        <Transition 
            appear 
            name="fade"
            @before-enter="beforeEnter"
            @enter="enter"
        >      
        <h1 class="text-4xl text-center pb-6">About</h1>   </Transition>   
        <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam placeat, eligendi sed doloremque aliquam saepe eos quo aperiam dolor sint eaque itaque perspiciatis cum possimus dignissimos et, facilis vero odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias similique, doloremque dolorum ipsa asperiores dolor repellendus nulla et tempora quaerat cumque possimus tenetur eligendi error! Nihil recusandae ea repudiandae?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda incidunt officia voluptas recusandae illo quas, ipsum pariatur mollitia quasi, minima repellat rerum. Rerum quam non nobis provident, eveniet consequuntur?</p>
      
    </div>
</template>

<script>
// import {ref} from 'vue'
import {gsap} from 'gsap'


export default {
    setup() {
        const beforeEnter = (el) => {
            console.log ('before enter - set initial state')
            el.style.transform = 'translateY(-60px)'
            el.style.opacity = 0
        }
        const enter = (el) => {
            console.log('starting to enter - make transition')
            gsap.to(el,{
                duration: 1,
                y: 0,
                opacity: 1
            })
        }
        return {
            beforeEnter, enter
        }
    }
}
</script>



<style lang="scss" scoped>

</style>