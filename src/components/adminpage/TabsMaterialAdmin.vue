<template>
    <div class="container my-4" @click="toPage('DetailMaterialsAdmin')">
            <div>
                <div class="card card-material">
                    <div class="card-body d-flex justify-content-between">
                        <div>
                            <b-avatar class="bg-mx-blue-green">
                                <i class="fas fa-book icon-material"></i>
                            </b-avatar>
                        </div>
                        <label class="card-title">
                            Materi Pertemuan 12
                        </label><br>
                        <label class="card-subtitle">
                            Last Update April 21, 2022 at 11:59 PM
                        </label>
                        <i class="far fa-edit"></i>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'TabsMaterialAdmin',
    methods: {
        toPage (routeName) {
            this.$router.push({ name: routeName, params: { id: 1, materialId: 4212 } })
        }
    },
}
</script>

<style scoped>
.icon-material {
    font-size: 1.5em;
}
.card-material {
    background-color: #FCFEFE;
}
.card-header {
    line-height: 10px;
}
.card-header .card-title {
    font-size: 1.2em;
    font-weight: 600;
}
.card-header .card-subtitle {
    color: #999898;
    font-size: .8em;
}
.card-body .text {
    font-size: .9em;
}
</style>