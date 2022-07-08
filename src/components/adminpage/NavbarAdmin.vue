<template>
  <div id="navbar">
    <div class="home-layout-navbar mr-4 ml-3">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-form>
          <b-input-group class="mt-3">
            <b-form-input disabled></b-form-input>
            <template #prepend>
            <b-input-group-text class="bg-white">
                <i class="fas fa-search"></i>
            </b-input-group-text>
            </template>
          </b-input-group>
        </b-form>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">

            <button type="button" class="btn btn-info position-relative mx-5 rounded-circle" @click="toPage('NotificationDashboard')">
              <i class="fas fa-bell"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            <b-avatar variant="info" src="https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"></b-avatar>
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item @click="toPage('ProfileDashboard')">Profile</b-dropdown-item>
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
  name: 'NavbarAdmin',
  computed: {
    isLogin () {
      return this.$store.state.main.isLogin
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('main/signOut')
    },
    toPage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>