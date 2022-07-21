<template>
  <div class="p-3 login-wrapper">
		<h1>Log in to your account</h1>
		<label class="font-weight-bold text-muted">
			Welcome back! Please enter your details.
		</label>

    <div v-if="loginMessage" class="alert alert-danger" role="alert">
      {{ loginMessage }}
    </div>

    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>

    <form class="mt-4 w-lg-50" autocomplete="off" @submit="login">

			<div class="form-group my-4">
				<h5 for="EmailInput" class="font-weight-bold">Email</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-envelope"></i>
						</div>
					</div>
					<input v-model="form.email" type="text" class="form-control" id="EmailInput" placeholder="Your Email" height="250px">
				</div>
			</div>

			<div class="form-group my-4">
				<h5 for="PasswordInput" class="font-weight-bold">Password</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-lock"></i>
						</div>
					</div>
					<input v-model="form.password" type="password" class="form-control" id="PasswordInput" placeholder="Your Password" >
				</div>
			</div>

      <button v-if="!loading" type="submit" class="btn-submit btn btn-info btn-block rounded-pill bg-mx-green border-mx-green p-3 my-4">Sign in</button>
      <button v-if="loading" type="button" class="btn-submit btn btn-info btn-block rounded-pill bg-mx-green border-mx-green	 p-3" disabled>
        <b-spinner label="Spinning"></b-spinner>
      </button>
		</form>

    <div class="text-center">
      <span>Don’t have an account? <b><router-link :to="{ name: 'RegisterPage' }" class="text-reset">Sign Up </router-link></b> </span>
    </div>

	</div>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      message: '',
      form: {
        email: '',
        password: ''
      },
      loading: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ // eslint-disable-line
    }
  },
  computed: {
    loginMessage () {
      return this.$store.state.main.loginMessage
    }
  },
  mounted () {
    this.emptyLoginMessage()
  },
  methods: {
    login () {
      event.preventDefault()
      this.emptyLoginMessage()
      this.loading = !this.loading
      if (this.form.email !== ''){
        if(!this.reg.test(this.form.email)){
          this.message = 'Email must be valid email'
        } else {
          if(this.form.password !== '') {
            // this.$store.dispatch('main/loginCheck', this.form)
            this.$store.dispatch('main/checkDummyLogin', this.form)
          } else {
            this.message = 'Password must be filled'
          }
        }
      }else {
        this.message = 'Email must be filled'
      }
      setTimeout(() => (this.loading = !this.loading), 6000)
    },
    emptyLoginMessage (){
      this.$store.dispatch('main/emptyLoginMessage')
    }
  }
}
</script>

<style scoped>
input {
  height: 50px;
}
@media screen and (min-width: 1024px) {
  .login-wrapper {
    margin-top: 15%;
  }
}
</style>