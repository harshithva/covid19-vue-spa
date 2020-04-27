<template>
  <Fragment>
    <ul class="nav justify-content-between fixed-bottom shadow p-3 bg-white rounded">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <font-awesome-icon icon="house-user" class="icons" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <font-awesome-icon icon="chart-area" class="icons" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <font-awesome-icon icon="address-book" class="icons" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <font-awesome-icon icon="info-circle" class="icons" />
        </a>
      </li>
    </ul>
  </Fragment>
</template>

<style scoped>
.nav {
  padding: 2rem;
}
.nav-link {
  color: #bdc3c7;
  font-size: 1.5rem;
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
</style>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment
  }
};
</script>

// #473f97 purple
// #ff4c58 red
// #4c79ff blue
