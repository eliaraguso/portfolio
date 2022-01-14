<template>
  <main>
    <div class="cont">
    <h3><a href="https://bootstrapfreelancer.netlify.app/">Bootstrap simple portfolio</a></h3>
    <h3><a href="https://htmlcssdropbox.netlify.app/">Html + css Dropbox</a></h3>
    <h3><a href="https://htmlcssplaystation.netlify.app/">Html + css Playstation</a></h3>
    <h3><a href="https://htmlcssdiscord.netlify.app/">Html + css Discord</a></h3>
    <h3><a href="https://vuedccomics.netlify.app/">Vue DC Comics Html+css</a></h3>
    <h3><a href="https://vueboolflix.netlify.app/">Vue Netflix</a></h3>
    <h3><a href="https://vuespotifyboolean.netlify.app/">Vue Spotify</a></h3>
    <h3><a href="https://jscampominato.netlify.app/">JS campo minato</a></h3>
    <h3><a href="https://vuehealthcare.netlify.app/">Vue Healtcare</a></h3>
    <h3><a href="https://deliveboo-elia.herokuapp.com/">Laravel + Vue Ecommerce</a></h3>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

// Main CSS
main {
  background-color: $background;
  color: white;
  min-height: calc(100vh - 6rem);
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // border: 1px solid white;
  max-width:600px ;
  margin:0 auto;
  padding: 50px 0;
}
</style>