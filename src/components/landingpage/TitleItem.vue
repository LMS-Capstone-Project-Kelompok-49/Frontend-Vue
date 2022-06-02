<template>
    <div class="title pt-5">
        <h1 class="titlecolor">Easy Learning Anywhere</h1>
        <h1 class="titlecolor">With The Experts</h1>
        <p class="pt-4">Tingkatkan kemampuan di bidang IT bersama ahlinya.</p>
        <p>Berbagai macam jenis course yang bisa didapatkan</p>
        <p>hanya di sini</p>
        <b-button :to="{ name: 'RegisterPage' }" variant="info" class="p-2 mt-3 fw-semibold"> Try Now </b-button>
        <button type="button" class="btn btn-outline-primary p-2 mt-3 ms-3">Learn More</button>
    </div>
</template>

<script>
export default {
  name: 'TitleItem'
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
</style>