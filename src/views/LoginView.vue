<template>
  <b-container fluid>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 p-5">
        <FormLogin />
      </div>
      <div id="poster" class="col-sm-12 col-md-6 col-lg-6 p-5">
        <SidePoster :type="'login'"/>
      </div>
    </div>
  </b-container>
</template>

<script>
import SidePoster from '@/components/loginregister/PosterPicture.vue'
import FormLogin from '@/components/loginregister/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    SidePoster,
    FormLogin
  }
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  #poster {
    display: none;
  }
}
</style>
