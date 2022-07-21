<template>
    <div class="card">
        <b-img thumbnail fluid :src="image" alt="Image 1"></b-img>
    </div>
</template>

<script>
export default {
    name: 'CertificateCard',
    props: {
        image: String
    }
}
</script>