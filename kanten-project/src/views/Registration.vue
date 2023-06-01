<template>
<div class="text-container">
            <h1 style=" padding: 100px 0 20px 0;">Become part of Kanten by becoming a memeber!</h1>
            <p style=" text-align: center;">By becoming a member of Kanten, you gain exclusive access to numerous benefits and opportunities. You will have the chance to actively contribute to our initiatives, events, and projects. <br> If you're interested in becoming a member or would like more information, please don't hesitate to reach out to us. We look forward to welcoming you into the Kanten family!
            </p>
        </div>
    <div class="wrapper">
      
        <div class="container">
    <div class="formula">
    <form action="#">
        <div class="title">Become a Member</div>
        <div class="user-details">
            <div class="input-box">
                <span class="details">First Name</span>
                <input type="text" placeholder="Write your first name" required>
            </div>
            <div class="input-box">
                <span class="details">Last Name</span>
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
                <span class="gender-title">Gender</span>
                <div class="category">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Female</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot three"></span>
                        <span class="gender">Other</span>
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
</div>

 <!-- Footer Section -->
 <footer id="footer" class="flex flex-col w-full ">
        <div class="footer-content flex flex-row justify-center">
          <div class="footer-list w-3/12 ">
            <h3>Find us here</h3>
            <ul>
              <li>
                <h4>Kanten</h4>
                <a href="https://goo.gl/maps/FiNur8K3VDgcWFk39">FINSENSGADE 1, 6700 Esbjerg</a>
              </li>
              <li>
                <h4>Kraftværket</h4>
                <a href="https://goo.gl/maps/m9AhRALJE7bfsctq9">GL NOVRUPVEJ 14, 6705 ESBJERG Ø</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact w-3/12 ">
            <div class="footer-widget-heading">
              <h3>Contact us</h3>
            </div>
            <ul>
              <li>
                <h4>Phone</h4>
                <p>+45 28 97 11 85</p>
              </li>
              <li>
                <h4>E-mail</h4>
                <p>MUSIKFORENINGENKANTEN@GMAIL.COM</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="copyright-area  ">
          <div class="copyright">
            <p>Copyright &copy; 2018, All Right Reserved Kanten</p>
          </div>
          <div class="footer-widget">

            <!-- Follow button -->
            <!-- <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i class='bx bxl-facebook' style='color:$whitefff'></i></a>
                    <a href="#"><i class='bx bxl-instagram' style='color:$whitefff'  ></i></a>
                  </div> -->
          </div>
        </div>

        <img src="../assets/img/Logo.png" class="img-fluid" alt="logo">
      </footer>

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

body{
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
background: $primaryone;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
 padding-top: 30px;
 height: 900px;
}
.container {
    width: 60%;
    background: $primaryone;
    padding: 30px;
    border-radius: 8px;
    height: 100vh;
    position: relative;
    overflow: hidden;
}
.formula{
    position: absolute;
    inset: 2px;
    border-radius: 8px;
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
    height: 750px;
    border: 2px solid $kblue;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kblue;
    animation: animate 3s linear infinite;
  }

@keyframes animate {
    0% {
      box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kblue;
    }
    50% {
      box-shadow: 0 0 0 2px $kblue, 0 0 40px 6px $kpink;
    }
    100% {
      box-shadow: 0 0 0 2px $kblue, 0 0 20px 2px $kblue;
    }
  }

.container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
    font-family: $brother;
}

.container .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 225px;
    background: linear-gradient(135deg, $kblue, $kblue);
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
    font-family: $k2d;
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
    border: 1px solid $kblue;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid{
border-color: $kpink;
}

form .gender-details .gender-title {
    font-size: 20px;
    font-weight: 500;
    font-family: $k2d;
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
    background: $white;
    border-radius: 50%;
    margin: 10px;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
    border-color: $white;
    background: $kblue;
}

form input[type="radio"] {
    display: none;
}

form .botton {
    margin: 45px 0;
    width: 400px;
    height: 150px !important;
    font-family: $brother;
}

form .button input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    font-size: 18px;
    font-family:$brother;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, $kblue, $kblue);
    color:$white;
}

form .button input:hover {
    background: linear-gradient(-135deg, $kblue, $kblue);
}


#footer {
  font-family: $brother;
  background: $primaryone;
  padding: 0;
  height: 300px;
  padding-top: 1%;
  .footer-content {

    ul {
      list-style-type: none;
      padding: 0;
      a {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
      }
      p {
        color: $gray;
        font-size: 1em;
        font-family: $k2d;
        line-height: 28px;
      }
    }

    h4 {
      font-size: 1.2em;
      padding-top: 3%;
      color: $gray;
      font-weight: 800;
    }

    h3 {
      color: $white;
      font-weight: 800;
      position: relative;
      font-size: 1.2em;

      &::before {
        content: "";
        position: absolute;
        bottom: -7px;
        height: 2px;
        width: 117px;
        background: $kpink;
      }
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 2%;
    height: 10em;
  }
  .copyright {
    margin: 0;
    font-size: 1em;
    color: $gray;
    text-align: center;
    padding-top: 5%;
    opacity: 0.5;
  }
}


@media (max-width: 600px) {
    .container {
        max-width: 100%;
        padding-top: 100px;
    }
    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }
    form .gender-details .category {
        width: 100%;
    }
    .container form .user-details {
        max-height: 440px;
        overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar {
        width: 0;
    }
}
@media (max-width: 1200px) {
    .container{
        width: 100%;
    }
}

@media (max-width: 600px) {
  .footer {
    height: auto !important;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-widget {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
  }
}

@media (max-width: 900px) {
  .footer {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .footer-content {
    max-width: 600px;
  }
  
  .line {
    flex-direction: column;
  }
}

</style>