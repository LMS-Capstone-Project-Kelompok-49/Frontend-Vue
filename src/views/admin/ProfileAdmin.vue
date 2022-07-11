<template>
  <div class="container-fluid d-flex-column">
      <ProfileFormAdmin />
  </div>
</template>

<script>
import ProfileFormAdmin from '@/components/adminpage/ProfileFormAdmin.vue'
export default {
  name: 'ProfileAdmin',
  components: {
    ProfileFormAdmin,
  }
}
</script>