<template>
  <div class="w-screen title has-text-centered">
    <!-- Your title content here -->
  </div>

  <div class="timeline w-full h-screen flex">
    <label class="accordion--1 flex w-full gap-52 justify-center" for="open-1">
      
     
      <div
        class="accordion__wrapper w-3/12 p-4 mb-5 mt-5"
      > 
      
        <dl class="accordion__box flex-col ">
          <div
            v-for="(event, index) in leftEvents"
            :key="event.id"
            class="card"
            :class="{ 'has-background-success-light': event.done }"
            @click="toggleAccordion(event)"
          >
          <div class="accordion__tab">{{ event.title }}</div>

            <div class="card-content  ">
              
              <div class="content ">
                <div class="columns is-mobile is-vcentered">
                  <div
                    class="column"
                    :class="{ 'has-text-success line-through': event.done }"
                  >
                    <span class="accordion__number">
                      
                        <p> {{ formatDate(event.date) }}</p>
                      
                    </span>
                    <dd
                    v-if="openedEvent === event.date" 
                       class="accordion__text w-full h-3/6 rb" 
                       :class="{'rb': openedEvent === event.date }"
                       >
                      <p><strong>Artist:</strong> {{ event.artist }}</p>
                      <p>
                        <strong>Description:</strong> {{ event.description }}
                      </p>
                      <p>Time:{{ event.time }}</p>
                      <img
                        :src="event.imgURL"
                        alt="Event Image"
                        class="w-52 h-52"
                      />
                    </dd>
                  </div>
                  <p>{{ event.tags }}</p>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
      <div
        class="accordion__wrapper  w-3/12 p-4 mb-5 mt-5"
      >
        <dl class="accordion__box flex-col  ">
          <div
            v-for="(event, index) in rightEvents"
            :key="event.id"
            class="card "
            :class="{ 'has-background-success-light': event.done }"
            @click="toggleAccordion(event)"
          >
            <div class="card-content m-4 ">
              <div class="content m-4">
                <div class="columns is-mobile is-vcentered">
                  <div
                    class="column"
                    :class="{ 'has-text-success line-through': event.done }"
                  >
                    <h3 class="accordion__tab">{{ event.title }}</h3>
                    <span class="accordion__number"
                      ><p>
                        <strong>Date:</strong> {{ formatDate(event.date) }}
                      </p></span
                    >
                    <dd 
                      v-if="openedEvent === event.date"  
                      class="accordion__text w-full h-3/6 rb"
                    >
                      <p><strong>Artist:</strong> {{ event.artist }}</p>
                      <p>
                        <strong>Description:</strong> {{ event.description }}
                      </p>
                      <p>Time:{{ event.time }}</p>
                      <img
                        :src="event.imgURL"
                        alt="Event Image"
                        class="w-52 h-52"
                      />
                    </dd>
                  </div>
                  <p>{{ event.tags }}</p>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </label>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

const events = ref([]);
const openedEvent = ref(null)

const getEventsData = () => {
  const eventDataRef = collection(db, "events");
  onSnapshot(eventDataRef, (snapshot) => {
    events.value = snapshot.docs.map((doc) => doc.data());
  });
};

onMounted(getEventsData);

// Sorting events by date.
const sortedEvents = computed(() => 
  events.value.map((item) => ({
    ...item,
    dateObj: new Date(item.date)
  }))
    .sort((a, b) => a.dateObj - b.dateObj)
    .reverse()
)

const leftEvents = computed(() =>
  sortedEvents.value.filter((_, index) => index % 2 === 0)
);
const rightEvents = computed(() =>
  sortedEvents.value.filter((_, index) => index % 2 !== 0)
);

const formatDate = (date) => {
  // Format the date as desired using the toLocaleDateString() function
  return new Date(date).toLocaleDateString();
};

const toggleAccordion = (event) => {
  if (openedEvent.value === event.date)
    openedEvent.value = null
  else
    openedEvent.value = event.date
}
</script>

<style lang="scss" scoped>
@import "bulma/css/bulma.min.css";
@import "../modules/variables";

