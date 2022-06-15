<template>
  <!-- <div id="navbar">
    <div class="home-layout-navbar mr-4 ml-3">
      <b-navbar toggleable="lg" variant="faded" type="light" class="p-4">
        <b-navbar-brand :to="{ name: 'Home' }">
          <div class="logo-image">
            <img src="../../assets/images/logo.png" width="100px" />
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <b-navbar-nav class="m-auto">
            <b-nav-item :to="{ name: 'Home' }" class="mx-3 fw-semibold">Home</b-nav-item>
            <b-nav-item :to="{ name: 'ProgramPage' }" class="mx-3 fw-semibold">Programs</b-nav-item>
            <b-nav-item :to="{ name: 'CoursesPage' }" class="mx-3 fw-semibold">Courses</b-nav-item>
            <b-nav-item :to="{ name: 'ContactPage' }" class="mx-3 fw-semibold">Contact </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'LoginPage' }" class="pr-3 fw-semibold">Login</b-nav-item>
            <b-button :to="{ name: 'RegisterPage' }" variant="info" class="p-2 fw-semibold">Sign Up</b-button>
          </b-navbar-nav>


        </b-collapse>
      </b-navbar>
    </div>
  </div> -->
  <nav class="sidebar open">
    <header>
        <div class="image-text">
            <span class="image">
                <!--<img src="logo.png" alt="">-->
            </span>

            <div class="text logo-text">
                <span class="name">Codinglab</span>
                <span class="profession">Web developer</span>
            </div>
        </div>

        <i class='bx bx-chevron-right toggle'></i>
    </header>

    <div class="menu-bar">
        <div class="menu">

            <li class="search-box">
                <i class='bx bx-search icon'></i>
                <input type="text" placeholder="Search...">
            </li>

            <ul class="menu-links">
                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-home-alt icon' ></i>
                        <span class="text nav-text">Dashboard</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-bar-chart-alt-2 icon' ></i>
                        <span class="text nav-text">Revenue</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-bell icon'></i>
                        <span class="text nav-text">Notifications</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-pie-chart-alt icon' ></i>
                        <span class="text nav-text">Analytics</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-heart icon' ></i>
                        <span class="text nav-text">Likes</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#">
                        <i class='bx bx-wallet icon' ></i>
                        <span class="text nav-text">Wallets</span>
                    </a>
                </li>

            </ul>
        </div>

        <div class="bottom-content">
            <li class="">
                <a href="#">
                    <i class='bx bx-log-out icon' ></i>
                    <span class="text nav-text">Logout</span>
                </a>
            </li>
        </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'SideBarDashboard'
}
</script>
