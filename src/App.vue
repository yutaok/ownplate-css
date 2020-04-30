<template>
  <div id="app">
    <Samples />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Samples from "./components/Samples";

export default {
  name: "App",
  components: {
    Samples
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
@import url(./assets/css/main.css);
</style>