.timeline {
  background-image: url(../assets/fiber.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  .accordion__wrapper{
    .card {
      background: $primaryone ;
      color: $gray;
      .accordion__tab{
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: relative;
      z-index: 2;
      width: 94px;
      height: 24px;
      font-size: 16px;
      border-radius: 12px 13px 0 0;
      background: #fff;
      &::before{
        content: "";
        position: absolute;
        z-index: 2;
        bottom: 0;
        right: -16px;
        width: 0;
        height: 0;
        border-top: solid 23px transparent;
        border-left: solid 23px #ffffff;
        border-right: solid 0 transparent;
        border-bottom: solid 0 transparent;
      }
      .card-content {
        .content{
          .columns{
            .column{
            .accordion__number{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 50px;
        height: 40px;
        margin-right: 16px;
        font-size: 48px;
        font-family: $brother;
        color: $primarytwo;
        &::before{
          content: "";
          position: absolute;
          bottom: 4px;
          left: 73px;
          width: 0;
          height: 40px;
          background-color: $primarytwo;
        }
        &::after{
          position: absolute;
          bottom: 4px;
          left: 88px;
          width: 0;
          height: 40px;
        }
            }
          }
          }
          
          
        }
        
      }
      
    }
    
  }
    
  }
 
}
 
// .accordion__wrapper.active .accordion__text {
//   /* Styles for expanded state */
//   /* Example styles: */
//   max-height: 1000px; /* Set the desired max height to reveal the content */
//   transition: max-height 0.3s ease; /* Add smooth transition animation */
//   color: #000; /* Set the desired text color for the expanded state */
// }







// .accordion__wrapper {
  
//   box-sizing: border-box;
//   background: $primaryone;
//   border-radius: 0 12px 12px 12px;
//   cursor: pointer;

// }
// .accordion__box {
//   margin: 0;
// }
// .accordion__patition {
//   position: relative;
//   z-index: 2;
//   box-sizing: border-box;
//   width: 100%;
//   transition: all 0.2s ease;
// }
// .accordion__number {
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   width: 50px;
//   height: 40px;
//   margin-right: 16px;
//   font-size: 40px;
//   /*  font-family: ; */
//   color: black;
// }
// .accordion__number
// .accordion__number::after {
//   content: "Upcoming Event";
//   position: absolute;
//   bottom: 4px;
//   left: 88px;
//   width: 0;
//   height: 40px;
//   font-size: 13px;
//   line-height: 13px;
//   overflow: hidden;
// }
// 




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

// * {
//   margin: 0;
//   padding: 0;
//   font-family: "Roboto", sans-serif;
//   color: black;
//   z-index: 0;
// }

// .timeline:before {
//   content: "";
//   position: absolute;
//   height: 100%;
//   left: 50%;
//   width: 2px;
//   top: -20px;
//   background: #fff;
//   z-index: 1;
// }
// .timeline {
//   position: relative;
//   margin: 50px auto;
//   width: 1000px;
//   padding: 50px 0;
// }

// .timeline ul {
//   margin: 0;
//   padding: 0;
// }

// .timeline ul li {
//   list-style: none;
//   box-sizing: border-box;
//   line-height: normal;
//   position: relative;
//   width: 50%;
//   padding: 40px 70px;
// }

// .timeline ul li .right_content h2 {
//   color: rgba(59, 112, 239, 1);
//   padding: 0px 2px 18px 0px;
// }
// .timeline ul li:nth-child(odd) {
//   float: left;
//   text-align: right;
//   clear: both;
// }

// .timeline ul li:nth-child(even) {
//   float: right;
//   text-align: left;
//   clear: both;
// }

// .left_content {
//   padding-bottom: 20px;
// }

// .timeline ul li:nth-child(odd):before {
//   content: "";
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background: rgba(59, 112, 239, 1);
//   border-radius: 50%;
//   box-shadow: 0 0 0 3px rgba(58, 112, 239, 0.2);
//   right: -6px;
//   top: 24px;
//   z-index: 1;
// }

// .timeline ul li:nth-child(even):before {
//   content: "";
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background: rgba(59, 112, 239, 1);
//   border-radius: 50%;
//   box-shadow: 0 0 0 3px rgba(58, 112, 239, 0.2);
//   left: -6px;
//   top: 24px;
// }

// .timeline ul li:nth-child(odd) .left_content {
//   position: absolute;
//   top: 12px;
//   right: -165px;
//   margin: 0;
//   padding: 8px 16px;

//   color: #fff;
//   box-shadow: 0 0 0 3px rgba(59, 112, 239, 0.3);
//   border-radius: 18px;
// }

// .timeline ul li:nth-child(even) .left_content {
//   position: absolute;
//   top: 12px;
//   left: -165px;
//   margin: 0;
//   padding: 8px 16px;

//   color: #fff;
//   box-shadow: 0 0 0 3px rgba(59, 112, 239, 0.3);
//   border-radius: 18px;
// }

// @media (max-width: 1000px) {
//   .timeline {
//     width: 100%;
//   }
// }

// @media (max-width: 767px) {
//   .timeline {
//     width: 100%;
//   }
//   .timeline:before {
//     left: 20px;
//   }
//   .timeline ul li:nth-child(odd),
//   .timeline ul li:nth-child(even) {
//     width: 100%;
//     text-align: left;
//     padding-left: 50px;
//   }

//   .timeline ul li:nth-child(odd):before {
//     top: -18px;
//     left: 16px;
//   }
//   .timeline ul li:nth-child(even):before {
//     top: -18px;
//     left: 16px;
//   }

//   .timeline ul li:nth-child(odd) .left_content,
//   .timeline ul li:nth-child(even) .left_content {
//     top: -30px;
//     left: 50px;
//     right: inherit;
//   }
// }
</style>
