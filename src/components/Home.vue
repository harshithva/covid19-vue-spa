<template>
  <fragment>
    <div class="card hero shadow mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <font-awesome-icon icon="align-left" class="icons" />
          </div>
          <div>
            <font-awesome-icon icon="bell" class="icons" />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-6 text-left">
            <h5 class="card-title text-white main-title font-weight-bold">Covid-19</h5>
          </div>
          <div class="col-2"></div>
          <div class="col-4">
            <p class="country bold">India</p>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-8 text-left">
            <h5 class="text-white">Are you feeling sick ?</h5>
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row text-left mt-2 description">
          <p
            class="text-white ml-3"
          >If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</p>
        </div>
        <div class="row mt-2">
          <div class="col">
            <button class="btn btn-lg call-btn text-white">
              <font-awesome-icon icon="phone-alt" class="icons" />&nbsp;Call now
            </button>
          </div>
          <div class="col">
            <button class="btn btn-lg sms-btn text-white">
              <font-awesome-icon icon="comment" class="icons" />&nbsp;Send SMS
            </button>
          </div>
        </div>
      </div>
    </div>
    <h4>Prevention</h4>
    <div class="container">
      <div class="row mt-4">
        <div class="col-4 text-center">
          <img src="../assets/keep_distance.svg" alt="wash hands" />
          <p class="mt-1">Avoid close contact</p>
        </div>
        <div class="col-4 text-center">
          <img src="../assets/wash_hands.svg" alt="wash hands" />
          <p class="mt-1">Clean your hands often</p>
        </div>
        <div class="col-4 text-center">
          <img src="../assets/wear_mask.svg" alt="wash hands" />
          <p class="mt-1">Wear a facemask</p>
        </div>
      </div>
    </div>
    <div class="container">
      <img src="../assets/test.svg" alt="wash hands" />
    </div>
  </fragment>
</template>

<style scoped>
.hero {
  background-color: #3c44c8;
  height: 21rem;
  border-radius: 0 0 2rem 2rem;
}

.main-title {
  font-size: 1.6rem;
}

.icons {
  font-size: 1.3rem;
  color: white;
}
.country {
  color: black;
  background-color: white;
  border-radius: 2rem;
  padding: 0.5rem;
  margin-right: 2rem;
}

.description {
  opacity: 0.5;
}

.call-btn {
  border-radius: 2rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background-color: #eb4d4b;
  font-size: 1rem;
}

.sms-btn {
  border-radius: 2rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background-color: #4c79ff;
  font-size: 1rem;
}

.prevention-img {
  height: 5rem;
}
</style>

<script>
export default {};
</script>