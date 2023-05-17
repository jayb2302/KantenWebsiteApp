import { db } from '../firebase'
import { ref } from 'vue'
import { collection, onSnapshot, doc , deleteDoc, addDoc, updateDoc  } from "firebase/firestore";

const useEvents = () => {
  
  const events = ref([]) 
  const eventDataRef = collection(db, "events")

  const AddEventData = ref('')


  const getEventsData = () => {
    onSnapshot(eventDataRef, (snapshot) => {
      events.value = querysnapshot.docs.map(doc => {
       // console.log("is it reaching this step")
        return {
            id: doc.id,
            title: doc.data().title,
            artist: doc.data().artist,
            description: doc.data().description,
            venue: doc.data().venue,
            imgURL: doc.data().imgURL,
            done: doc.data().done,
        }
      })
    })
  }

  // Add static data to Firebase
  const firebaseAddSingleEvent = async() => {
    await addDoc(collection(db, 'events'), {
        title: newEventTitle.value,
        artist: newEventArtist.value,
        description: newEventDescription.value,
        imgURL: events.newEventImg,
        venue: newEventVenue.value,
        done: false,
    }
    ).then(() => {
       // events.value.setContents('')
    })
  }

  // UpdateDoc with .find() method. 
  const firebaseUpdateSingleEvent = async(id) => {
    await updateDoc(doc(eventDataRef, id), {
      //title: Events.value.find(event => event.id === id).title,
      description: Events.value.find(event => event.id === id).description,
    });
  
  }

  // Alternate way: Using the v-for loop and the attached event.id to track which object we change
  // This will work fine when using a Loop

  // const updateevent = async (event) => {
  //   await updateDoc(doc(eventDataRef, event.id), {
    //   title: event.title,
    //   description: event.description,
    //   quoteNumber : event.quoteNumber    
  //   });
  // };
  


  //Make Delete   #4.1
  const firebaseDeleteSingleEvent = async(id) => {
    //debugger
    await deleteDoc(doc(db, "Events", id))  // make it a reference instead
    //console.log("is deleted", id)
  }

 

  return {
    Events,
    AddEventData,
    getEventsData,
    firebaseDeleteSingleEvent,
    firebaseAddSingleEvent,
    firebaseUpdateSingleEvent,
    
  }
}

export default useEvents