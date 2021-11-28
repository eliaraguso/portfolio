<template>
  <main>
    <div class="container-sm">
      <Spacer />

      <HeroSection />

      <Spacer />

      
      <LogoSection />

      <SpacerSmall />

     
    </div>
  </main>
</template>

<script>
import Spacer from "../components/home/Spacer.vue";
import SpacerSmall from "../components/home/SpacerSmall.vue";
import HeroSection from "../components/home/HeroSection.vue";
import LogoSection from "../components/home/LogoSection.vue";


export default {
  components: {
    Spacer,
    SpacerSmall,
    HeroSection,
    LogoSection,
  },

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


</style>