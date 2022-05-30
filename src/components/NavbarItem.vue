<template>
    <div id="navbar">
        <div class="home-layout-navbar mr-4 ml-3">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-navbar-brand href="/">
          <div class="logo-image">
            <img src="../assets/images/logo.png" width="100px" />
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="m-auto">
            <b-nav-item href="/" class="mx-3 fw-semibold">Home</b-nav-item>
            <b-nav-item href="programs" class="mx-3 fw-semibold">Programs</b-nav-item>
            <b-nav-item href="courses" class="mx-3 fw-semibold">Courses</b-nav-item>
            <b-nav-item href="contact" class="mx-3 fw-semibold">Contact</b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav>
            <b-nav-item href="login" class="pr-3 fw-semibold">Login</b-nav-item>
            <b-button variant="info" class="p-2 fw-semibold" href="register">Sign Up</b-button>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  components: {
  }
}
</script>