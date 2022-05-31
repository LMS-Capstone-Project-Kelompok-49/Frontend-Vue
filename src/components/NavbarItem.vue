<template>
  <div id="navbar">
    <div class="home-layout-navbar mr-4 ml-3">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-navbar-brand :to="{ name: 'Home' }">
          <div class="logo-image">
            <img src="../assets/images/logo.png" width="100px" />
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <b-navbar-nav class="m-auto">
            <b-nav-item :to="{ name: 'Home' }" class="mx-3 fw-semibold">Home</b-nav-item>
            <b-nav-item :to="{ name: 'ProgramPage' }" class="mx-3 fw-semibold">Programs</b-nav-item>
            <b-nav-item :to="{ name: 'CoursesPage' }" class="mx-3 fw-semibold">Courses</b-nav-item>
            <b-nav-item :to="{ name: 'ContactPage' }" class="mx-3 fw-semibold">Contact</b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'LoginPage' }" class="pr-3 fw-semibold">Login</b-nav-item>
            <b-button :to="{ name: 'RegisterPage' }" variant="info" class="p-2 fw-semibold">Sign Up</b-button>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem'
}
</script>