<template>
    <div class="card mt-4">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img :src="require('@/assets/images/logo_mycourse.png')" />
                </div>
                <div class="col-8">
                    <div class="course-title-desc mt-2">
                        <label class="title">{{ course.title }}</label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-around text-center course-desc text-muted my-3">
                <div>
                    <label>
                        <i class="fas fa-users mr-2 my-auto"></i>
                        {{ course.members.length }} Members
                    </label>
                </div>
                <div>
                    <i class="fas fa-list mr-2"></i>
                    <label>{{ course.materials.length }} Material</label>
                </div>
            </div>
            <div class="course-progess my-4">
                <div class="d-flex">
                    <span class="me-2">Code Course</span>
                    <i class="far fa-copy me-2"></i>
                    <span>3XPYSKAI697YZA</span>
                </div>
            </div>
        </div>
        <button class="btn btn-info btn-block m-0 btn-courses bg-mx-green border-mx-green" @click="toDetail(course.id)">
            View Class
        </button>
    </div>
</template>

<script>
export default {
    name: 'MyCourseAdmin',
    props: {
        course: {
            type: Object
        }
    },
    methods: {
        toDetail (idCourse) {
            this.$router.push({ name: 'DetailCourseAdmin', params: {id:idCourse } })
        }
    },
}
</script>

<style scoped>
.card {
    border: 1px solid #00AFB9;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-end-start-radius: 12px;
    border-end-end-radius: 12px;
}
.btn-courses {
    border-end-start-radius: 12px;
    border-end-end-radius: 12px;
}
.sub-title{
    color: #3D3D3D;
    font-weight: bold;
}
.course-title-desc {
    line-height: .5em;
    margin: auto;
}
.course-title-desc .title{
    font-size: .7em;
}
.course-title-desc .sub{
    font-size: .5em;
}
.course-desc {
    font-size: .5em;
    margin-top: 4%;
}
.course-progess span {
    font-size: .5em;
}
</style>