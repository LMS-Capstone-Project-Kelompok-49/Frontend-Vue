<template>
  <div class="mt-5 p-5">
		<h1>Log in to your account</h1>
		<label class="font-weight-bold text-muted">
			Welcome back! Please enter your details.
		</label>

    <div v-if="loginMessage" class="alert alert-danger" role="alert">
      {{ loginMessage }}
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
					<input v-model="form.email" type="email" class="form-control" id="EmailInput" placeholder="Your Email" required height="250px">
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
					<input v-model="form.password" type="password" class="form-control" id="PasswordInput" placeholder="Your Password" required>
				</div>
			</div>

      <button v-if="!loading" type="submit" class="btn-submit btn btn-primary btn-block rounded-pill p-3 my-4">Sign in</button>
      <button v-if="loading" type="button" class="btn-submit btn btn-primary btn-block rounded-pill	 p-3" disabled>
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
        name: '',
        email: '',
      },
      loading: false
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
      console.log("aman");
      this.$store.dispatch('main/loginCheck', this.form)
      setTimeout(() => (this.loading = !this.loading), 6000)
    },
    emptyLoginMessage (){
      this.$store.dispatch('main/emptyLoginMessage')
    }
  }
}
</script>

<style scoped>
.btn-submit {
  background-color: #00AFB9;
  border-color: #00AFB9;
}
input {
  height: 50px;
}
</style>