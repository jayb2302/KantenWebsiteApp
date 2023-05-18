<template>
    <div class="w-12/12 flex justify-center">
        <div class="w-12/12 text-center ">
            <h1>Signin</h1>
            <p><input type="text" placeholder="Email" v-model="email"></p>
            <p><input type="password" placeholder="Password" v-model="password"></p>
            <p class="mt-3"><button @click="register">Submit</button></p>
        <p v-if="errMsg">{{  errMsg }}</p>
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
    h1 {
        color:red
    }
    input {
        height: 45px;
        border: none;
        outline: none;
        margin-top: 10%;
        padding: 0px 7px;
        color: $gray;
        font-size: 15px;
        background-color: transparent;
        box-shadow: 3px 3px 20px rgba(0,0,0,1),
        -1px -1px 6px rgba(255, 255, 255, 0.4);
        &:focus {
            border: 1px solid transparent;
            color: $gray;
            box-shadow: 2px 2px 10px rgba(0,0,0,1),
            -1px -1px 6px rgba(255, 255, 255, 0.4),
            inset 3px 3px 10px rgba(0,0,0,1),
            inset -1px -1px 6px rgba(255, 255, 255, 0.4);
        }
        
    }

</style>