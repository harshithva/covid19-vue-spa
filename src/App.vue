<template>
  <div id="app" class="overflow-hidden">
    <router-view></router-view>
    <Tab />
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
export default {
  name: "App",
  components: {
    Tab
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
