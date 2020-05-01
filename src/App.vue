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
    Samples,
  },
};
</script>

<style lang="scss">
@import "./assets/css/main.scss";
</style>
