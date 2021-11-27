<template>
  <main>
    <div class="container-sm">
      <div class="spacer"></div>

      <!-- Hero section -->
      <section class="hero">
        <h2 class="tag">&lt;h1&gt;</h2>
        <h1>
          <span>C</span>i<span>a</span>o<span>,</span><br />
          s<span>o</span>n<span>o</span> E<span>l</span>i<span>a</span>
          R<span>a</span>g<span>u</span>s<span>o</span>.<br />S<span>v</span>i<span>l</span>u<span>p</span>p<span
            >o</span
          >
          s<span>i</span>t<span>i</span> w<span>e</span>b<span> e</span>
          a<span>m</span>o <span>t</span>u<span>t</span>t<span>o </span
          >c<span>i</span>ò<span> c</span>h<span>e</span>
          r<span>i</span>c<span>h</span>i<span>e</span>d<span>e</span>
          <span> c</span
          >r<span>e</span>a<span>t</span>i<span>v</span>i<span>t</span>à<span
          ></span> e<span> i</span
          >n<span>g</span>e<span>g</span>n<span>o</span>.
        </h1>
        <h2 class="tag">&lt;/h1&gt;</h2>
      </section>
      <div class="spacer"></div>

      <!-- Logo section -->
      <div class="logo-box">
        <img
          class="logo-img"
          src="../assets/img/Web developer modificato.png"
          alt=""
        />
      </div>
      <div class="spacer"></div>

      <!-- Philosophy section -->
      <section class="philosophy">
        <p class="citazione">
          - Per comprendere tutto, è necessario dimenticare tutto. - Siddharta
          Gautama
        </p>
        <div class="spacer-small"></div>
        <p class="spiegazione">
          Da bambini impariamo di continuo. La nostra mappa mentale non è ancora
          disegnata, cosa che ci rende aperti a “tutto” e ci rende in grado di
          capire qualsiasi cosa. Non sappiamo giudicare.
        </p>
        <div class="spacer-small"></div>
      </section>

      <!-- Card -->
      <!-- <div class="card">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <h2>Card Front</h2>
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img src="pp.jpg" alt="" class="pp" />
                <h2>Elia Raguso</h2>
              </div>
              <div class="card__body">
                <h3>JavaScript Wizard</h3>
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const card = document.querySelector(".card__inner");
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.container {
  border: 5px solid red;
}

// Main CSS
main {
  background-color: $background;
  color: white;
}

// Title section
.hero {
  border: 5px solid white;
}
.tag {
  // border: 5px solid orange;
  width: min-content;
  width: 50%;
  margin: 0 auto;
  font-size: 30px;
  font-family: "Dancing Script", cursive;
}

h1 {
  font-size: 40px;
  width: 50%;
  // border: 5px solid blue;
  margin: 0 auto;
  text-align: left;
  padding-left: 40px;
  span {
    -webkit-transition: color 0.5s ease-out;
    -moz-transition: color 0.5s ease-out;
    -o-transition: color 0.5s ease-out;
    transition: color 0.5s ease-out;
    -webkit-transition: font-size 0.4s ease-out;
    -moz-transition: font-size 0.4s ease-out;
    -o-transition: font-size 0.4s ease-out;
    transition: font-size 0.4s ease-out;
    &:hover {
      font-size: 54px;
      color: $purple;
      cursor: pointer;
    }
  }
}

// Logo section
.logo-box {
  width: 400px;
  height: 400px;
  // border: 5px solid greenyellow;
  // border-radius: 10%;
  margin: 0 auto;
  .logo-img {
    width: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
}

// Philosophy section

.philosophy {
  // border: 5px solid orange;
  width: 100%;
  margin: 0 auto;
  .citazione {
    text-align: center;
    font-family: "Stylish", sans-serif;
    font-size: 50px;
  }
  .spiegazione {
    text-align: center;
    width: 30%;
    margin: 0 auto;
    font-size: 20px;
  }
}

// Card section
.card {
  margin: 100px auto 0;
  width: 400px;
  height: 600px;
  perspective: 1000px;
  background-color: $background;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front {
  background-image: linear-gradient(to bottom right, green, orange);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__face--front h2 {
  color: #fff;
  font-size: 32px;
}

.card__face--back {
  background-color: purple;
  transform: rotateY(180deg);
}

.card__content {
  width: 100%;
  height: 100%;
}

.card__header {
  position: relative;
  padding: 30px 30px 40px;
}

.card__header:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, green 10%, yellow 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}

.pp {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: $background;
  border: 5px solid #fff;
  object-fit: cover;
}

.card__header h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card__body {
  padding: 30px;
}

.card__body h3 {
  color: var(--dark);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.card__body p {
  color: var(--dark);
  font-size: 18px;
  line-height: 1.4;
}

// MEDIAQUERIES
// @media screen and (max-width: 576px) {
//   .hero {
//     h1 {
//       font-size: 18px
//     }
//     h2{
//       font-size: 20px;
//     }
//     span{
//       &:hover{
//         font-size: 36px;
//       }
//     }
//   }
  
//   .logo-box{
//     max-width: 250px;
//   }
// }

@media screen and (max-width: 576px) {
  .hero {
    h1 {
      font-size: 22px
    }
    h2{
      font-size: 26px;
    }
    span{
      &:hover{
        font-size: 36px;
      }
    }
  }
  
  .logo-box{
    width: 200px;
  }
}

@media screen and (min-width: 577px) {
  .hero {
    h1 {
      font-size: 26px
    }
    h2{
      font-size: 26px;
    }
    span{
      &:hover{
        font-size: 40px;
      }
    }
  }
  
  .logo-box{
    width: 380px;
  }
}

@media screen and (min-width: 990px) {
  .hero {
    h1 {
      font-size: 26px
    }
    h2{
      font-size: 26px;
    }
    span{
      &:hover{
        font-size: 40px;
      }
    }
  }
  
  .logo-box{
    max-width: 380px;
  }
}
</style>