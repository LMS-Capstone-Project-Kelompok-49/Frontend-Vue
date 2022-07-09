<template>
  <div class="main-dashboard">
      <MainAdminContent />
  </div>
</template>

<script>
import MainAdminContent from "@/components/adminpage/MainAdminContent.vue";

export default {
  name: 'MainAdmin',
  components: {
      MainAdminContent,
  }
}
</script>

<style scoped></style>