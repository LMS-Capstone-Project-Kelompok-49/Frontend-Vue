<template>
    <div>
        <div class="row mt-4">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div>
                    <b-input-group >
                        <b-form-input placeholder="Search Notification"></b-form-input>
                        <template #prepend>
                        <b-input-group-text class="bg-white">
                            <i class="fas fa-search"></i>
                        </b-input-group-text>
                        </template>
                    </b-input-group>
                </div>
            </div>
        </div>
        <div class="main-content mt-4">
            <div v-for="n in 4" :key="n">
                <NotificationListAdmin />
            </div>
        </div>
    </div>
</template>

<script>
import NotificationListAdmin from '@/components/adminpage/NotificationListAdmin.vue'
export default {
  name: 'NotificationAdmin',
  components: {
    NotificationListAdmin
  },
}
</script>

<style scoped>
.main-content {
    border: 1px solid #D1D5DB;
    padding: 1.2em;
    border-radius: 12px;
}
</style>