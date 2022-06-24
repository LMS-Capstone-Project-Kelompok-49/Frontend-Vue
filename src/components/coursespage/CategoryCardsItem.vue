<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5">Browse By Category</h2>
        <div class="d-flex text-center justify-content-center align-items-center">
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="d-flex align-items-center m-2">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
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