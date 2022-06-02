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
                    <p class="card-text">Kamu akan mendapatkan sertifikat kursus yang kamu ikuti dengan gratis</p>
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
                    <p class="card-text">Tutor yang sangat berpengelaman akan membantu kegiatan pembelajaranmu</p>
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
                    <p class="card-text">Berbagai macam metode pembelajaran yang digunakan pada platform ini</p>
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