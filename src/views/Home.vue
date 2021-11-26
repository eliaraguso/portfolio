<template>
  <main>
    <div class="container-sm">
      <div class="spacer"></div>

      <!-- Title section -->
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
        ></span> e<span> i</span>n<span>g</span>e<span>g</span>n<span>o</span>.
      </h1>
      <h2 class="tag">&lt;/h1&gt;</h2>
      <div class="spacer"></div>

      <!-- Logo section -->
      <div class="logo-box">
        <img class="logo-img" src="../assets/img/Web developer modificato.png" alt="" />
      </div>
      <div class="spacer"></div>

      <section class="philosophy">
        <p class="citazione">
          - Per comprendere tutto, è necessario dimenticare tutto. - Siddharta Gautama
        </p>
        <div class="spacer-small"></div>
        <p class="spiegazione">
          Da bambini impariamo di continuo. La nostra mappa mentale non è ancora
          disegnata, cosa che ci rende aperti a “tutto” e ci rende in grado di
          capire qualsiasi cosa. Non sappiamo giudicare.
        </p>
        <div class="spacer-small"></div>
      </section>
    </div>
  </main>
</template>

<script>
export default {};
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
    -webkit-transition: font-size 0.5s ease-out;
    -moz-transition: font-size 0.5s ease-out;
    -o-transition: font-size 0.5s ease-out;
    transition: font-size 0.5s ease-out;
    &:hover {
      font-size: 60px;
      color: $purple;
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
</style>