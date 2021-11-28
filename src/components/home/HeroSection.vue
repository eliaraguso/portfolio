<template>
  <section class="hero-section">
        <h2 class="tag">&lt;h1&gt;</h2>
        <h1 class="title">
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
</template>

<script>
export default {
    name: "HeroSection",

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

// HERO section
.hero-section {
//   border: 5px solid white;
}
.tag {
//   border: 5px solid orange;
  width: min-content;
  font-size: 30px;
  font-family: "Dancing Script", cursive;
  margin-left: 10%;
}

.title {
  font-size: 24px;
  width: 80%;
//   border: 5px solid blue;
  margin: 0 auto;
  padding-left: 8%;
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
      font-size: 40px;
      color: $purple;
      cursor: pointer;
    }
  }
}
// MEDIAQUERIES


@media screen and (min-width: 768px) {
  .hero-section {
    .tag {
        font-size: 36px;
        margin-left: 13%;
    }
    .title {
        width: 60%;
        font-size: 30px;
        padding: 0;
    }
    
    span {
      &:hover {
        font-size: 48px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .hero-section {
    .tag {
        font-size: 42px;
        margin-left: 13%;
    }
    .title {
        width: 60%;
        font-size: 38px;
        padding: 0;
    }
    
    span {
      &:hover {
        font-size: 58px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .hero-section {
    .tag {
        font-size: 46px;
        margin-left: 20%;
    }
    .title {
        width: 50%;
        font-size: 40px;
        padding: 0;
    }
    
    span {
      &:hover {
        font-size: 60px;
      }
    }
  }
}
</style>