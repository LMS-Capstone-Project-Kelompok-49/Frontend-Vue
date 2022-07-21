<template>
    <div class="container my-4" @click="toPage('DetailMaterialsAdmin', courseid, material.id )">
            <div>
                <div class="card card-material">
                    <div class="card-body d-flex justify-content-between">
                        <div>
                            <b-avatar class="bg-mx-blue-green">
                                <i class="fas fa-book icon-material"></i>
                            </b-avatar>
                        </div>
                        <label class="card-title">
                            {{ material.title }}
                        </label><br>
                        <label class="card-subtitle">
                            {{ material.date }}
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
    props: {
        material: {
            type: Object
        },
        courseid: {
            type: Number
        }
    },
    methods: {
        toPage (routeName, idCourse, idMaterial) {
            this.$router.push({ name: routeName, params: { id: idCourse, materialId: idMaterial } })
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