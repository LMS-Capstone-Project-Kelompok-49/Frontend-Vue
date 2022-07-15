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
            <b-nav-item @click="toPage('Home')" class="mx-3 fw-semibold">Home</b-nav-item>
            <b-nav-item @click="toPage('CoursesPage')"  class="mx-3 fw-semibold">Courses</b-nav-item>
            <b-nav-item @click="toPage('ContactPage')" class="mx-3 fw-semibold">Contact</b-nav-item>
            <b-nav-item @click="toPage('RequestPage')" class="mx-3 fw-semibold">Request</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item @click="toPage('SearchPage')" class="pr-3 fw-semibold mr-2">
              <i class="fas fa-search text-mx-green"></i>
            </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav v-if="isLogin === false">
            <b-nav-item @click="toPage('LoginPage')" class="pr-3 fw-semibold">Login</b-nav-item>
            <b-button @click="toPage('RegisterPage')" variant="info" class="p-2 fw-semibold">Sign Up</b-button>
          </b-navbar-nav>

          <b-navbar-nav v-if="isLogin === true">
            <b-avatar variant="info" src="https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"></b-avatar>

            <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item :to="{ name: 'HomeDashboard' }" v-if="dataUser.role === 'User'">Dashboard</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'HomeAdmin' }" v-if="dataUser.role !== 'User'">Dashboard</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'TransactionsPage' }" v-if="dataUser.role === 'User'">Transaction</b-dropdown-item>
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
  name: 'NavbarItem',
  computed: {
    isLogin () {
      return this.$store.state.main.isLogin
    },
    dataUser () {
      return { role: this.$store.state.main.role, user: this.$store.state.main.user }
    }
  },
  mounted () {
    this.checkRole()
  },
  methods: {
    toPage (routeName) {
      this.$router.push({ name: routeName })
    },
    signOut () {
      this.$store.dispatch('main/signOut')
    },
    checkRole () {
      if(this.isLogin){
        console.log("true mint loginnya");
      }
    }
  }
}
</script>