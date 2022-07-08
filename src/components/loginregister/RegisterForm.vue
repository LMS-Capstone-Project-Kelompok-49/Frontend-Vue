<template>
  <div class="register-wrapper">
		<h1>Create Your Account</h1>
		<label class="font-weight-bold text-muted">
			Start for free!
		</label>

    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    
		<form class="w-lg-50 m-0" autocomplete="off" @submit="Register">

      <div class="form-group">
				<h5 for="NameInput" class="font-weight-bold">Name</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-user"></i>
						</div>
					</div>
					<input v-model="form.name" type="text" class="form-control" id="NameInput" placeholder="Your Name">
				</div>
			</div>

			<div class="form-group">
				<h5 for="EmailInput" class="font-weight-bold">Email</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-envelope"></i>
						</div>
					</div>
					<input v-model="form.email" type="text" class="form-control" id="EmailInput" placeholder="Your Email">
				</div>
			</div>

			<div class="form-group">
				<h5 for="PasswordInput" class="font-weight-bold">Password</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-lock"></i>
						</div>
					</div>
					<input v-model="form.password" type="password" class="form-control" id="PasswordInput" placeholder="Your Password">
				</div>
			</div>

			<div class="form-group">
				<h5 for="ConfirmPasswordInput" class="font-weight-bold">Confirm Password</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-lock"></i>
						</div>
					</div>
					<input v-model="form.confirmPassword" type="password" class="form-control p-3" id="ConfirmPasswordInput" placeholder="Retype Your Password">
				</div>
			</div>

      <div class="row button-wrapper">
        <div class="col-sm-6 col-md-3 order-1">
          <button type="button" class="btn btn-outline-dark btn-block rounded-sm p-3 btn-back" @click="getBack">Back</button>
        </div>
        <div class="col-sm-12 col-md-9 order-0">
          <button v-if="!loading" type="submit" class="btn btn-info btn-block rounded-pill p-3 bg-mx-green border-mx-green">Sign in</button>
          <button v-if="loading" type="button" class="btn btn-info btn-block rounded-pill p-3 bg-mx-green border-mx-green" disabled>
            <b-spinner label="Spinning"></b-spinner>
          </button>
        </div>
      </div>

		</form>
	</div>
</template>

<script>
export default {
  name: 'FormRegister',
  data() {
    return {
      message: '',
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      loading: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ // eslint-disable-line
    }
  },
  computed: {
    errorMessage () {
      return this.$store.state.register.error
    }
  },
  mounted () {
    this.emptyError()
  },
  methods: {
    getBack () {
      this.$router.push({ name: 'Home' })
    },
    async Register () {
      event.preventDefault()
      this.emptyError()
      this.loading = !this.loading
      if(this.form.name !== ''){
        if(this.form.email !== ''){
          if(!this.reg.test(this.form.email)) {
            this.message = 'Email must be email valid'
          } else {
              if (this.form.password.length >= 8){
                if(this.form.password === this.form.confirmPassword){
                  this.message = ''
                  this.$store.dispatch('register/registerPost', this.form)
                } else {
                  this.message = 'Credential Password do not match'
                }
              } else {
                this.message = 'Password must be 8 character'
              }
            }
        } else {
          this.message = 'Email must be filled'
        }
      } else {
        this.message = 'Name must be filled'
      }
      setTimeout(() => (this.loading = !this.loading), 6000)
    },
    emptyError (){
      this.$store.dispatch('register/emptyErrorMessage')
    }
  }
}
</script>

<style scoped>
.button-wrapper {
  margin-top: 1em;
}
@media screen and (max-width: 767px) {
  .btn-back {
    margin-top: 15px;
  }
}
@media screen and (min-width: 1024px) {
  .register-wrapper {
    padding: 3rem;
  }
  form {
    margin-top: 2em;
  }
  .button-wrapper {
    margin-top: 2em;
  }
}
</style>