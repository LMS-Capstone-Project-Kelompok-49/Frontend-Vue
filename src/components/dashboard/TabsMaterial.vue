<template>
    <div class="container my-4" @click="toPage('DetailMaterialsDashboard', courseid ,material.id)">
        <div class="d-flex">
            <div>
                <b-avatar class="bg-mx-blue-green" size="3em">
                    <i class="fas fa-book icon-material"></i>
                </b-avatar>
            </div>
            <div class="ml-4 w-100">
                <div class="card card-material">
                    <div class="card-header p-3">
                        <label class="card-title">
                            {{ material.title }}
                        </label><br>
                        <label class="card-subtitle">
                            {{ mentor }} posts new material
                        </label>
                        <label class="card-subtitle ml-3">
                            {{ material.date }}
                        </label>
                    </div>
                    <div class="card-body">
                        <div class="text">
                            {{ material.message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsMaterial',
    props: {
        material: {
            type: Object
        },
        mentor: {
            type: String
        },
        courseid: {
            type: Number
        }
    },
    methods: {
        toPage (routeName, idCourse ,CourseID) {
            this.$router.push({ name: routeName, params: { id: idCourse, materialId: CourseID } })
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