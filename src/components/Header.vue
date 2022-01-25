<template>
  <header>
    <div class="container-sm">
      <div class="row">
        <!-- Header left -->
        <div class="col-4 header-left">
          <img
            class="logo-img"
            src="../assets/img/Logo mio portfolio.png"
            alt="Logo image Elia Raguso web developer"
          />
          <h2>.web_developer()</h2>
        </div>

        <!-- Header right -->
        <div class="col-8 header-right">
          <nav class="header-nav">
            <ul>
              <li class="magic-hover magic-hover__square">
                <router-link to="/" class="nav-link">.home()</router-link>
              </li>
              <li class="magic-hover magic-hover__square">
                <router-link to="/projects" class="nav-link"
                  >.projects()</router-link
                >
              </li>
              <li class="magic-hover magic-hover__square">
                <router-link to="/about" class="nav-link">.about()</router-link>
              </li>
              <li class="magic-hover magic-hover__square nav-link">
                <a href=""><i class="fab fa-linkedin"></i></a>
              </li>
              <li class="magic-hover magic-hover__square nav-link">
                <a href=""><i class="fab fa-github"></i></a>
              </li>
            </ul>
          </nav>

          <!-- Navigation sidebar -->
          <Navbar/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './MobileNavbar.vue';


export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";


// Header
header {
  height: 6rem;
  background-color: $background;
  display: flex;
  align-items: center;
}

// Header-left
.header-left {
  // border: 5px solid blue;
  align-items: center;
  display: flex;
  .logo-img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  h2 {
    color: white;
    font-size: 1.4rem;
    font-weight: 400;
  }
}

// Header right
.header-right {
  // border: 5px solid red;
  display: flex;
  align-items: center;
  justify-content: end;
  .header-nav {
    //   border: 5px solid greenyellow;
    ul {
      list-style: none;
      li {
        display: inline-block;
        margin-right: 20px;
        .nav-link {
          -webkit-transition: color 0.2s ease-out;
          -moz-transition: color 0.2s ease-out;
          -o-transition: color 0.2s ease-out;
          transition: color 0.2s ease-out;
        }
        .nav-link:hover {
          color: $purple;
        }
        a {
          text-decoration: none;
          color: white;
          font-size: 1rem;
          i {
            font-size: 1.6rem;
            color: $purple;
            -webkit-transition: color 0.2s ease-out;
            -moz-transition: color 0.2s ease-out;
            -o-transition: color 0.2s ease-out;
            transition: color 0.2s ease-out;
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
}


// Mediaqueries
@media screen and (max-width: 576px) {
  .header-left {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 14px;
    }
    h2,
    .logo-img {
      margin-left: 70px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .header-nav {
    display: none;
  }
  .header-left img {
    margin-left: 40px;
  }
}

@media screen and (min-width: 576px) {
  .header-left {
    h2,
    .logo-img {
      margin-left: 0px;
    }
  }
}

@media screen and (min-width: 992px){
  .header-left {
    .logo-img {
      margin-left: 50px;
    }
  }
}

</style>