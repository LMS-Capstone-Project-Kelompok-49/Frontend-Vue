<template>
    <div class="title pt-5">
        <h1 class="titlecolor">Why we Learn</h1>
        <h1 class="titlecolor">at LearnITNow</h1>
        <p class="pt-4">Access that can be done anywhere with a variety of learning resources, ranging from learning videos, materials and classes with experienced mentors.</p>
        <b-button :to="{ name: 'RegisterPage' }" variant="info" class="p-2 mt-3 fw-semibold"> Try Now </b-button>
    </div>
</template>

<script>
export default {
  name: 'SecTitleItem'
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
</style>