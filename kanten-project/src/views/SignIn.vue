<template>
    <div>
        <h1>Signin</h1>
        <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p><button @click="register">Submit</button></p>
        <p v-if="errMsg">{{  errMsg }}</p>
  
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
            errMsg.value = "Email or password was incorrect";
            break;
        }
    })
}


</script>

<style lang="scss" scoped>
#app {
    h1 {
        color:red
    }
}
</style>