<template>
  <div class="wrap-box">
    <div class="box-container">       
     <h3 class="absolute top-4">NEWSLETTER</h3>

      <div class="text-wrap4  ">
        <h2 class="pt-12 lg:pt-1">Enjoy the culture, join our Newsletter!</h2>
        <p>Stay up to date on events, your favorite bands <br> and find new inspiration through Kanten.</p>
      </div>
      <div class="newsletter flex-col">
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

      setTimeout(() => {
        this.subscribed = true;
      }, 1000);
    },
  },

};
</script>
  
<style lang="scss" scoped>
@import '../modules/variables';


.wrap-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 0;
  /* Adjust the padding values as needed */
}

.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
  width: 80%;
  height: 300px;
  border: 2px solid #EB4EBA;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 2px #EB4EBA, 0 0 20px 2px #EB4EBA;
  animation: animate 3s linear infinite;
  background-color: #252625bf;
  h3 {
    font-family: $brother;
    font-size: 28px;
    color: $white;
  }
}

@keyframes animate {
  0% {
    box-shadow: 0 0 0 2px #EB4EBA, 0 0 20px 2px #EB4EBA;
  }

  50% {
    box-shadow: 0 0 0 2px #EB4EBA, 0 0 40px 6px #EB4EBA;
  }

  100% {
    box-shadow: 0 0 0 2px #EB4EBA, 0 0 20px 2px #EB4EBA;
  }
}

.text-wrap4 {
  text-align: center;
  width: 50%;
  color: $white;
}

.newsletter {
  text-align: center;
  padding: 40px 0;
}

.newsletter h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: $white;
  font-family: $k2d;
  
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
  border: 1px solid #c4c6c8;
  color: #252625;
}

button {

  background-color: #252625;
  color: #c4c6c8;
  border: 1px solid #EB4EBA;
  cursor: pointer;
}

.success {
  color: #EB4EBA;
}

@media (max-width: 600px) {
  .box-container {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
}

@media (max-width: 900px) {
  .box-container {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
}</style>