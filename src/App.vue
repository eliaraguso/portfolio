<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  
  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>


<style lang="scss">
  @import "./assets/style/common.scss";
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=PT+Sans+Narrow:wght@400;700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=PT+Sans+Narrow:wght@400;700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Stylish&display=swap');
  
  #app {
    font-family: 'Roboto Mono', monospace;
  }

</style>
