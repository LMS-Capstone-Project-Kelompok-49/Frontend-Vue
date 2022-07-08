<template>
  <div class="programs">
    <div class="container">
      <h1 class="mb-3 fw-semibold"> Don't find the course you want? </h1>
      <p class="fw-semibold"> Didn't find the course of your dreams? don't worry.
        You can request the course you <br>
        want by filling out the form below</p>
      <p class="fw-semibold"> Our team will evalute the request you want and will contact you soon </p>

      <div class="form mt-5">
        <h4> Request Course </h4>
      </div>
      <div v-if="infoMessage" class="alert alert-danger text-left" role="alert">
        {{ infoMessage }}
      </div>
      <form autocomplete="off" @submit="postRequest">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="form-group my-3">
              <h5 for="firstName" class="font-weight-normal">First Name</h5>
              <div class="input-group mb-2">
                <input type="text" v-model="form.firstName" class="form-control" id="firstName" placeholder="Type your first name" >
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="form-group my-3">
              <h5 for="lastName" class="font-weight-normal">Last Name</h5>
              <div class="input-group mb-2">
                <input type="text" v-model="form.lastName"  class="form-control" id="lastName" placeholder="Type your last name"  height="250px">
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="form-group my-3">
              <h5 for="emailInput" class="font-weight-normal">Email Address</h5>
              <div class="input-group mb-2">
                <input type="text" v-model="form.email"  class="form-control" id="emailInput" placeholder="Type your email"  height="250px">
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="form-group my-3">
              <h5 for="phoneInput" class="font-weight-normal">Phone Number</h5>
              <div class="input-group mb-2">
                <input type="text" v-model="form.phone"  class="form-control" id="phoneInput" placeholder="Type your phone number"  height="250px">
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12">
            <div class="form-group my-3">
              <h5 for="messageInput" class="font-weight-normal">Course you want</h5>
              <div class="input-group mb-2">
                <textarea name="comment" v-model="form.message"  id="messageInput" class="form-control" rows="5" placeholder="Type your text" ></textarea>
              </div>
            </div>
          </div>

        </div>
        <button type="submit" class="btn btn-success px-5 py-2 btn-form">Send Message</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestView',
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
    postRequest () {
      event.preventDefault()
      if(this.form.firstName !== '' && this.form.lastName !== '' && this.form.email !== '' && this.form.phone !== '' && this.form.message !== ''){
        this.$store.dispatch('home/postRequestForm', this.form)
      }else{
        this.infoMessage = 'Form Must be filled'
      }
    }
  },
}
</script>

<style scoped>
.programs{
  margin-right: auto;
  margin-left: auto;
  width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
}

.container{
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

h1{
  text-align: center;
}

h4{
  color: #00899F;
  text-align: left;
}

h5 {
  text-align: left;
}

.btn-form {
  background-color: #00AFB9;
  border-color: #00AFB9;
}
</style>