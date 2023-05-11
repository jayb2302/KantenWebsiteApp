<template> 

    <nav class="m-1 w-full text-center">
      <RouterLink class="text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/feed"> Feed </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/register"> Register </RouterLink>
      <RouterLink class="text-2xl mr-4 ml-4" to="/sign-in"> Login </RouterLink> 
      <RouterView/>
    </nav>
    <!-- <div class="w-10/12 title has-text-centered">
      Events
    </div>
    <form
      @submit.mrevent="addEvent"
    >      
     
    
      <div class="field is-grouped max-w-md flex p-2 m-2">
        <p class="control is-expanded">
          <input
            v-model="newEventContent"
            class="input"
            type="text"
            placeholder="Add a todo">
        </p>
        <p class="control">
          <button
            :disabled="!newEventContent"
            class="button is-info">
            Add
          </button>
        </p>
      </div>
    
      
    </form>
    <div
        v-for="event in events"
        class="card mb-5"
        :class="{ 'has-background-success-light' : event.done }">

        <div class="card-content">
          <div class="content">

          <div class="columns is-mobile is-vcentered">
            <div
              class="column"
              :class="{ 'has-text-success line-through' : event.done}">
            {{event.content}}
            </div>

            <div class="column is-5 has-text-right">
             <button
                @click="toggleDone(event.id)"
                class="button"
                :class="event.done ? 'is-success' : 'is-light'">
                &check;
              </button>
              <button
                @click="deleteEvent(event.id)"
                class="button is-danger">
                &cross;
              </button>
            </div> 
          
        </div>
        </div>
      </div>
    </div> -->
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'


const events = ref([
  // {
  //   id:'id1',
  //   content: 'Add this',
  //   done: false
  // },
  // {
  //   id:'id2',
  //   content: 'Add this',
  //   done: true
  // },
])



const newEventContent = ref ('')

const addEvent = () => {
  const newEvent = {
    id: uuidv4(),
    content: newEventContent.value,
    done: false
  }
  events.value.unshift(newEvent)
  newEventContent.value = ''
}


const deleteEvent = id => {
  events.value = events.value.filter(event => event.id !== id)
}

const toggleDone = id => {

  const index = events.value.findIndex(event => event.id === id)
  const event = events.value[index]
  event.done = !event.done
  events.value[index] = event


}
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
nav {
  font-family: 'K2D', sans-serif;
}
</style>