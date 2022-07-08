<template>
  <div>
    <div v-if="infoMessage" class="alert alert-danger" role="alert">
      {{ infoMessage }}
    </div>
    <form autocomplete="off" @submit="postContact">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="firstName" class="font-weight-normal">First Name</h5>
            <div class="input-group mb-2">
              <input type="text" v-model="form.firstName" class="form-control" id="firstName" placeholder="Type your first name">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="lastName" class="font-weight-normal">Last Name</h5>
            <div class="input-group mb-2">
              <input type="text" v-model="form.lastName" class="form-control" id="lastName" placeholder="Type your last name" height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="emailInput" class="font-weight-normal">Email Address</h5>
            <div class="input-group mb-2">
              <input type="text" v-model="form.email" class="form-control" id="emailInput" placeholder="Type your email" height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="phoneInput" class="font-weight-normal">Phone Number</h5>
            <div class="input-group mb-2">
              <input type="text" v-model="form.phone" class="form-control" id="phoneInput" placeholder="Type your phone number" height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12">
          <div class="form-group my-3">
            <h5 for="messageInput" class="font-weight-normal">Message</h5>
            <div class="input-group mb-2">
              <textarea name="comment" v-model="form.message" id="messageInput" class="form-control" rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-success px-5 py-2 btn-form">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      },
      infoMessage: ''
    }
  },
  methods: {
    postContact () {
      event.preventDefault()
      if(this.form.firstName !== '' && this.form.lastName !== '' && this.form.email !== '' && this.form.phone !== '' && this.form.message !== ''){
        this.$store.dispatch('home/postContactForm', this.form)
      }else{
        this.infoMessage = 'Form Must be filled'
      }
    }
  },
}
</script>

<style scoped>
textarea {
  width: 100%;
}
.btn-form {
  background-color: #00AFB9;
  border-color: #00AFB9;
}
</style>