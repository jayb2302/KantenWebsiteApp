<template>
    <div class="wrapper">
        <div class="text-container">
            <h1 style=" padding-bottom: 20px;">Become part of our team by becoming a volunteer!</h1>
            <p style=" text-align: center; padding-bottom: 30px;">At Kanten, we truly appreciate and value the contributions of individuals who share
                our mission and vision. That's why we're excited to offre a variety of volunteer 
                opportunities that allow you to make a meaningful impact within our community.
            </p>
        </div>
        <div class="container">
    <div class="formula">
    <form action="#">
        <div class="title">Volunteer Form</div>
        <div class="user-details">
            <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Write your first name" required>
            </div>
            <div class="input-box">
                <span class="details">E-mail</span>
                <input type="text" placeholder="Write your e-mail" required>
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
            <br>
            <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Write your phone number" required>
            </div>
        </div>
        <div class="button">
            <input type="submit" value="Sign up" style="height: 45px;">
        </div>
    </form>
</div>
</div>
<br>
<br>
<p style="font-size: larger;">We would love you to be part of our amazing team!</p>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';
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

.text-container{
    display: flex;
    justify-content: center;
   
    flex-direction: column;
    width: 10 0%;
    h1{
        font-size: 3rem;
        font-family: $brother;
        text-align: center;
    }
    p {
    
        font-size: 1.4rem;
        padding-left: 10%;
        padding-right: 10%;
       margin-bottom: 3%;
       font-family: $k2d;
    }
}

.wrapper {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  padding: 60px 0; /* Adjust the padding values as needed */
}
.formula{
    position: absolute;
    inset: 2px;
    border-radius: 8px;
    background: #252625;
    z-index: 1000;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    width: 60%;
    height: 500px;
    background: #252625;
    border: 2px solid #45f3ff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0 2px #45f3ff, 0 0 20px 2px #45f3ff;
    animation: animate 3s linear infinite;
  }
  
  @keyframes animate {
    0% {
      box-shadow: 0 0 0 2px #45f3ff, 0 0 20px 2px #45f3ff;
    }
    50% {
      box-shadow: 0 0 0 2px #45f3ff, 0 0 40px 6px #45f3ff;
    }
    100% {
      box-shadow: 0 0 0 2px #45f3ff, 0 0 20px 2px #45f3ff;
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
    width: 185px;
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

@media (max-width: 1300px) {
    .container{
        width: 100%;
    }
}

</style>