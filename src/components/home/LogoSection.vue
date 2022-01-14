<template>
  <section class="logo-section">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="logo-img"
            src="../../assets/img/Web developer modificato.png"
            alt="Logo Elia Raguso Web Developer"
          />
        </div>
        <div class="flip-card-back">
          <div class="back-cont">
            <p class="cit">“Ho imparato a non preoccuparmi del risultato e di concentrarmi su ogni singolo step, cercando di farlo il più perfettamente che potessi.”</p>
            <p class="cit1">STEVE WOZNIAK</p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LogoSection",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.logo-section {
  border-width: 5px solid red;
  height: 230px;
}

.logo-img {
  max-width: 100%;
  width: 230px;
  height: 230px;
  border: double 5px transparent;
  border-radius: 50%;
  background-image: linear-gradient(
      90deg,
      rgba(78, 5, 255, 1) 0%,
      rgba(175, 37, 214, 1) 50%,
      rgba(255, 104, 0, 1) 100%
    ),
    /*here must be*/
      linear-gradient(
        90deg,
        rgba(78, 5, 255, 1) 0%,
        rgba(175, 37, 214, 1) 50%,
        rgba(255, 104, 0, 1) 100%
      ); /*both gradients*/
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.flip-card {
  margin: 0 auto;
  perspective: 1000px;
  // border: 5px solid white;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.2s ease-in-out;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  transition: transform 1.2s ease-in-out;
   -webkit-transition: transform 1.2s ease-in-out;
  -moz-transition: transform 1.2s ease-in-out;
  -o-transition: transform 1.2s ease-in-out;

}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
  transition: transform 1.2s ease-in-out;
  -webkit-transition: transform 1.2s ease-in-out;
  -moz-transition: transform 1.2s ease-in-out;
  -o-transition: transform 1.2s ease-in-out;
}

.back-cont {
  border-radius: 50%;
  background-image: linear-gradient(
      90deg,
      rgba(78, 5, 255, 1) 0%,
      rgba(175, 37, 214, 1) 50%,
      rgba(255, 104, 0, 1) 100%
    ),
    /*here must be*/
      linear-gradient(
        90deg,
        rgba(78, 5, 255, 1) 0%,
        rgba(175, 37, 214, 1) 50%,
        rgba(255, 104, 0, 1) 100%
      ); /*both gradients*/
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 250px;
  width: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cit {
    // border: 5px solid white;
    width: 60%;
    margin-top: 28px;
    // border: 3px solid black;
    font-size: 12px;
    
  }
  .cit1 {
    width: 30%;
    // border: 5px solid blue;
    font-size: 14px;
  }

// MEDIAQUERIES
@media screen and (min-width: 576px) {
  .logo-section {
    height: 300px;
  }

  .logo-img {
    width: 300px;
    height: 300px;
  }
  .back-cont {
    width: 300px;
    height: 300px;
  }
}

@media screen and (min-width: 992px) {
  .logo-section {
    height: 400px;
  }
  .logo-img {
    width: 400px;
    height: 400px;
  }
  .back-cont {
    width: 400px;
    height: 400px;
  }

  .cit {
    font-size: 16px;
  }
}

@media screen and (min-width: 1200px) {
  .logo-section {
    height: 500px;
  }
  .logo-img {
    width: 500px;
    height: 500px;
  }
  .back-cont {
    width: 500px;
    height: 500px;
  }
  .cit {
    font-size: 23px;
  }
}
</style>