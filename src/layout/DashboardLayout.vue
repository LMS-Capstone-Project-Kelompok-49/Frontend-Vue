<template>
  <div id="dashboard">
    <nav class="sidebar open" :class="{ 'close': close }">
      <header>
        <div class="image-text justify-content-center">
            <span class="image">
                <img src="../assets/images/logofooter.png" alt="">
            </span>
        </div>
        <i class='bx bx-chevron-right toggle' @click="close = !close"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-link">
                <a @click="toPage('HomeDashboard')">
                    <i class='bx bxs-dashboard icon' ></i>
                    <span class="text nav-text">Dashboard</span>
                </a>
            </li>

            <li class="nav-link">
                <a @click="toPage('CoursesDashboard')">
                    <i class='bx bx-task icon' ></i>
                    <span class="text nav-text">Course</span>
                </a>
            </li>

            <!-- <li class="nav-link">
                <a href="#">
                    <i class='bx bx-message-rounded-dots icon' ></i>
                    <span class="text nav-text">Chats</span>
                </a>
            </li> -->

            <li class="nav-link">
                <a @click="toPage('CertificateDashboard')">
                    <i class='bx bx-certification icon'></i>
                    <span class="text nav-text">Certificate</span>
                </a>
            </li>

            <!-- <li class="nav-link">
                <a href="#">
                    <i class='bx bx-cog icon'></i>
                    <span class="text nav-text">Setting</span>
                </a>
            </li> -->
          </ul>
        </div>

        <div class="bottom-content">
          <li>
            <a @click="signOut">
              <i class='bx bx-power-off icon' ></i>
              <span class="text nav-text">Sign Out</span>
            </a>
          </li>
        </div>
      </div>

    </nav>

    
    <section class="home">
      <NavbarDashboard />
      <div class="text">
        <router-view></router-view>
      </div>
    </section>

  </div>
</template>

<script>
import NavbarDashboard from "@/components/dashboard/NavBar.vue";
export default {
  name: 'DashboardTemplate',
  components: {
    NavbarDashboard,
  },
  data() {
    return {
      close: false
    }
  },
  mounted() {
    this.checkIsLogin()
  },
  methods: {
    toPage (routeName) {
      this.$router.push({ name: routeName })
    },
    signOut () {
      this.$store.dispatch('main/signOut')
    },
    checkIsLogin () {
      const loginLogic = this.$store.state.main.isLogin
      if(loginLogic) {
        const role = this.$store.state.main.role
        if(role === 'User'){
          console.log("berhasil Masuk");
        } else {
          this.$router.push({ name: 'Home' })
        }   
      } else {
        this.$router.push({ name: 'LoginPage' })
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  min-height: 100vh;
  background-color: #E4E9F7;
  transition: all 0.3s ease;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: #00899F;
  transition: all 0.3s ease;
  z-index: 100;  
}
.sidebar.close{
  width: 88px;
}
.sidebar li{
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
}
.sidebar header .image,
.sidebar .icon{
  min-width: 60px;
  border-radius: 6px;
}

.sidebar .icon{
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar .text,
.sidebar .icon{
  color: #F4F5FF;
  transition: all 0.2s ease;
}

.sidebar .bx-search {
  color: #00899F;
}

.sidebar .text{
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .text{
  opacity: 0;
}
/* =========================== */

.sidebar header{
  position: relative;
}

.sidebar header .image-text{
  display: flex;
  align-items: center;
}
.sidebar header .logo-text{
  display: flex;
  flex-direction: column;
}
header .image-text .name {
  margin-top: 2px;
  font-size: 18px;
  font-weight: 600;
}

header .image-text .profession{
  font-size: 16px;
  margin-top: -2px;
  display: block;
}

.sidebar header .image{
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img{
  width: 100%;
}

.sidebar header .toggle{
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);
  height: 25px;
  width: 25px;
  background-color: #C9FBED;
  color: #00899F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.sidebar.close .toggle{
  transform: translateY(-50%) rotate(0deg);
  top: 300%;
}

.sidebar .menu{
  margin-top: 40px;
}

.sidebar li.search-box{
  border-radius: 6px;
  background-color: #F6F5FF;
  cursor: pointer;
  transition: all 0.4s ease;
}

.sidebar li.search-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: #F6F5FF;
  color: #F4F5FF;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: all 0.4s ease;
}
.sidebar li a{
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar li a:hover{
  background-color: #C9FBED;
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text{
  color: #00899F;
}

.sidebar .menu-bar{
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar{
  display: none;
}
.sidebar .menu-bar .mode{
  border-radius: 6px;
  background-color: #F6F5FF;
  position: relative;
  transition: all 0.4s ease;
}

.menu-bar .mode .sun-moon{
  height: 50px;
  width: 60px;
}

.mode .sun-moon i{
  position: absolute;
}
.mode .sun-moon i.sun{
  opacity: 0;
}

.menu-bar .bottom-content .toggle-switch{
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}
.toggle-switch .switch{
  position: relative;
  height: 22px;
  width: 40px;
  border-radius: 25px;
  background-color: #DDD;
  transition: all 0.4s ease;
}

.switch::before{
  content: '';
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: #FFF;
  transition: all 0.3s ease;
}

.home{
  position: absolute;
  top: 0;
  top: 0;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  transition: all 0.4s ease;
}
.home .text{
  font-size: 30px;
  font-weight: 500;
  padding: 12px 60px;
}
.sidebar.close ~ .home{
  left: 78px;
  height: 100vh;
  width: calc(100% - 78px);
}
</style>