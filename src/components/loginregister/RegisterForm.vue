<template>
  <div class="mt-5 p-5">
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
    
		<form class="mt-4 w-lg-50" autocomplete="off" @submit="Register">

      <div class="form-group">
				<h5 for="NameInput" class="font-weight-bold">Name</h5>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<div class="input-group-text bg-white">
							<i class="fas fa-user"></i>
						</div>
					</div>
					<input v-model="form.name" type="text" class="form-control" id="NameInput" placeholder="Your Name" required>
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
					<input v-model="form.email" type="email" class="form-control" id="EmailInput" placeholder="Your Email" required>
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
					<input v-model="form.password" type="password" class="form-control" id="PasswordInput" placeholder="Your Password" required>
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

      <div class="mt-5 row">
        <div class="col-sm-12 col-md-3">
          <button type="button" class="btn btn-outline-dark btn-block rounded-sm   p-3" @click="getBack">Back</button>
        </div>
        <div class="col-sm-12 col-md-9">
          <button v-if="!loading" type="submit"  class="btn btn-primary btn-block rounded-pill p-3 btn-submit" >Sign in</button>
          <button v-if="loading" type="button"  class="btn btn-primary btn-block rounded-pill	 p-3 btn-submit" disabled>
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
      loading: false
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
      if (this.form.password.length >= 8){
        if(this.form.password === this.form.confirmPassword){
          this.message = ''
          this.$store.dispatch('register/registerPost', this.form)
        } else {
          this.message = 'Credential Password do not match'
        }
      } else {
        this.message = 'Password must 8 character'
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
.btn-submit {
	background-color: #00AFB9;
}
</style>