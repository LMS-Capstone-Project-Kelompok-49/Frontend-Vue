<template>
  <div class="container-fluid px-5 mt-5">
    <h2 class="text-mx-green">Transaction</h2>
    <div class="card p-0">
        <div class="card-body">
            <TransactionCard v-for="(value, index) in transactionItem" :key="index" :data="value" />
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
  },
  computed: {
    transactionItem () {
      return this.$store.state.main.transactions
    }
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.$store.dispatch('main/checkIsLogin')
    }
  },
}
</script>
