<template>
  <div class="container-fluid d-flex-column">
      <ProfileForm />
  </div>
</template>

<script>
import ProfileForm from '@/components/dashboard/ProfileForm.vue'
export default {
  name: 'ProfileDashboard',
  components: {
    ProfileForm
  }
}
</script>