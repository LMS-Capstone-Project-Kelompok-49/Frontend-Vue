<template>
    <div class="cards my-5">
        <h3 class="text-dark">Browse By Category</h3>
        <div class="d-flex text-center align-items-center flex-wrap">
            <b-button variant="outline-primary" class="border-mx-green btn-category d-flex align-items-center m-1">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="border-mx-green btn-category d-flex align-items-center m-1">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="border-mx-green btn-category d-flex align-items-center m-1">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="border-mx-green btn-category d-flex align-items-center m-1">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            <b-button variant="outline-primary" class="border-mx-green btn-category d-flex align-items-center m-1">
                <img :src="require('@/assets/images/logo_category.png')" alt="...">
                <h5 class="card-title m-4">Design</h5>
            </b-button>
            
        </div>
        <!-- <div class="row">
            <div class="col-sm-12 col-md-2 mt-4" v-for="n in 8" :key="n">
                <b-button variant="outline-primary" class="btn-category d-flex align-items-center">
                    <img :src="require('@/assets/images/logo_category.png')" alt="...">
                    <h5 class="card-title m-4">Design</h5>
                </b-button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'CategoryCardsItem'
}
</script>

<style scoped>
.btn-category {
    height: 4em;
    color: #999898;
}
.btn-category:hover {
    background-color: #00AFB9;
    color: white;
}
</style>