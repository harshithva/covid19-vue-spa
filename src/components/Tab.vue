<template>
  <Fragment>
    <ul class="nav justify-content-between fixed-bottom shadow p-3 bg-white rounded">
      <li class="nav-item">
        <router-link to="/">
          <a class="nav-link">
            <font-awesome-icon icon="house-user" class="icons" />
          </a>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/stats">
          <a class="nav-link">
            <font-awesome-icon icon="chart-area" class="icons" />
          </a>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/address">
          <a class="nav-link" href="#">
            <font-awesome-icon icon="address-book" class="icons" />
          </a>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/h">
          <a class="nav-link" href="#">
            <font-awesome-icon icon="info-circle" class="icons" />
          </a>
        </router-link>
      </li>
    </ul>
  </Fragment>
</template>

<style scoped>
.nav {
  padding: 2rem;
}
.nav-link {
  font-size: 1.5rem;
  color: #bdc3c7;
}

.nav-link:hover {
  color: white;
  transition: ease-in 0.2s;
}

.nav-item {
  border-radius: 1.5rem;
  width: 5rem;
}

.nav-item:hover {
  color: white;
  background-color: #4c79ff;
  transition: ease-in 0.2s;
}

.router-link {
  color: #bdc3c7;
}

.router-link-exact-active {
  color: white;
  background-color: #4c79ff;
  transition: ease-in 0.2s;
  border-radius: 1.5rem;
}
</style>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment
  }
};
</script>

// #3C44C8 purple
// #ff4c58 red
// #4c79ff blue
