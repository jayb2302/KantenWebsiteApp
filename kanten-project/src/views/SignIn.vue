<template>
    <div id="app" class="w-12/12 bb flex content-center justify-center"> 
       
        <div class="container flex justify-center lg:top-20">
            <div class="card gap-6 flex flex-col justify-center items-center">
                <a class="singup">Log in</a>
                <div class="inputBox1">
                    <input type="text" v-model="email" required="required">
                    <span class="user">Email</span>
                </div>


                <div class="inputBox">
                    <input v-model="password" type="password" required="required">
                    <span>Password</span>
                </div>

                <button @click="register" class="enter">Log in</button>

        </div>
    </div>
        
    </div>
</template>

<script setup>

import { ref as refVue} from "vue"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router'
const email = refVue("");
const password = refVue("")
const errMsg = refVue()
const router = useRouter()

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully signed in!")
        router.push('/event')
    })
    .catch((error) => {
        console.log(error.code)
        switch (error.code){
            case "auth/invalid-email":
            errMsg.value= "Invalid email";
            break;
            case "auth/user-not-found":
            errMsg.value= "No account with that email was found";
            break;
            case "auth/wrong-password":
            errMsg.value= "Incorrect password";
            break;
            default:
            errMsg.value = "Email or password was incorrect"
        }
    })
}


</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';

    .card {
    min-height: 350px;
    width: 300px;
    background: $primaryone;
    box-shadow: 20px 20px 40px $kpink,
    -20px -20px 32px $kblue,
    inset 2px 2px 10px rgba(35, 34, 34, 0.8),
    inset -2px -2px 10px rgba(35, 34, 34, 0.8);
    .inputBox, .inputBox1 {
    position: relative;
        width: 250px;
        input {
            width: 100%;
            padding: 10px;
            outline: none;
            border: none;
            color: $white;
            font-size: 1em;
            background: transparent;
            border-left: 2px solid $white;
            border-bottom: 2px solid $white;
            -webkit-transition: 0.1s;
            transition: 0.1s;
            border-bottom-left-radius: 8px;
        }
    }


.inputBox span,
.inputBox1 span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  -webkit-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
          transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: $white;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  -webkit-transform: translateX(113px) translateY(-15px);
      -ms-transform: translateX(113px) translateY(-15px);
          transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: $primaryone;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  -webkit-transform: translateX(156px) translateY(-15px);
      -ms-transform: translateX(156px) translateY(-15px);
          transform: translateX(156px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: $primaryone;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus,
.inputBox1 input:valid,
.inputBox1 input:focus {
  border: 2px solid $white;
  border-radius: 8px;
}

.enter {
  height: 45px;
  width: 100px;
  border: 2px solid $white;
  cursor: pointer;
  background-color: transparent;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  font-family: $brother;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 3em;
  &:hover {
  background-color: rgba(55, 53, 55, 0.74);
  color: $white;
}
}
    }

   


    .rb {
    box-sizing: border-box;
    border-width: 0.5px;
    border-color: red;
    }
    .bb {
    box-sizing: border-box;
    border-width: 0.5px;
    border-color: rgb(162, 167, 192);
  }
</style>