<template>
  <div class="spacer"></div>
</template>

<script>
export default {
    name: "Spacer",

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

    .spacer {
    width: 100%;
    height: 90px;
    // border: 5px solid green;
}

@media screen and (min-width: 320px) {
 
    
} 
@media screen and (min-width: 576px) {

    
} 
@media screen and (min-width: 768px) {
 .spacer {
   height: 160px;
 }
    
} 
@media screen and (min-width: 1200px) {
  .spacer {
    height: 400px;
  }
    
}
</style>