<template>
  <div id="app">
    <div id="loading" v-if="loader">
      <div class="spinner d-flex align-items-center justify-content-center h-100">
        <atom-spinner :animation-duration="1000" :size="60" :color="'#ff1d5e'" v-if="loader" />
      </div>
    </div>
    <router-view></router-view>
    <Tab />
  </div>
</template>

<script>
import { AtomSpinner } from "epic-spinners";
import Tab from "./components/Tab.vue";
export default {
  name: "App",
  components: {
    Tab,
    AtomSpinner
  },
  data() {
    return {
      loader: true
    };
  },
  mounted() {
    if (this.loader) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.loader = false;
      }, 700);
    }
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

#loading {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 99999;
}
.spinner {
}
</style>
