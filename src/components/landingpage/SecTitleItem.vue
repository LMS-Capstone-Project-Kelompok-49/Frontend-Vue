<template>
    <div class="title pt-5">
        <h1 class="titlecolor">Why we Learn</h1>
        <h1 class="titlecolor">at LearnITNow</h1>
        <p class="pt-4">Akses yang dapat dilakukan dimanapun dengan berbagai sumber pembelajaran, mulai dari video pembelajaran, materi dan kelas bersama mentor yang berpengalaman.</p>
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