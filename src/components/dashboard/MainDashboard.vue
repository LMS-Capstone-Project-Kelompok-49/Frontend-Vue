<template>
  <div class="main-dashboard">
      <div class="welcome-dashboard pl-3 pt-3 pb-5">
          <h2 class="title pt-3 pl-4 pr-5">Welcome Back Lutfhi</h2>
          <h4 class="subtitle pl-4 pr-5">Kamu punya beberapa tugas yang harus diselesaikan hari ini!!!</h4>
      </div>
      <MainContent class="mt-5" />
  </div>
</template>

<script>
import MainContent from "@/components/dashboard/MainContent.vue";

export default {
  name: 'MainDashboard',
  components: {
      MainContent,
  }
}
</script>

<style scoped>
.welcome-dashboard {
    background: #00AFB9;
    border-radius: 12px;
    background-image: url("@/assets/images/bg_shadow_popup.png");
}
.title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #FFFFFF;
}
.subtitle{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #FFFFFF;
}
</style>