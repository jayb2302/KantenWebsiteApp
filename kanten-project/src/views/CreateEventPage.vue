<template>

  <div class=" title has-text-centered">
    <!-- Your title content here -->
  </div>
  <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  <div class="wrapper flex w-full flex-col ">
    <div class="form-wrapper flex w-full  ">
      <form class="m-auto" @submit.prevent="addEvent">
        <div class="field is-grouped flex flex-col wrap w-full justify-center  pt-10 gap-4">
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
          </select>          </p>
          <p class="control is-expanded">
            <input v-model="newEventDate" id="date-input" class="input" type="date" placeholder="" />
          </p>
          <p class="control is-expanded">
            <input v-model="newEventTime" class="input" type="time" placeholder="" />
          </p>
          <p class="control is-expanded">
            <input v-model="newEventTags" class="input" type="text" placeholder="Tags" />
          </p>

          <p class="control is-expanded">
            <input @change="newEventImg($event)" class="input" type="file" placeholder="Picture" />
          </p> 

      
          <div class="control">
            <button  class="button is-info"> <!-- :disabled="!newEventTitle" --> 
              Add
            </button>
          </div>
        </div>
      </form>
    </div> 
    <div v-for="event in events" :key="event.id" class="w-8/12 card mb-5" :class="{ 'has-background-success-light': event.done }">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{ 'has-text-success line-through': event.done }">
              <p><strong>Title:</strong> {{ event.title }}</p>
              <p><strong>Artist:</strong> {{ event.artist }}</p>
              <p><strong>Description:</strong> {{ event.description }}</p>
              <p><strong>Date:</strong> {{ event.date }}</p>
              <p><strong>Time:</strong> {{ event.time }}</p>
              <p><strong>Tags:</strong> {{ event.tags }}</p>
              <p><strong>Venue</strong> {{ event.venue }}</p>
              <img :src="event.imgURL" alt="Event Image" class="w-52 h-52">
              
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
  </div>
</template>

<script setup>
import { /* reactive,*/ onMounted,  ref as refVue } from 'vue'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { db } from '@/firebase'
import router from '../router'


 let  newEventVenue = refVue('')
 let  newEventTitle = refVue('')
 let  newEventArtist = refVue('')
 let  newEventDescription = refVue('')
 let  newEventDate = refVue('')
 let  newEventImgVar = refVue('')
 let  newEventTime = refVue('')
 let  newEventTags = refVue('')

const isLoggedIn = refVue(false)

let auth;
onMounted(() => {
  auth= getAuth ();
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
    console.log("is it reaching this step", events )

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
    newEventVenue.value =''
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
@import 'bulma/css/bulma.min.css';

.field {
  margin: auto;
}
.card {
  margin: auto;
}

</style>
