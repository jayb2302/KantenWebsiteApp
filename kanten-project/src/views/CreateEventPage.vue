<template>
  <div class=" mt-16 pt-10 title has-text-centered">
    <h1> Add Event </h1>
  </div>
  <button id="btn-out" @click="handleSignOut" v-if="isLoggedIn">
    <p> Sign out</p>
  </button>
  <div class="wrapper flex w-full flex-row justify-center " v-if="isLoggedIn">
    <div class="form-wrapper flex w-4/12 top-16  ">
      <form class="ml-20" @submit.prevent="addEvent">
        <div class="field is-grouped flex 
          flex-col wrap w-full justify-center 
          pt-10 gap-4">
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
            <select v-model="newEventVenue" class="select">
              <option disabled value="">Select Venue</option>
              <option value="Manaclub">Manaclub</option>
              <option value="Vertex">Vertex</option>
              <option value="Deft">Deft</option>
              <option value="Dub">Dub</option>
              <option value="Dub">Diverse</option>
            </select>
          </p>
          <p class="control is-expanded">
            <input v-model="newEventDate" id="date-input" class="input" type="date" placeholder="" />
          </p>
          <p class="control is-expanded">
            <input v-model="newEventTime" class="input" type="time" placeholder="" />
          </p>
          <p class="control is-expanded">
            <input @change="newEventImg($event)" class="input" type="file" placeholder="Picture" />
          </p>
          <div class="control">
            <button class="button is-info" :disabled="newEventImgVar === ''">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="event-container flex-col   w-5/12 ">
      <div v-for="event in events" :key="event.id" class="w-9/12 card mb-5 "
        :class="{ 'has-background-success-light': event.done }">
        <div class="card-content  ">
          <div class="content ">
            <div class="columns  is-mobile">
              <div class="column " :class="{ 'has-text-success line-through': event.done }">
                <p><strong>Title:</strong><br> 
                  {{ event.title }}</p>   
                <p><strong>Artist:</strong> <br>
                  {{ event.artist }}</p>
                <p class=""><strong>Description:</strong>  <br> 
                  {{ event.description }}</p>
                <p><strong>Date:</strong>  <br>
                  {{ event.date }}</p>
                <p><strong>Time:</strong> <br>
                  {{ event.time }}</p>
                <p><strong>Venue</strong> <br>
                  {{ event.venue }}</p>
                <img :src="event.imgURL" alt="Event Image" class="w-52 h-52">
              </div>
              <div class="column is-5 absolute right-1 has-text-right ">
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
    </div>
  </div>
  <div v-else  class=" w-screen flex-col justify-center">
    <p class="p-tag text-center">Please log in to access this page.</p>
    <button id="btn-in" class="w-screen" @click="redirectToSignIn">Log In</button>
  </div>
</template>

<script setup>
import { /* reactive,*/ onMounted, ref as refVue } from 'vue'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { db } from '@/firebase'
import router from '../router'

const redirectToSignIn = () => {
  router.push('/sign-in')
}

let newEventVenue = refVue('')
let newEventTitle = refVue('')
let newEventArtist = refVue('')
let newEventDescription = refVue('')
let newEventDate = refVue('')
let newEventImgVar = refVue('')
let newEventTime = refVue('')
let newEventTags = refVue('')

const isLoggedIn = refVue(false)

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      console.log('isLoggedIn')
    } else {
      isLoggedIn.value = false;
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}

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
        date: doc.data().date,
        time: doc.data().time,
        venue: doc.data().venue,
        imgURL: doc.data().imgURL,
        done: doc.data().done,
        tags: doc.data().tags,
      }
    })
  })
}
getEventsData();

const addEvent = () => {
  if (newEventTitle.value.trim() !== '') {
    addDoc(collection(db, 'events'), {
      title: newEventTitle.value,
      artist: newEventArtist.value,
      description: newEventDescription.value,
      imgURL: newEventImgVar.value,
      venue: newEventVenue.value,
      date: newEventDate.value,
      time: newEventTime.value,
      tags: newEventTags.value,
      done: false,
    })
    newEventTitle.value = ''
    newEventArtist.value = ''
    newEventDescription.value = ''
    newEventDate.value = ''
    newEventVenue.value = ''
    newEventTime.value = ''
    newEventTags.value = ''
    newEventImg.value = 'https://placehold.co/600x400'
  }
}

const deleteEvent = (id) => {
  events.value = events.value.filter((event) => event.id !== id)
}

const toggleDone = (id) => {
  const event = events.value.find((event) => event.id === id)
  if (event) {
    event.done = !event.done
  }
}

const storage = getStorage()

const newEventImg = async (event) => {
  let file = event.target.files[0] // get the file
  console.log('file')
  const metadata = {
    contentType: 'image/jpeg'
  }
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'images/' + file.name)
  const uploadTask = uploadBytesResumable(storageRef, file, metadata)
  uploadTask.on('state_changed',
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused')
          break
        case 'running':
          console.log('Upload is running')
          break
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break
        case 'storage/canceled':
          // User canceled the upload
          break

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)

        newEventImgVar.value = downloadURL // update variable imgURL and put the image URL link in it. 
        events.uploadBtnDisabled = false // enable button after image uploaded is complete
      })
    }


  )
}
</script>

<style lang="scss" scoped>
@import '../modules/variables';
@import 'bulma/css/bulma.min.css';


h1 {
  color: $white;
  font-family: $brother;
}

.field {
  margin: auto;
}

.control input,
.control select {
  height: 45px;
  width: 100%;
  outline: none;
  border: 1px solid $kblue;
  padding-left: 15px;
  font-size: 17px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  background-color: $primaryone;
  color: $white;
  font-family: $brother;
  font-weight: 500;

  &::placeholder {
    color: $white;
  }

  &::file-selector-button {

    color: $kblue;
    background-color: $primaryone;
    border: thin solid grey;
    border-radius: 2px;

  }
}

.control input:focus {
  border-color: $kgreen;
}


.card {
  margin: auto;
}

.card-content{
  border: 1px solid $kblue;
  padding-left: 15px;
  font-size: 17px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  background-color: $primaryone;
  color: $white;
  font-family: $k2d;
 
  font-weight: 500;
  strong {
    color: $white; 
    font-family: $brother;
  }
}

#btn-out {
  position: fixed;
  color: $white;
  background: $primaryone;
  z-index: 10;
  left: 1%;
  font-size: 1.3rem;
  width: auto;
  padding-left: 1%;
  top: 15%;
  height: 65px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 1px 3px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 31px 12px rgb(255, 255, 255);
  transition: all 0.5s;
  letter-spacing: 9px;
  font-family: $brother;
  text-transform: uppercase;
  rotate: -90deg;

}

.p-tag {
  font-size: 1.4rem;
  font-family: $k2d;
  font-weight: 600;
  
}

#btn-in {
  
  color: $white;
  background: $primaryone;
  z-index: 10;
  font-size: 1.3rem;
  width: auto;
  left: 45%;
  margin-top: 2%;
  padding-left: 1%;
  padding-right: 1%;
  top: 15%;
  height: 55px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 9px rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 1px 3px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 31px 12px rgb(255, 255, 255);
  transition: all 0.5s;
  letter-spacing: 9px;
  font-family: $brother;
  text-transform: uppercase;
}
</style>
