<template>
  <div>
    <CheckoutContent />
  </div>
</template>

<script>
import CheckoutContent from '@/components/transaction/CheckoutContent.vue'
export default {
  name: 'CheckoutPage',
  components: {
    CheckoutContent
  },
  mounted() {
    this.checkIsLogin()
  },
  methods: {
    checkIsLogin () {
      this.$store.dispatch('main/checkIsLogin')
    }
  },
}
</script>
