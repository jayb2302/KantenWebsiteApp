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

<!-- Footer -->
<footer class="footer">
        <div class="footer-content">
          <div class="line">
            
  
            <div class="footer-widget2">
              <div class="footer-widget-heading">
                <h3>Find us here</h3>
              </div>
              <ul>
                <li>
                  <h2>Kanten</h2>
                  <a href="https://goo.gl/maps/FiNur8K3VDgcWFk39">FINSENSGADE 1, 6700 Esbjerg</a>
                </li>
                <li>
                  <h2>Kraftværket</h2>
                  <a href="https://goo.gl/maps/m9AhRALJE7bfsctq9">GL NOVRUPVEJ 14, 6705 ESBJERG Ø</a>
                </li>
              </ul>
            </div>
  
            <div class="footer-widget2">
              <div class="footer-widget-heading">
                <h3>Contact us</h3>
              </div>
              <ul>
                <li>
                  <h2>Phone</h2>
                  <p>+45 28 97 11 85</p>
                </li>
                <li>
                  <h2>E-mail</h2>
                  <p>MUSIKFORENINGENKANTEN@GMAIL.COM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
        <div class="copyright-area">
                <div class="row">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved Kanten</p>
                        </div>                    
                </div>
                <div class="footer-widget">
              <div class="footer-logo">
                <img src="../assets/img/Logo.png" class="img-fluid" alt="logo">
              </div>
              <!-- Follow button -->
              <!-- <div class="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i class='bx bxl-facebook' style='color:#ffffff'></i></a>
                <a href="#"><i class='bx bxl-instagram' style='color:#ffffff'  ></i></a>
              </div> -->
            </div>
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
background: $primaryone;
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
  padding: 60px 0; 
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
    height: 500px;
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
    width: 185px;
    background: linear-gradient(135deg, $kblue, $kblue);
}

.container form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
    font-family: $k2d;
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
    border: 1px solid $kblue;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid{
border-color: $kblue;
}


form .botton {
    margin: 45px 0;
    width: 400px;
    height: 150px !important;
}

form .button input {
    color: $white;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, $kblue, $kblue);
}

form .button input:hover {
    background: linear-gradient(-135deg, $kblue, $kblue);
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

                                  /* Footer */


.footer {
  background: $primaryone;
  padding-top: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 300px !important;
}

.footer-content {
  width: 100%;
  flex-grow: 1;
}
.line {
  display: flex;
  justify-content: center;
}
.footer-widget {
  position: absolute;
  bottom: 0;
  right: 0;
}
.footer-widget2 {
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.footer-widget-heading {
  margin-bottom: 10px;
  font-family: $brother;
}

ul {
  list-style-type: none;
  padding: 0;
  font-family: $k2d;
}

li {
  margin-bottom: 10px;
  
}

h2{
    font-weight: bold;
    font-size: large;
}

.footer-pattern img {
  position: absolute;
  top: 0;
  right: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}

.footer-logo img {
    max-width: 200px;
}
 
.footer-widget-heading h3 {
  color: $white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  bottom: -7px;
  height: 3px;
  width: 116px;
  background: $kpink;
}

.copyright-area{
  background: $primaryone;
  display: flex;
  justify-content: center;
  height: 50px !important;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: $white;
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