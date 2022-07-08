<template>
  <div class="main-dashboard">
      <MainContent class="mt-5" />
  </div>
</template>

<script>
import MainContent from "@/components/dashboard/MainContent.vue";

export default {
  name: 'MainAdmin',
  components: {
      MainContent,
  }
}
</script>

<style scoped></style>