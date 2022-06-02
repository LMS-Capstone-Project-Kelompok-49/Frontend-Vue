<template>
  <b-container fluid>
    <div class="row">
      <div class="col-sm-12 col-md-6 p-5 d-none d-lg-block">
        <b-img rounded center class="img-poster" alt="Rounded image" src="../assets/images/loginregisterposter.png"></b-img>
      </div>
      <div class="col-sm-12 col-md-6 col-12 p-5">
        <FormRegister/>
      </div>
    </div>
  </b-container>
</template>

<script>
import FormRegister from '@/components/loginregister/RegisterForm.vue'

export default {
  name: 'RegisterView',
  components: {
    FormRegister
  }
}
</script>

<style scoped>
.img-poster {
  height: 88vh;
}
</style>
