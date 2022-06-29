<template>
    <div class="card">
        <div class="card-body">
            <button class="btn btn-outline-success border-0 text-mx-blue-green hover-mx-green" type="button" @click="$router.go(-1)">
                <i class="fas fa-angle-left mr-2"></i>
                Back
            </button>
            <div class="d-flex justify-content-between my-4">
                <div class="d-flex">
                    <div class="text-mx-green">
                        <i class="fas fa-book icon-material icon"></i>
                    </div>
                    <div class="ml-4 w-100">
                        <label class="d-block title text-mx-green">UI & UX Design Mobile App</label>
                        <label class="d-block sub">
                            <i class="far fa-user mr-2"></i>
                            Hamidillah Ajie, S.Si, M.T
                        </label>
                    </div>
                </div>
                <div>
                    <button class="btn btn-info bg-mx-blue-green border-mx-green">
                        Request Mentoring
                    </button>
                </div>
            </div>
            <hr>
            <div class="my-4">
                <div class="embed-wrapper">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/NbcrLW1BsAA"
                        allowfullscreen
                        class="embed-item"
                    ></b-embed>
                </div>
                <div class="info-title">
                    Descriptions
                </div>
                <div class="info-sub">
                    UX (User Experience) adalah proses mendesain untuk mengembangkan kualitas produk berdasarkan human-first approach. 
                    Yang perlu diingat adalah, UX bukan tentang desain visual; namun terkait kemudahan, relevansi, dan efisiensi pemakaian suatu produk oleh user (pengguna produk).
                    Desainer akan memikirkan keinginan dan kebutuhan user saat menggunakan produk yang diciptakan.
                    Oh iya, penilaian pengalaman user mencakup seluruh aspek interaksi.
                    Mulai dari aspek interaksi dengan perusahaan, layanan, struktur desain, hingga navigasi penggunaan produk.
                    Jadi, UX bukan sekedar berpatokan pada ulasan dan penilaian dari user.
                </div>
            </div>
            <div class="my-4">
                <div class="other-title">
                    Other’s Materials
                </div>
                <div>
                    <OtherMaterial v-for="n in  6" :key="n" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OtherMaterial from '@/components/dashboard/OtherMaterials.vue'
export default {
    name: 'DetailMaterial',
    components: {
        OtherMaterial
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #D1D5DB;
    border-radius: 12px;
    font-size: 1em;
    padding: 0px 24px 10px 24px;
}
.icon {
    font-size: .9em;
}
.title {
    font-size: .8em;
    font-weight: 600;
}
.sub {
    color: #999898;
    font-size: .5em;
}
hr {
    border: 2px solid #00AFB9;
}
.info-title {
    font-size: .5em;
    color: #999898;
}
.info-sub {
    font-size: .5em;
    margin-top: 1em;
}
.embed-wrapper {
    width: 100%;
    height: 550px;
}
.embed-item {
    height: 500px;
}
.other-title {
    font-size: .9em;
    font-weight: 600;
}
</style>