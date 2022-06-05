<template>
  <b-container fluid>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-12 p-5">
        <FormLogin />
      </div>
      <div class="col-sm-12 col-md-6 p-5 d-none d-lg-block">
        <SidePoster :type="'login'" />
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
