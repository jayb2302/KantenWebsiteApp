<template>
    <div class="wrapper">
      <div class="container">
        <div class="text-wrap">
          <h2>Enjoy the culture, join our Newsletter!</h2>
          <p>Stay up to date on events, your favorite bands <br> and find new inspiration through Kanten.</p>
        </div>
        <div class="newsletter">
          <h2>Subscribe to our Newsletter!</h2>
          <form @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
          </form>
          <p v-if="subscribed" class="success">Thank you for subscribing!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        subscribed: false,
      };
    },
    methods: {
      subscribe() {
        // Simulating an asynchronous subscription request
        setTimeout(() => {
          // Here, you can perform an actual API request to subscribe the user
          // Once the subscription is successful, you can set the subscribed flag to true
          this.subscribed = true;
        }, 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20% 0; /* Adjust the padding values as needed */
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    width: 70%;
    height: 300px;
    border: 2px solid greenyellow;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0 2px greenyellow, 0 0 20px 2px greenyellow;
    animation: animate 3s linear infinite;
  }
  
  @keyframes animate {
    0% {
      box-shadow: 0 0 0 2px greenyellow, 0 0 20px 2px greenyellow;
    }
    50% {
      box-shadow: 0 0 0 2px greenyellow, 0 0 40px 6px greenyellow;
    }
    100% {
      box-shadow: 0 0 0 2px greenyellow, 0 0 20px 2px greenyellow;
    }
  }
  
  .text-wrap {
    text-align: center;
    width: 50%;
  }
  
  .newsletter {
    text-align: center;
    padding: 40px 0;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  form {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  input[type="email"] {
    width: 200px;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    color: #252625;
  }
  
  button {
    padding: 8px 15px;
    background-color: #252625;
    color: #fff;
    border: 1px solid greenyellow;
    cursor: pointer;
  }
  
  .success {
    color: green;
  }
  </style>