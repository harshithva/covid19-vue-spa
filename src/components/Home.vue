<template>
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

      <div class="row mt-5">
        <div class="col-6 text-left">
          <h5 class="card-title text-white main-title font-weight-bold">Covid-19</h5>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <p class="country bold">India</p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-8">
          <h5 class="text-white text-left m-1">Are you feeling sick ?</h5>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row text-left m-1 mt-2 description">
        <p
          class="text-white"
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
</template>

<style scoped>
.hero {
  background-color: #473f97;
  height: 25rem;
  border-radius: 0 0 3rem 3rem;
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
}

.sms-btn {
  border-radius: 2rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background-color: #4c79ff;
}
</style>

<script>
export default {};
</script>