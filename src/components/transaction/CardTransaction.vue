<template>
    <div class="assignment my-4">
        <div class="d-flex justify-content-around">
            <div class="my-auto">
                <img :src="require('@/assets/images/checkout/bca.png')" class="" width="60px" />
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Metode Payment
                </div>
                <div>
                    BCA Virtual Account
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Number of Virtual Account
                </div>
                <div>
                    807771234567898765
                    <i class="fas fa-clipboard ml-2"></i>
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Total Payment
                </div>
                <div>
                    Rp. 520.000
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Payment Due
                </div>
                <div class="text-danger">
                    26 June, 12:18 PM
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Status
                </div>
                <div class="text-primary">
                    Need to Pay
                </div>
            </div>
            <div>
                <button class="btn btn-outline-info bg-mx-green border-mx-green text-white">
                    Detail
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransactionCard',
    methods: {
        toPage (routeName) {
            this.$router.push({ name: routeName, params: { id: 1, code: 2 } })
        }
    },
}
</script>

<style scoped>
.assignment {
    font-size: .9em;
}
</style>