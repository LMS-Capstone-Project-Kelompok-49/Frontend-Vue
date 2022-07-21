<template>
    <div class="card my-4 p-1" >
        <div class="card-body p-2" @click="toPage('DetailMaterialsDashboard', material.id)">
            <div class="d-flex justify-content-between list-card">
                <div class="text-left">
                    <i class="far fa-play-circle text-mx-blue-green"></i>
                    {{ material.title }}
                </div>
                <div>
                    Diposting {{ material.date }}
                </div>
                <div>
                    <i class="far fa-arrow-alt-circle-right text-mx-blue-green"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OtherMaterial',
    props: {
        material: {
            type: Object
        }
    },
    methods: {
        toPage (routeName, CourseID) {
            this.$router.push({ name: routeName, params: { id: 1, materialId: CourseID } })
        }
    },
}
</script>

<style scoped>
.card:hover {
    background-color: #e2e2e2;
    color: black;
}
* {
    font-size: 16px;
}
.sub {
    font-size: 12px;
    color: #999898;
}
</style>