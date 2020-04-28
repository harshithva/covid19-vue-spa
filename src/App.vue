<template>
  <div id="app" class="overflow-hidden">
    <div id="loading" v-if="loader">
      <div class="spinner d-flex align-items-center justify-content-center h-100">
        <atom-spinner :animation-duration="1000" :size="60" :color="'#ff1d5e'" v-if="loader" />
      </div>
    </div>
    <transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
      <router-view></router-view>
    </transition>
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
      loader: true,
      prevHeight: 0,
      transitionName: "fade"
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
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || "fade";

      next();
    });
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
  transition: all 0.2s ease-in-out;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
