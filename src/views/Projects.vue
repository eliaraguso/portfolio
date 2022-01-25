<template>
  <main>
    <div class="container">
      <SpacerSmall />
      <h1>Ecco alcuni progetti che ho sviluppato</h1>
      <SpacerSmall />
    </div>
    <div class="projects timeline">
      <ul>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://deliveboo-elia.herokuapp.com/"
              >Delivery <br />
              E-Commerce <br />Site</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a
              class="project-link"
              href="https://htmlcssplaystation.netlify.app/"
              >Playstation <br />
              Web <br />Site</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://meteoappelia.netlify.app/"
              >Web <br />
              Application <br />
              Meteo</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://vuewhatsapp.netlify.app/"
              >Whatsapp <br />Clone <br />Application</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://htmlcssdropbox.netlify.app/"
              >Dropbox <br />Web <br />Site</a
            >
          </div>
        </li>

        <li>
          <div class="link-container">
            <a class="project-link" href="https://vuedccomics.netlify.app/"
              >DC Comics <br />Web <br />Site</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://vueboolflix.netlify.app/"
              >Netflix <br />Clone <br />Application</a
            >
          </div>
        </li>
        <li>
          <div class="link-container">
            <a class="project-link" href="https://vuehealthcare.netlify.app/"
              >Healtcare <br />Web <br />Site</a
            >
          </div>
        </li>
      </ul>
    </div>
  <Spacer/>
  </main>
</template>

<script>
// import Spacer from "../components/Spacer.vue"
import SpacerSmall from "../components/SpacerSmall.vue";
import Spacer from "../components/Spacer.vue";

export default {
  components: {
    Spacer,
    SpacerSmall,
  },
  mounted() {
    (function () {
      "use strict";

      // define variables
      var items = document.querySelectorAll(".timeline li");

      // check if an element is in viewport
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

// Main CSS
main {
  background-color: $background;
  color: white;
  // min-height: calc(100vh - 6rem);
}

.container {
  // border: 1px solid red;
  h1 {
    text-align: center;
  }
}

.link-container {
  // background-color: greenyellow;
  display: flex;
  justify-content: center;
  .project-link {
    border: 1px solid red;
    // display: block;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}

/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
  background: $background;
  padding: 50px 0;
  margin-bottom: 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: rgb(255, 255, 255);
}

.timeline ul li::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  bottom: -84px;
  width: 200px;
  height: 200px;
  padding: 15px;
  // background: #f45b69;
  border: 3px solid $purple;
  border-radius: 50%;
}

.timeline ul li div::before {
  content: "";
  position: absolute;
  bottom: 88px;
  left: 196px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent $purple transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -238px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent $purple;
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background 0.5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #ffffff;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  // CORREZIONE DALL'ORIGINALE PER MIGLIORARE RESPONSIVE

  // .timeline ul li div {
  //   width: 250px;
  // }
  .timeline ul li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }

  // CORREZIONE DALL'ORIGINALE PER MIGLIORARE RESPONSIVE

  // .timeline ul li div {
  //    width: calc(100vw - 91px);
  // }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent $purple transparent transparent;
  }
}

/* EXTRA/CLIP PATH STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.timeline-clippy ul li::after {
  width: 40px;
  height: 40px;
  border-radius: 0;
}

.timeline-rhombus ul li::after {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.timeline-rhombus ul li div::before {
  bottom: 12px;
}

.timeline-star ul li::after {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.timeline-heptagon ul li::after {
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
}

.timeline-infinite ul li::after {
  animation: scaleAnimation 2s infinite;
}

@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.25);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}
</style>