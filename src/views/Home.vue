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
import Spacer from "../components/Spacer.vue";
import SpacerSmall from "../components/SpacerSmall.vue";
import HeroSection from "../components/home/HeroSection.vue";
import LogoSection from "../components/home/LogoSection.vue";


export default {
  name:"Home",
  components: {
    Spacer,
    SpacerSmall,
    HeroSection,
    LogoSection,
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
  min-height: 100vh;
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