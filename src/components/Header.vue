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

          <!-- Dropdown menu -->
          <div class="btn-group dropstart">
            <button
              type="button"
              class="btn btn-secondary btn-menu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              .menu()
            </button>
            <ul class="dropdown-menu">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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

// DropDown Menu
.dropstart {
  // border: 5px solid white;
  .btn-menu {
    background-color: $purple;
    border-radius: 5px!important;
    // width: 100px;
    height: 60px;
    font-size: 1.4rem;
  }
  .dropdown-menu {
    background-color: $background;
    font-size: 25px;
    border: 1px solid white;
    .nav-link {
      color: white;
      &:hover {
        color: $purple;
      }
    }
  }
}

// Mediaqueries
@media screen and (max-width: 1200px) {
  .header-nav {
    display: none;
  }
  .dropstart {
    display: initial;
  }
}

@media screen and (min-width: 1201px) {
  .dropstart {
    display: none;
  }
}

@media screen and (max-width: 576px){
  .header-left {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 14px;
    }
  }
}
</style>