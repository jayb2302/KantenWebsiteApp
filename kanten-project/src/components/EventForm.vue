<template>
    <h1 class="text-4xl text-red "> Hello </h1>
    <form @submit="submitForm" class="event-form">
      <label for="title" class="form-label">
        Title:
      </label>
      <input type="text" id="title" 
        v-model="event.title" 
        required class="form-input">
  
      <label for="description" class="form-label">
        Description:
      </label>
      <textarea id="description" v-model="event.description" required class="form-textarea"></textarea>
  
      <label for="venue" class="form-label">
        Venue:
      </label>
      <input type="text" id="venue" 
      v-model="event.venue" 
      required class="form-input">
  
      <label for="image" class="form-label">
        Image:
      </label>
      <input type="file" id="image" 
        @change="handleImageUpload" 
        accept="image/*" 
        required class="form-input">
      <button type="submit" class="form-submit">
        Submit
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/storage';
  
  // Your Firebase project configuration
  const firebaseConfig = {
    // Your Firebase config details
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  // Event data

  const event = ref({
    title: '',
    description: '',
    venue: '',
    image: null,
  });
  
  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    event.image = file;
  };
  
  // Submit form
  const submitForm = async (event) => {
    event.preventDefault();
  
    // Get a reference to the storage
    const storageRef = storage.ref();
  
    // Upload the image file to Firebase Storage
    const imageRef = storageRef.child(event.image.name);
    await imageRef.put(event.image);
  
    // Get the download URL of the uploaded image
    const imageUrl = await imageRef.getDownloadURL();
  
    // Create event data object
    const eventData = {
      title: event.title,
      description: event.description,
      venue: event.venue,
      imageUrl: imageUrl,
    };
  
    // Save event data to Firebase database
    const database = firebase.database();
    database.ref('events').push(eventData);
  
    // Reset form fields
    event.title = '';
    event.description = '';
    event.venue = '';
    event.image = null;
  };
  </script>
  
  <style lang="scss">
 
  </style>
  