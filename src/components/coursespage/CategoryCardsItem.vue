<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5">Our Learning Opportunity</h2>
        <div class="d-flex text-center justify-content-center align-items-center">
            <div class="card bg-dark text-white mr-5 border-light">
                <img :src="require('@/assets/images/image_card.jpg')" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title m-4">Frontend</h5>
                </div>
            </div>
            <div class="card bg-dark text-white ml-5 mr-5 border-light">
                <img :src="require('@/assets/images/image_card.jpg')" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title m-4">Backend</h5>
                </div>
            </div>
            <div class="card bg-dark text-white mr-5 ml-5 border-light">
                <img :src="require('@/assets/images/image_card.jpg')" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title m-2">Quality Engineer</h5>
                </div>
            </div>
            <div class="card bg-dark text-white ml-5 border-light">
                <img :src="require('@/assets/images/image_card.jpg')" class="card-img" alt="...">
                <div class="card-img-overlay m-4">
                    <h5 class="card-title">UI/UX</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CategoryCardsItem'
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
</style>