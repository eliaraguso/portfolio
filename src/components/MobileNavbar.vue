<template>
  <div class="nav-cont" id="nav">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="close">&times;</a>
      <ul class="navlink-list">
        <li v-on:click="close">
          <router-link to="/" class="nav-link">.home()</router-link>
        </li>
        <li v-on:click="close">
          <router-link to="/projects" class="nav-link">.projects()</router-link>
        </li>
        <li v-on:click="close">
          <router-link to="/about" class="nav-link">.about()</router-link>
        </li>
        <li class="link" v-on:click="close">
          <a href="https://www.linkedin.com/in/eliaraguso/"><i class="fab fa-linkedin"></i></a>
        </li>
        <li class="link" v-on:click="close">
          <a href="https://github.com/eliaraguso"><i class="fab fa-github"></i></a>
        </li>
      </ul>
    </div>
    <button class="btn-menu" v-on:click="open">.menu()</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    open: function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    },
    close: function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";
@import "../assets/style/common.scss";


.btn-menu {
  background-color: $purple;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  padding: 7px 5px;
  margin-right: 10px;
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
  &:hover {
    color: $background;
  }
}

.sidenav {
    // opacity: 92%;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $purple;
  overflow-x: hidden;
  -webkit-transition: width 0.5s ease-out;
  -moz-transition: width 0.5s ease-out;
  -o-transition: width 0.5s ease-out;
  transition: width 0.5s ease-out;
  padding-top: 60px;
  li {
    padding: 8px 8px 8px 8px;
    font-size: 22px;
    padding: 30px 0;
    color: $background;
    display: block;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;
    -o-transition: color 0.2s ease-out;
    transition: color 0.2s ease-out;
    &:hover {
      color: #f1f1f1;
    }
  }
  .nav-link,
  .link a,
  .closebtn {
    color: white;
    text-decoration: none;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;
    -o-transition: color 0.2s ease-out;
    transition: color 0.2s ease-out;
    &:hover {
      color: $background;
    }
  }
  .link {
      text-align: center;
      font-size: 2.6rem;
  }
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.navlink-list {
  // border: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  
  li {
    // border: 1px solid;
    text-align: center;
  }
}

/* // Mediaquery sulla sidenav */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 1200px) {
  .nav-cont {
    display: initial;
  }
}

@media screen and (min-width: 1201px) {
  .nav-cont {
    display: none;
  }
}


@media screen and (min-width: 992px){
  .btn-menu{
      margin-right: 30px;
    }
  }
</style>