<template>
  <div id="navbar">
    <div class="home-layout-navbar mr-4 ml-3">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-form>
          <label class="sr-only" for="inline-form-input-username">Username</label>
          <b-input-group prepend="Search" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username"></b-form-input>
          </b-input-group>
        </b-form>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            
            <b-button pill class="mx-5" variant="info">
              <i class="fas fa-bell"></i>
              <b-badge pill variant="dark mx-1">3</b-badge>
            </b-button>

            <b-avatar variant="info" src="https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"></b-avatar>
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Dashboard</b-dropdown-item>
              <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDashboard',
  computed: {
    isLogin () {
      return this.$store.state.main.isLogin
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('main/signOut')
    }
  }
}
</script>