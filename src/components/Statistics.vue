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
        <!-- <div class="row mt-3">
          <div class="col">
            <a class="text-white">Total</a>
          </div>
          <div class="col">
            <a class="text-white">Today</a>
          </div>
          <div class="col">
            <a class="text-white">Yesterday</a>
          </div>
        </div>-->
        <div class="row mt-4">
          <div class="col">
            <div class="card counter-card counter-card--yellow">
              <div class="card-body">
                <div class="card-title text-left text-white">Affected</div>
                <p class="count-1 text-white text-left">336,851</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card counter-card counter-card--red">
              <div class="card-body">
                <div class="card-title text-left text-white counter-card-title">Death</div>
                <p class="count-1 text-white text-left">336,851</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4">
            <div class="card counter-card counter-card--green">
              <div class="card-body">
                <div class="card-title text-left text-white counter-sub-title">Recovered</div>
                <p class="count-2 text-white text-left">17,0977</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card counter-card counter-card--blue">
              <div class="card-body">
                <div class="card-title text-left text-white counter-sub-title">Active</div>
                <p class="count-2 text-white text-left">301,251</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card counter-card counter-card--purple">
              <div class="card-body">
                <div class="card-title text-left text-white counter-sub-title">Serious</div>
                <p class="count-2 text-white text-left">8,702</p>
              </div>
            </div>
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

.count-1 {
  font-weight: bolder;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: -0.8rem;
}

.count-2 {
  font-weight: bolder;
  font-size: 1rem;
  margin-top: 1.8rem;
  margin-bottom: -0.8rem;
}

.counter-sub-title {
  font-size: 0.7rem;
  font-weight: bolder;
}
.counter-card {
  border-radius: 1.5rem;
}

.counter-card-title {
  font-weight: bold;
}

.counter-card--yellow {
  background-color: #ffb259;
}

.counter-card--red {
  background-color: #ff5959;
}

.counter-card--green {
  background-color: #4cd97b;
}

.counter-card--blue {
  background-color: #4db5ff;
}

.counter-card--purple {
  background-color: #9059ff;
}
</style>