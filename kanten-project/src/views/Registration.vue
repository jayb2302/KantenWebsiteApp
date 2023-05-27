<template>
        <div class="container">
    <div class="formula">
    <form action="#">
        <div class="title">Registering</div>
        <div class="user-details">
            <div class="input-box">
                <span class="details">Firstname</span>
                <input type="text" placeholder="Write your first name" required>
            </div>
            <div class="input-box">
                <span class="details">Lastname</span>
                <input type="text" placeholder="Write your last name" required>
            </div>
            <div class="input-box">
                <span class="details">Address</span>
                <input type="text" placeholder="Write your address" required>
            </div>
            <div class="input-box">
                <span class="details">Postnr.</span>
                <input type="text" placeholder="Write your postnr." required>
            </div>
            <div class="input-box">
                <span class="details">City</span>
                <input type="text" placeholder="Write your city" required>
            </div>
            <div class="input-box">
                <span class="details">E-mail</span>
                <input type="text" placeholder="Write your e-mail" required>
            </div>
            <div class="input-box">
                <span class="details">Insert e-mail</span>
                <input type="text" placeholder="Repeat your e-mail" required>
            </div>
            <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Write your phone number" required>
            </div>
            <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Write your Username" required>
            </div>
            <div class="input-box">
                <span class="details">Password</span>
                <input class="password" type="password" placeholder="Input the password" required>
            </div>

            <div class="gender-details">
                <input type="radio" name="gender" id="dot-1">
                <input type="radio" name="gender" id="dot-2">
                <input type="radio" name="gender" id="dot-3">
                <span class="gender-title">Køn</span>
                <div class="category">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Mand</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Kvinde</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot three"></span>
                        <span class="gender">Andre</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="button">
            <input type="submit" value="Register" style="height: 45px;">
        </div>
    </form>
</div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
background: #23242a;
}

.container {
    max-width: 600px;
    width: 90%;
    background: #1c1c1c;
    padding: 25px 30px;
    border-radius: 8px;
    height: 100vh;
    color: #8f8f8f;
    position: relative;
    overflow: hidden;
}
.formula{
    position: absolute;
    inset: 2px;
    border-radius: 8px;
    background: #28292d;
    z-index: 1000;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
}

.container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 700px;
    height: 100vh;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right ;
    animation: animate 6s linear infinite;
}
.container::after {
    content: '';
    position: absolute;
    z-index: 10;
    top: -50%;
    left: -50%;
    width: 700px;
    height: 100vh;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right ;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
}

@keyframes animate {
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}

.container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}

.container .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background: linear-gradient(135deg, #45f3ff, #45f3ff);
}

.container form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

.user-details .input-box .details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #45f3ff;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid{
border-color: #45f3ff;
}

form .gender-details .gender-title {
    font-size: 20px;
    font-weight: 500;
}

form .gender-details .category {
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
}

.gender-details .category label {
    display: flex;
    align-items: center;
}

.gender-details .category .dot {
    height: 18px;
    width: 20px;
    background: #d9d9d9;
    border-radius: 50%;
    margin: 10px;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
    border-color: #d9d9d9;
    background: #45f3ff;
}

form input[type="radio"] {
    display: none;
}

form .botton {
    margin: 45px 0;
    width: 400px;
    height: 150px !important;
}

form .button input {
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #45f3ff, #45f3ff);
}

form .button input:hover {
    background: linear-gradient(-135deg, #40e0eb, #45f3ff);
}

@media (max-width: 584px) {
    .container {
        max-width: 100%;
    }
    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }
    form .gender-details .category {
        width: 100%;
    }
    .container form .user-details {
        max-height: 300px;
        overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar {
        width: 0;
    }
}
</style>