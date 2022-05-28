<template>
  <div id="home-layout">
    <div class="home-layout-navbar">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>BootstrapVue</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Navbar text</b-nav-text>
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