<template>
  <div class="w-10/12 title has-text-centered">
    <!-- Your title content here -->
  </div>
  <form @submit.prevent="addEvent">
    <div class="field is-grouped flex flex-column flex p-2 m-2">
      <div class="control is-expanded">
        <input v-model="newEventTitle" class="input" type="text" placeholder="Title" />
      </div>
      <p class="control is-expanded">
        <input v-model="newEventArtist" class="input" type="text" placeholder="Artist" />
      </p>
      <p class="control is-expanded">
        <input v-model="newEventDescription" class="input" type="text" placeholder="Description" />
      </p>
      <p class="control is-expanded">
        <input v-model="newEventVenue" class="input" type="text" placeholder="Venue" />
      </p>

      <p class="control is-expanded">
        <input @change="uploadImg" class="input" type="file" placeholder="Picture" />
      </p>

   
      <di class="control">
        <button :disabled="!newEventContent" class="button is-info">
          Add
        </button>
      </di>
    </div>
  </form>

  <div v-for="event in events" :key="event.id" class="card mb-5" :class="{ 'has-background-success-light': event.done }">
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile is-vcentered">
          <div class="column" :class="{ 'has-text-success line-through': event.done }">
            <p><strong>{{ event.content }}</strong> </p>
            <p><strong>Title:</strong> {{ event.title }}</p>
            <p><strong>Artist:</strong> {{ event.artist }}</p>
            <p><strong>Description:</strong> {{ event.description }}</p>
            <p><strong>Date:</strong> {{ event.date }}</p>
            <p><strong>Time:</strong> {{ event.time }}</p>
            <p><strong>Tags:</strong> {{ event.tags }}</p>
            
          </div>
          <div class="column is-5 has-text-right">
            <button @click="toggleDone(event.id)" class="button" :class="event.done ? 'is-success' : 'is-light'">
              &check;
            </button>
            <button @click="deleteEvent(event.id)" class="button is-danger">
              &cross;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';


const events = ref('');
const newEventTitle = ref('');
const newEventDescription = ref('');
const newEventVenue = ref('');
const newEventContent = ref('');
const newEventArtist = ref('');

onMounted(() => {
  onSnapshot(collection(db, 'events'), (querySnapshot) => {
    events.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        artist: doc.data().artist,
        description: doc.data().description,
        venue: doc.data().venue,
        done: doc.data().done,
    }));
  });
});

const addEvent = () => {
  if (newEventContent.value.trim() !== '') {
    addDoc(collection(db, 'events'), {
      title: newEventTitle.value,
      artist: newEventArtist.value,
      description: newEventDescription.value,
      venue: newEventVenue.value,
      done: false,
    });
    newEventContent.value = ''
    newEventTitle.value = ''
    newEventArtist.value = ''
    newEventDescription.value = ''
    newEventDate.value = ''
    
  }
};

const deleteEvent = (id) => {
  events.value = events.value.filter((event) => event.id !== id);
};

const toggleDone = (id) => {
  const event = events.value.find((event) => event.id === id);
  if (event) {
    event.done = !event.done;
  }
};
</script>

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
</style>
