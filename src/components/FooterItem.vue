<template>
  <div id="footer">
    <section class="background-color pb-3 mt-5 backgroundFooter">
      <div class="container text-light mt-5">
        <div class="row">
          <div class="col-md-4 ps-3 pe-3">
            <div class="logo-image mt-5 pb-4">
            <img src="../assets/images/logofooter.png" width="150px" />
            </div>
            <p class="pt-3">
            Best place to study with certified courses that can be used for work
            </p>
            <p class="pt-3">
            Learn@Learn.co.id
            </p>
          </div>
          <div class="col-md-2 ps-3 pe-3 pt-2">
            <p class="text-uppercase fw-bolder pt-5">Learning</p>
            <p class="text-capitalize pt-4">React JS Dev</p>
            <p class="text-capitalize">Flutter Dev</p>
            <p class="text-capitalize">UI Designer</p>
            <p class="text-capitalize">Website Dev</p>
          </div>
          <div class="col-md-2 ps-3 pe-3 pt-2">
            <p class="text-uppercase fw-bolder pt-5">Categories</p>
            <p class="text-capitalize pt-4">Design Courses</p>
            <p class="text-capitalize">Coding Courses</p>
            <p class="text-capitalize">Soft Skill</p>
            <p class="text-capitalize">Architecture</p>
          </div>
          <div  class="col-md-2 ps-3 pe-3 pt-2">
            <p class="text-uppercase fw-bolder pt-5">Support</p>
            <p class="text-capitalize pt-4">Payment</p>
            <p class="text-capitalize">Help Center</p>
            <p class="text-capitalize">FAQ</p>
            <p class="text-capitalize">Certificate</p>
          </div>
          <div class="col-md-2 ps-3 pe-3 pt-2">
            <p class="text-uppercase fw-bolder pt-5">Company</p>
            <p class="text-capitalize pt-4">Twitter</p>
            <p class="text-capitalize">Facebook</p>
            <p class="text-capitalize">Instagram</p>
            <p class="text-capitalize">Whatsapp</p>
          </div>
        </div>
      </div>
    </section>
    <section class="background-color text-center backgroundSecondFooter p-2">
      <span class="lastfooter text-light">LearnITnow 2022 All rights reserved </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FooterItem'
}
</script>

<style scoped>
.backgroundFooter {
  background-color: #00AFB9;
}
.backgroundSecondFooter {
  background-color: #00899F;
}
.lastfooter {
    text-align: center;
}
</style>