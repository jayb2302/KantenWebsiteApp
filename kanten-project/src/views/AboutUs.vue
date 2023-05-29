<template>
    <div class="container">
    <div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus consequuntur quasi, distinctio ad magnam, voluptas suscipit labore doloremque natus excepturi eos quos hic ut inventore expedita dolores corporis delectus.
            </p>
        </div>
    </div>
    <div class="about-section2">
        <div class="inner-container2">
            <h1>About Us</h1>
            <p class="text2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus consequuntur quasi, distinctio ad magnam, voluptas suscipit labore doloremque natus excepturi eos quos hic ut inventore expedita dolores corporis delectus.
            </p>
        </div>
    </div>
    <div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus consequuntur quasi, distinctio ad magnam, voluptas suscipit labore doloremque natus excepturi eos quos hic ut inventore expedita dolores corporis delectus.
            </p>
        </div>
    </div>

<!-- Meet Our Team Section -->
<section id="team" class="py-10">
      <h2 class="team">Meet Our Team</h2>
      <div class="container2">
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Michele Miller</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'facebook-f']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'instagram']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'linkedin-in']"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Patricia Knott</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'facebook-f']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'instagram']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'linkedin-in']"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Justin Ramos</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'facebook-f']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'instagram']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'linkedin-in']"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=836"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Mary Huntley</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li>
                  <a href="#" class="fa fa-facebook" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'facebook-f']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'instagram']"
                  /></a>
                </li>
                <li>
                  <a href="#" class="fa fa-linkedin" aria-hidden="true"
                    ><font-awesome-icon
                      class="icon"
                      :icon="['fab', 'linkedin-in']"
                  /></a>
                </li>
              </ul>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #252625;
}

.about-section{
    background: url(../assets/Billede1-7643998c.png) no-repeat left;
    background-size: 55%;
    background-color: #252625;
    overflow: hidden;
    padding: 100px 0;
}
.about-section2{
    background: url(../assets/Billede1-7643998c.png) no-repeat right;
    background-size: 55%;
    background-color: #252625;
    overflow: hidden;
    padding: 100px 0;
}
.inner-container {
    width: 55%;
    float: right;
    background-color: #fff;
    padding: 150px;
}
.inner-container2 {
    width: 55%;
    float: left;
    background-color: #fff;
    padding: 150px;
}
.inner-container h1 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}
.inner-container2 h1 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}
.text {
    font-size: 13px;
    color: #252625;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}
.text2 {
    font-size: 13px;
    color: #252625;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}

@media screen and (max-width:1200px){
    .inner-container{padding: 80px;}
    .inner-container2{padding: 80px;}   
}

@media screen and (max-width: 1000px) {
    .about-section {
        background-size: 100%;
        padding: 100px 40px;
    }
    .about-section2 {
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
    .inner-container2{
        width: 100%;
    }
}
@media screen and (max-width: 600px) {
    .about-section{
        padding: 0;
    }
    .about-section2{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
    .inner-container2{
        padding: 60px;
    }
    .container2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
}

#team {

    .team{
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 900;
    }
  .our-team {
    padding: 15px 0 25px;
    margin-bottom: 30px;
    background-color: white;
    text-align: center;
    overflow: hidden;
    position: relative;
    box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);
    -moz-box-shadow: -2px 15px 21px 5px rgba(0, 0, 0, 0.55);

    .name {
      font-size: 1.3rem;
    }
    .picture {
      display: inline-block;
      height: 130px;
      width: 180px;
      margin-bottom: 50px;
      z-index: 1;
      position: relative;
      &::before {
        content: "";
        width: 100%;
        height: 120%;
        border-radius: 50%;
        background-color: #252625;
        position: absolute;
        bottom: 100%;
        right: 0;
        left: 0;
        opacity: 1;
        transform: scale(3);
        transition: all 0.3s linear 0s;
      }
      &::after {
        content: "";
        height: 100%;
        border-radius: 50%;
        background-color: #252625;
        position: absolute;
        top: 10%;
        left: 0;
        z-index: -1;
      }
      img {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        height: auto;
        border-radius: 50%;
        transform: scale(1);
        transition: all 1.3s ease 0s;
      }
    }
  }

  .our-team:hover .picture::before {
    height: 100%;
  }

  .our-team:hover .picture img {
    box-shadow: 0 0 0 3px blue;

    transform: scale(0.9);
  }

  .our-team:hover .team-content {
    transform: translateY(-30px);
    transition: all 1s ease 0s;
  }

  .our-team .title {
    display: block;
    font-size: 19px;
    color: #252625;
    text-transform: capitalize;
  }

  .our-team .social {
    width: 100%;
    padding: 0;
    padding-top: 2%;
    margin: 0;
    background-color: gray;
    border-bottom: 4px solid blue;
    position: absolute;
    bottom: -100px;
    left: 0;
    transition: all 1s ease 0s;
  }

  .our-team:hover .social {
    bottom: 0;
    box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
    -webkit-box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.76);
  }

  .our-team .social li {
    display: inline-block;
  }

  .our-team .social li a {
    display: block;
    padding: 5px;

    color: white;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  .our-team .social li a:hover {
    color: pink;
    background-color: transparent;
  }
}
  .container2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:5%;
  }

</style>