<template>
  <div class="container">
    <form @submit="toPage(getCourses.id)" action="">
        <div class="row mt-5">
            <div class="col-sm-12 col-md-8 col-lg-8">
                <div class="text-mx-green text-title">
                    Payment Method
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <div>
                            <div class="sub-title">
                                Bank Transfer
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/bca.png')" class="" width="60px" />
                                            <label class="ml-2">BCA Virtual Account</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio name="some-radios" value="A" size="lg" required></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/mandiri.png')" class="" width="60px" />
                                            <label class="ml-2">Mandiri Virtual Account</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/danamon.png')" class="" width="60px" />
                                            <label class="ml-2">Danamon Virtual Account</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="sub-title">
                                E-Wallets
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/gopay.png')" class="" width="60px" />
                                            <label class="ml-2">Gopay</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/spay.png')" class="" width="60px" />
                                            <label class="ml-2">ShopeePay</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/dana.png')" class="" width="60px" />
                                            <label class="ml-2">Dana</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-2">
                                <div class="card-body p-2">
                                    <div class="d-flex">
                                        <div class="text-left w-50 my-auto">
                                            <img :src="require('@/assets/images/checkout/ovo.png')" class="" width="60px" />
                                            <label class="ml-2">Ovo</label>
                                        </div>
                                        <div class="text-right w-50">
                                            <b-form-radio  name="some-radios" value="A" size="lg" disabled></b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="text-mx-green text-title">
                    Order Summary
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <div>
                            <div class="row">
                                <div class="col-4">
                                    <img :src="require('@/assets/images/Rectangle4486.png')"/>
                                </div>
                                <div class="col-8">
                                    <div class="course-title">
                                        {{ getCourses.title }}
                                    </div>
                                    <div class="course-price">
                                        Rp {{ getCourses.price }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="d-flex justify-content-between">
                                <div class="text-price">
                                    Subtotal Product
                                </div>
                                <div class="text-right">
                                    Rp {{ getCourses.price }}
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mt-2">
                                <div class="text-price">
                                    Discount
                                </div>
                                <div class="text-right">
                                    {{ getCourses.discount }}%
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    Order Total
                                </div>
                                <div class="text-right text-mx-blue-green">
                                    <b>Rp {{ getCourses.price-(getCourses.price*getCourses.discount/100) }}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="btn btn-info btn-block bg-mx-green border-mx-green" type="submit">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'CheckoutContent',
    computed: {
        getCourses () {
            const id = this.$route.params.id
            const detail = this.$store.state.home.courses.filter(function(value){
                return value.id === id
            })
            return detail[0]
        }
    },
    methods: {
        toPage () {
            event.preventDefault()
            this.$router.push({ name: 'PayPage', params: { code: 4212 } })
        }
    },
}
</script>

<style scoped>
.text-title {
    font-size: 1.5em;
}
.sub-title {
    font-weight: 900;
    font-size: 1.3em;
}
.course-title {
    font-size: 1em;
    font-weight: bold;
}
.course-price {
    font-size: .8em;
    color: #999898;
}
.text-price {
    color: #999898;
}
</style>