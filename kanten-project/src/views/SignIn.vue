<template>
    <div  class="w-screen  pb-5  
        content-center justify-center  ">
        <div class="container-login flex 
             mt-6 pt-5 top-20">
            <div class="card-login gap-6  flex flex-col 
               items-center">
                <h1 class="signup pt-5">Log in</h1>
                <div class="inputBox1">
                    <input type="text" v-model="email" required="required">
                    <span class="user">Email</span>
                </div>

                <div class="inputBox">
                    <input v-model="password" 
                        type="password" 
                        required="required">
                    <span>Password</span>
                </div>

                <button 
                    @click="register" class="enter">
                    Log in
                </button>

                <router-link 
                class="signup" 
                to="/register">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref as refVue } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
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
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"
            }
        })
}

</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';

.container-login {

    width: 100%;
    display: flex;
    justify-content: center;
   .card-login {
    min-height: 350px;
    width: 300px;
    background: $primaryone;
    box-shadow: 10px 10px 40px $kpink,
        -10px -10px 32px $kblue,
        inset 2px 2px 10px rgba(35, 34, 34, 0.8),
        inset -2px -2px 10px rgba(35, 34, 34, 0.8);
    

 

    h1 {
        font-family: $brother;
        font-size: 1.6em;
        text-transform: uppercase;
        margin-bottom: 2%;
    }
    .signup {
        font-family: $brother;
        text-transform: uppercase;
    }
    .inputBox,
    .inputBox1 {
        position: relative;
        width: 250px;
        input {
            width: 100%;
            padding: 8px;
            outline: none;
            border: none;
            color: $white;
            font-size: 1em;
            background: transparent;
            border-left: 1px solid $white;
            border-bottom: 1px solid $white;
            -webkit-transition: 0.1s;
            transition: 0.1s;
            border-bottom-left-radius: 2px;
        }
    }
    .inputBox span,
    .inputBox1 span {
        margin-top: 2px;
        position: absolute;
        left: 0;
        -webkit-transform: translateY(-4px);
        -ms-transform: translateY(-4px);
        transform: translateY(-4px);
        margin-left: 5px;
        padding: 10px;
        pointer-events: none;
        font-size: 10px;
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
        transform: translateX(123px) translateY(-15px);
        font-size: 0.8em;
        padding: 4px 5px;
        background: $primaryone;
        letter-spacing: 0.2em;
        color: $white;
        border: 1px;
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
        color: $white;
        border: 1px;
    }
    .inputBox input:valid,
    .inputBox input:focus,
    .inputBox1 input:valid,
    .inputBox1 input:focus {
        border: 1px solid $white;
        border-radius: 2px;
    }
    .enter {
        height: 30px;
        width: 90px;
        border: 1px solid $white;
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
}

</style>