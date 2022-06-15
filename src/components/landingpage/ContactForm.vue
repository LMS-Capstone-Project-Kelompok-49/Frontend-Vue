<template>
  <div>
    <form>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="firstName" class="font-weight-normal">First Name</h5>
            <div class="input-group mb-2">
              <input type="text" class="form-control" id="firstName" placeholder="Type your first name" required>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="lastName" class="font-weight-normal">Last Name</h5>
            <div class="input-group mb-2">
              <input type="text" class="form-control" id="lastName" placeholder="Type your last name" required height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="emailInput" class="font-weight-normal">Email Address</h5>
            <div class="input-group mb-2">
              <input type="email" class="form-control" id="emailInput" placeholder="Type your email" required height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group my-3">
            <h5 for="phoneInput" class="font-weight-normal">Phone Number</h5>
            <div class="input-group mb-2">
              <input type="text" class="form-control" id="phoneInput" placeholder="Type your phone number" required height="250px">
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12">
          <div class="form-group my-3">
            <h5 for="messageInput" class="font-weight-normal">Message</h5>
            <div class="input-group mb-2">
              <textarea name="comment" id="messageInput" class="form-control" rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-success px-5 py-2 btn-form">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
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