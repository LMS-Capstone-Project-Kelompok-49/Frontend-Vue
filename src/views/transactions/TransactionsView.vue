<template>
  <div class="container-fluid px-5 mt-5">
    <h2 class="text-mx-green">Transaction</h2>
    <div class="card p-0">
        <div class="card-body">
            <TransactionCard v-for="n in 3" :key="n" />
        </div>
    </div>
  </div>
</template>

<script>
import TransactionCard from '@/components/transaction/CardTransaction.vue'
export default {
  name: 'TransactionsPage',
  components: {
    TransactionCard
  }
}
</script>
