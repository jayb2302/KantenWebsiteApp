<template> 

    <nav class="fixed w-full text-center pt-4  shadow-slade-500 z-20">

      <RouterLink class="li text-2xl mr-4 ml-4" to="/"> Home </RouterLink>
      <a class="li text-2xl mr-4 ml-4" href="#events"> Events </a>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/about"> About </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" :class="{active: $route.name === 'Shop'}" to="/shop"> Shop </RouterLink> 
      <RouterLink class="li text-2xl mr-4 ml-4 border-l-2 pl-3" to="/registration"> Membership </RouterLink>
      <RouterLink class="li text-2xl mr-4 ml-4" to="/volunteer"> Volunteer </RouterLink>


    </nav>
    <RouterView/>  


    <footer class="footer">
      
      <div class="container">
        <div class="footer-content">
          <div class="row">
            
  
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
      </div></footer>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved Kanten</p>
                        </div>                    
                </div>
                <div class="footer-widget">
              <div class="footer-logo">
                <img src="./assets/img/Logo.png" class="img-fluid" alt="logo">
              </div>
              <!-- Follow button -->
              <!-- <div class="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i class='bx bxl-facebook' style='color:#ffffff'></i></a>
                <a href="#"><i class='bx bxl-instagram' style='color:#ffffff'  ></i></a>
              </div> -->
            </div>
            </div>
        </div>
    
  
  
</template>

<script>

import Newsletter from './views/Newsletter.vue';
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
    components: { Newsletter }
}

</script>

<style lang="scss" scoped>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,800;1,300&display=swap');
@import url("https://use.typekit.net/aav7gcq.css");
@import 'modules/_variables.scss';




nav {
  font-family: $brother;
  color: $gray;
  .li {
    color: $gray
  }
}

.footer {
  background: #252625;
  padding-top: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 300px !important;
}
.container {
    gap: 5px;
  display: flex;
  justify-content: center;
}
.footer-content {
  width: 100%;
  flex-grow: 1;
}
.row {
  display: flex;
  justify-content: center;
}
.footer-widget {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: -70px;
}
.footer-widget2 {
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.footer-widget-heading {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #fff;
  font-size: small;
}
h2{
    font-weight: bold;
    font-size: large;
}
p{
    color: #fff;
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
    position: initial !important;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
      color: #7e7e7e;
  line-height: 28px;
}
 
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  bottom: -7px;
  height: 2px;
  width: 117px;
  background: $kpink;
}

.copyright-area{
  background: #252625;
  display: flex;
  justify-content: center;
  height: 50px !important;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
</style>