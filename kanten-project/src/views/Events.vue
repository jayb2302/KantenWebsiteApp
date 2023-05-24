<template>
    <div class="w-10/12 title has-text-centered">
      <!-- Your title content here -->
    </div>
  
    <div class="timeline">
      <label class="accordion accordion--1" for="open-1">
        <input class="accordion__open" id="open-1" type="radio" name="accordion-1">
        <input class="accordion__close" id="open-1" type="radio" name="accordion-1">
        
        <div class="accordion__wrapper" @click="toggleAccordion">
        <dl class="accordion__box">
          <div v-for="event in events" :key="event.id" class="card mb-5 w-full" :class="{ 'has-background-success-light': event.done }">
            <div class="card-content w-9/12">
              <div class="content">
                <div class="columns is-mobile is-vcentered">
                  <div class="column" :class="{ 'has-text-success line-through': event.done }">
                    <p><strong>Title:</strong> {{ event.title }}</p>
                    <span class="accordion__number"><p><strong>Date:</strong> {{ formatDate(event.date) }}</p></span>                    
                    <dd class="accordion__text" @click="toggleAccordion">
                    <p><strong>Artist:</strong> {{ event.artist }}</p>
                    <p><strong>Description:</strong> {{ event.description }}</p>
                    <p><strong>Time:</strong> {{ event.time }}</p>
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

      <label for="close-1" class="accordion__button">
        <span class="accordion__buttonText"></span>
      </label>
    </label>

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

  
  const toggleAccordion = (event) => {
  const accordionText = event.currentTarget;
  accordionText.classList.toggle('active');
};

  </script>
  
  <style lang="scss" scoped>
  @import 'bulma/css/bulma.min.css';
  
 
  

  .accordion__wrapper.active .accordion__text {
    /* Styles for expanded state */
    /* Example styles: */
    max-height: 1000px; /* Set the desired max height to reveal the content */
    transition: max-height 0.3s ease; /* Add smooth transition animation */
    color: #000; /* Set the desired text color for the expanded state */
  }
  
  .accordion__text {
    /* Styles for collapsed state */
    /* Example styles: */
    max-height: 0; /* Initially collapsed */
    overflow: hidden;
    transition: max-height 0.3s ease;
    color: transparent; /* Set the desired text color for the collapsed state */
  }
  .accordion__text.active {
    /* Styles for expanded state */
    /* Example styles: */
    height: 200px; /* Set the desired height */
    overflow: hidden; /* Hide overflow content */
    transition: height 0.3s ease; /* Add smooth transition animation */
  }

  .accordion--1 {
    color: #fff;
  }
  .accordion{
    position: relative;
    width: 300px;
    color: #443849;
  }
  .accordion__tab{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    z-index: 2;
    width: 96px;
    height: 24px;
    font-size: 16px;
    border-radius: 12px 13px 0 0;
  }
  .accordion__tab::before {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: -16px;
    width: 0;
    height: 0;
    border-top: solid 20px transparent;
    border-left: solid 20px #fff;
    border-right: solid 0 transparent;
    border-bottom: solid 0 transparent;
  }
.accordion__open,
.accordion__close{
  display: none;
}
.accordion__wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 12px 12px 12px;
  cursor: pointer;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem; */
}
.accordion__box{
  margin: 0;
}
.accordion__patition{
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  transition: all .2s ease;
}
.accordion__number{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 50px;
  height: 40px;
  margin-right: 16px;
  font-size: 40px;
 /*  font-family: ; */
  color: aquamarine;
}
.accordion__number::before{
  content: '';
  position: absolute;
  bottom: 4px;
  left: 72px;
  width: 0;
  height: 40px;
  background: aquamarine;
}
.accordion__number::after{
  content: 'Upcoming Event';
  position: absolute;
  bottom: 4px;
  left: 88px;
  width: 0;
  height: 40px;
  font-size: 13px;
  line-height: 13px;
  overflow: hidden;
}
.accordion__title{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 56px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  min-height: 40px;
}
.accordion__title::before{
  content: '';
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 1px;
  background: aquamarine;
}
/* .accordion__text{
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  color: transparent;
  transition: all .5s ease;
}
.accordion__text::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  width: 0;
  height: 100%;
  background: aquamarine;
} */


*{
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
  background:#1d1e22;
  color:#fff;
 z-index:0;
}

.timeline:before {
  content: '';
  position:absolute;
  height:100%;
  left:50%;
  width:2px;
  top:-20px;
  background:#fff;
  z-index:1;
}
.timeline{
  position:relative;
  margin: 50px auto;
  width:1000px;
  padding:50px 0;
}


.timeline ul{
  margin:0;
  padding:0 ;
}

.timeline ul li{
  list-style:none;
  box-sizing:border-box; 
  line-height:normal;
  position:relative;
  width:50%;
  padding: 40px 70px;
}

.timeline ul li .right_content h2{
  color:rgba(59,112,239,1);
  padding:0px 2px 18px 0px;
}
.timeline ul li:nth-child(odd){
  float:left;
  text-align:right;
  clear:both;
}

.timeline ul li:nth-child(even){
  float:right;
  text-align:left;
  clear:both;
}

.left_content{
  padding-bottom:20px;
}

.timeline ul li:nth-child(odd):before{
  content: '';
  position:absolute;
  width:10px;
  height:10px;
  background:rgba(59,112,239,1);
  border-radius:50%;
  box-shadow: 0 0 0 3px rgba(58,112,239,0.2);
  right:-6px;
  top:24px;
  z-index:1;
}

.timeline ul li:nth-child(even):before{
  content: '';
  position:absolute;
  width:10px;
  height:10px;
 background:rgba(59,112,239,1);
  border-radius:50%;
  box-shadow: 0 0 0 3px rgba(58,112,239,0.2);
  left:-6px;
  top:24px;
}

.timeline ul li:nth-child(odd) .left_content{
  position:absolute;
  top:12px;
  right:-165px;
  margin:0;
  padding:8px 16px;

  color:#fff;
  box-shadow:0 0 0 3px rgba(59,112,239,0.3);
  border-radius:18px;
  
}

.timeline ul li:nth-child(even) .left_content{
  position:absolute;
  top:12px;
  left:-165px;
  margin:0;
  padding:8px 16px;
  
  color:#fff;
  box-shadow:0 0 0 3px rgba(59,112,239,0.3);
  border-radius:18px;
  
}


@media (max-width: 1000px){
  
  .timeline{
    width:100%;
  }
}

@media (max-width: 767px){
  .timeline{
    width:100%;
  }
  .timeline:before{
    left:20px;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even){
    width:100%;
    text-align:left;
   padding-left:50px; 
  }
  
  .timeline ul li:nth-child(odd):before
    {
    top:-18px;
    left:16px;
  
  }
  .timeline ul li:nth-child(even):before
  { 
    top:-18px;
    left:16px;
  }
  
    .timeline ul li:nth-child(odd) .left_content,
  .timeline ul li:nth-child(even) .left_content
  {
    top:-30px;
    left:50px;
    right:inherit;
  }

  
}

  </style>
  
  