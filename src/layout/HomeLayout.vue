<template>
  <div id="home-layout">
    <div class="home-layout-navbar">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-navbar-brand href="#">LearnITnow</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="m-auto">
            <b-nav-item href="#" class="mx-3">Home</b-nav-item>
            <b-nav-item href="#" class="mx-3">Programs</b-nav-item>
            <b-nav-item href="#" class="mx-3">Courses</b-nav-item>
            <b-nav-item href="#" class="mx-3">Contact</b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav>
            <b-nav-item href="#">Login</b-nav-item>
            <b-button variant="info" class="p-2">Sign Up</b-button>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    
    <div class="pages-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageLayout'
}
</script>