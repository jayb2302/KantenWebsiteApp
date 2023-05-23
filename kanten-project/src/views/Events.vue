<template>
    <div class="w-10/12 title has-text-centered">
      <!-- Your title content here -->
    </div>
  
    <div class="container">
      <!-- <div class="accordion__tab">Event</div> -->
      <div class="accordion__wrapper">
        <dl class="accordion__box">
          <div v-for="event in events" :key="event.id" class="card mb-5 w-full" :class="{ 'has-background-success-light': event.done }">
            <div class="card-content w-9/12">
              <div class="content">
                <div class="columns is-mobile is-vcentered">
                  <div class="column" :class="{ 'has-text-success line-through': event.done }">
                    <p><strong>Title:</strong> {{ event.title }}</p>
                    <span class="accordion__tab"><p><strong></strong> {{ formatDate(event.title) }}</p></span>
                    <p><strong>Artist:</strong> {{ event.artist }}</p>
                    <p><strong>Description:</strong> {{ event.description }}</p>
                    <span class="accordion__number"><p><strong>Date:</strong> {{ formatDate(event.date) }}</p></span>
                    <p><strong>Time:</strong> {{ event.time }}</p>
                    <dd  class="accordion__text">
                        <img :src="event.imgURL" alt="Event Image" class="w-52 h-52">
                    </dd>
                  </div>
                  <p>{{ event.tags }}</p>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
     
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref as refVue } from 'vue'
  import { collection, onSnapshot } from 'firebase/firestore'
  import { db } from '@/firebase'
  
  const events = refVue([])
  const eventDataRef = collection(db, "events")
  
  const getEventsData = () => {
    onSnapshot(eventDataRef, (snapshot) => {
      events.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          title: doc.data().title,
          artist: doc.data().artist,
          description: doc.data().description,
          venue: doc.data().venue,
          date: doc.data().date,
          imgURL: doc.data().imgURL,
          done: doc.data().done,
          time: doc.data().time,
        }
      })
    })
  }
  getEventsData();
  
  const formatDate = (date) => {
    // Format the date as desired using the toLocaleDateString() function
    return new Date(date).toLocaleDateString();
  }
  </script>
  
  <style lang="scss" scoped>
  @import 'bulma/css/bulma.min.css';
  
  .rb {
    box-sizing: border-box;
    border-color: red;
    border-width: 1px;
  }
  
  .bb {
    box-sizing: border-box;
    border-color: rgb(163, 163, 175);
    border-width: 1px;
  }
  </style>
  
  