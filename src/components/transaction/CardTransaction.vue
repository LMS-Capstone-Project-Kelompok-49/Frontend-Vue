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
                    {{ data.method }}
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Number of Virtual Account
                </div>
                <div>
                    {{ data.virtualAccout }}
                    <i class="fas fa-clipboard ml-2"></i>
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Total Payment
                </div>
                <div>
                    Rp. {{ data.total }}
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Payment Due
                </div>
                <div class="text-danger" v-if="data.status === 0">
                    {{ data.due }}
                </div>
                <div class="text-success" v-if="data.status === 1">
                    {{ data.due }}
                </div>
            </div>
            <div class="my-auto">
                <div class="text-muted">
                    Status
                </div>
                <div class="text-danger" v-if="data.status === 0">
                    Need to Pay
                </div>
                <div class="text-success" v-if="data.status === 1">
                    Success
                </div>
            </div>
            <div>
                <button class="btn btn-outline-info bg-mx-green border-mx-green text-white" v-if="data.status === 0">
                    How To Pay
                </button>
                <button class="btn btn-info bg-mx-green border-mx-green text-white" disabled v-if="data.status === 1">
                    Detail Payment
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransactionCard',
    props: {
        data: {
            type: Object
        }
    },
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