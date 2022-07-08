<template>
  <div class="container-fluid d-flex-column">
    <MainAdmin />
  </div>
</template>

<script>
import MainAdmin from "@/components/adminpage/MainAdmin.vue"

export default {
  name: 'HomeAdmin',
  components: {
    MainAdmin,
  }
}
</script>
