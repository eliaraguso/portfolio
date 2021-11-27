<template>
  <header>
    <div class="container-sm">
      <div class="row">
        <!-- Header left -->
        <div class="col-5 header-left">
          <img
            class="logo-img"
            src="../assets/img/Logo mio portfolio.png"
            alt="Logo image Elia Raguso web developer"
          />
          <h2>.web_developer()</h2>
        </div>

        <!-- Header right -->
        <div class="col-7 header-right">
          <nav class="header-nav">
            <ul>
              <li>
                <router-link to="/" class="nav-link">.home()</router-link>
              </li>
              <li>
                <router-link to="/projects" class="nav-link"
                  >.projects()</router-link
                >
              </li>
              <li>
                <router-link to="/about" class="nav-link">.about()</router-link>
              </li>
              <li>
                <a href=""><i class="fab fa-linkedin"></i></a>
              </li>
              <li>
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

.container-sm {
  // border: 5px solid red;
}

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
          font-size: 1.4rem;
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
  }
}

@media screen and (max-width: 1200px) {
  .header-nav {
    display: none;
  }
}
</style>