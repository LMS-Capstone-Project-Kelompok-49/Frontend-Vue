<template>
  <div class="container">
    <PaymentCard />
  </div>
</template>

<script>
import PaymentCard from '@/components/transaction/CardPayment.vue'
export default {
  name: 'PayPage',
  components: {
    PaymentCard
  }
}
</script>
