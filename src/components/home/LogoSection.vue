<template>
  <section class="logo-section">
    <div class="logo-box">
      <img
        class="logo-img"
        src="../../assets/img/Web developer modificato.png"
        alt=""
      />
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

// Logo section
.logo-box {
  width: 55%;
  max-width: 500px;
  // border: 5px solid greenyellow;
  margin: 0 auto;
  .logo-img {
    width: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
}
</style>