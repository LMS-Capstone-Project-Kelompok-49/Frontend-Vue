<template>
    <div class="card">
        <div class="card-body">
            <button class="btn btn-outline-success border-0 text-mx-blue-green hover-mx-green" type="button" @click="$router.go(-1)">
                <i class="fas fa-angle-left mr-2"></i>
                Back
            </button>
            <div class="d-flex my-4">
                <div class="text-mx-green">
                    <i class="fas fa-book icon-material icon"></i>
                </div>
                <div class="ml-4 w-100">
                    <label class="d-block title text-mx-green">UI & UX Design Mobile App</label>
                    <label class="d-block sub">Due April 30, 2022 11:59 PM</label>
                    <label class="d-block point">No Points</label>
                </div>
            </div>
            <hr>
            <div class="my-4">
                <div class="info-title">
                    Instructions
                </div>
                <div class="info-sub">
                    Tugas task 1 materi mobile app, tugas mahasiswa sekalian adalah cari satu buah permasalahan pada mobile app dan analisasa apa permsalahannya. Setelah itu coba lakukan redesign dari mobile app tersebut. Format Pengumpulan terlampir di bawah ini
                </div>
            </div>
            <div>
                <div class="info-title">
                    Reference Materials
                </div>
                <div>
                    <AssignmentMaterial />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AssignmentMaterial from '@/components/dashboard/AssignmentMaterial'
export default {
    name: 'AssignmentInfo',
    components: {
        AssignmentMaterial
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
.point {
    font-size: .5em;
    font-weight: bolder;
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
</style>