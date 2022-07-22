<template>
    <div class="title">
        <h1 class="titlecolor">{{ course.title }}</h1>
        <p class="subtitle" justified>{{ course.desc }}</p>
        <div class="d-flex pb-2">
            <div class="d-flex justify-content-around me-auto">
                <div>
                    <button class="btn btn-info" type="button">
                        {{ course.category.name }}
                    </button>
                </div>
                <div>
                    <b-form-rating :value="course.rating" variant="warning" class="rating-form" no-border readonly></b-form-rating>
                </div>
            </div>
        </div>
        <div class="pt-2 pb-2">
            <b-embed
                type="iframe"
                aspect="16by9"
                :src="course.material[0].link"
                allowfullscreen
            ></b-embed>
        </div>
        <h3 class="titlecolor-about pt-4">About the Course</h3>
        <p class="subtitle" justified>
            {{ course.material[0].desc }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'DetailCourseItem',
    props: {
        course: {
            type: Object
        }
    }
}
</script>

<style scoped>
.titlecolor {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 60px;
    color: #3D3D3D;
}
.subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #3D3D3D;
}
.titlecolor-about {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
}
</style>