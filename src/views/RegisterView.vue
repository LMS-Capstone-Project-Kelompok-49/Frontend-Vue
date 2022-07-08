<template>
  <b-container fluid>
    <div class="row">
      <div id="poster" class="col-sm-12 col-md-6 col-lg-6 p-5">
        <SidePoster :type="'register'"/>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6">
        <FormRegister/>
      </div>
    </div>
  </b-container>
</template>

<script>
import FormRegister from '@/components/loginregister/RegisterForm.vue'
import SidePoster from '@/components/loginregister/PosterPicture.vue'

export default {
  name: 'RegisterView',
  components: {
    FormRegister,
    SidePoster
  }
}
</script>

<style scoped>
.img-poster {
  height: 88vh;
}
@media screen and (max-width: 991px) {
  #poster {
    display: none;
  }
}
</style>
