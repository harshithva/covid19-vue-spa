<template>
  <fragment>
    <div class="card hero">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <font-awesome-icon icon="align-left" class="icons" />
          </div>
          <div>
            <font-awesome-icon icon="bell" class="icons" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-8 text-left ml-4">
            <h5 class="text-white">Statistics</h5>
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row mt-3 d-flex justify-content-center">
          <div>
            <ul class="nav justify-content-around shadow">
              <li class="nav-item">
                <a class="nav-link" href="#">My Country</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Global</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<style scoped>
.hero {
  background-color: #3c44c8;
  height: 30rem;
}

.icons {
  font-size: 1.3rem;
  color: white;
}

.nav {
  background-color: #ffffff2d;
  border-radius: 5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  color: black;
  transition: ease-in 0.2s;
  text-decoration: none;
}

.nav-item {
  border-radius: 1.5rem;
  text-decoration: none;
  padding: 0 1.45rem 0 1.45rem;
}

.nav-item:hover {
  color: black;
  background-color: #fff;
  transition: ease-in 0.2s;
  text-decoration: none;
}
</style>