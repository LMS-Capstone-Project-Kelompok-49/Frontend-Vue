<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5">Our Learning Opportunity</h2>
        <div class="d-flex text-center justify-content-center">
            <div class="card text-bg-light border-light text-center mb-3 mr-5" style="max-width: 18rem;">
                <div class="card-body">
                    <a class="logo m-3" href="/">
                        <div class="logo-image">
                            <img :src="require('@/assets/images/logo_certificate.png')" width="50px" />
                        </div>
                    </a>
                    <h5 class="card-title">Certificate</h5>
                    <p class="card-text">You will get a certificate of the course you took for free and an official certificate.</p>
                </div>
            </div>
            <div class="card text-bg-light border-light text-center mb-3 mr-5 ml-5" style="max-width: 18rem;">
                <div class="card-body">
                    <a class="logo m-3" href="/">
                        <div class="logo-image">
                            <img :src="require('@/assets/images/logo_tutoring.png')" width="50px" />
                        </div>
                    </a>
                    <h5 class="card-title">Expert Tutoring</h5>
                    <p class="card-text">A very resourceful and trusted tutor who will help your learning activities here.</p>
                </div>
            </div>
            <div class="card text-bg-light border-light text-center mb-3 ml-5" style="max-width: 18rem;">
                <div class="card-body">
                    <a class="logo m-3" href="/">
                        <div class="logo-image">
                            <img :src="require('@/assets/images/logo_methods.png')" width="50px" />
                        </div>
                    </a>
                    <h5 class="card-title">Variety Methods</h5>
                    <p class="card-text">There are various learning methods that can be used on this platform and are easy to understand.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SecCardsItem'
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
</style>