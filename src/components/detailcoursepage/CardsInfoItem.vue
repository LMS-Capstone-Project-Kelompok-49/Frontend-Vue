<template>
    <div class="align-item-center">
        <div class="card mb-3" style="max-width: 20rem;">
            <img :src="require('@/assets/images/detailcourse_discountbar.png')" class="discount-bar pt-4" width="25%" />
            <div class="card-body">
                <div class="d-flex justify-content-between mt-4">
                            <div>
                                <div class="discount-course">
                                    <label class="text-decoration-line-through text-muted">Rp {{ course.price }}</label>
                                </div>
                                <div class="price-course">
                                    <label>Rp {{ course.price-(course.price*course.discount/100) }}</label>
                                </div>
                            </div>
                            <div class="btn-course-wrapper">
                                <button class="btn btn-success py-2 btn-join-course" @click="toDetail(course.id)">
                                    Join Now
                                </button>
                            </div>
                        </div>
                <img :src="require('@/assets/images/detailcourse_line_silver.png')" width="100%" />
                <h5 class="card-title">Benefits of this course</h5>
                <div class="sub-subtile-course">
                    <div>
                        <i class="fas fa-file-video mr-2 icon"></i>
                        <label class="text-muted">Video Tutorial Materials</label>
                    </div>
                    <div>
                        <i class="fas fa-book-bookmark mr-2 icon"></i>
                        <label class="text-muted">More Materials Articles</label>
                    </div>
                    <div>
                        <i class="fas fa-clock mr-2 icon"></i>
                        <label class="text-muted">Lifetime Access</label>
                    </div>
                    <div>
                        <img :src="require('@/assets/images/detailcourse_certificate.png')" class="mr-2 icon" width="7%" />
                        <label class="text-muted">Official Certificate</label>
                    </div>
                </div>
                <img :src="require('@/assets/images/detailcourse_line_silver.png')" width="100%" />
                <h5 class="card-title">About the Mentor</h5>
                <div class="About Mentor">
                    <div class="d-flex">
                        <a class="logo mr-4">
                            <div class="logo-image">
                                <b-avatar :src="course.mentor.image" size="4em"></b-avatar>
                            </div>
                        </a>
                        <div>
                            <h6 class="label-mentor">{{ course.mentor.name }}</h6>
                            <label class="label-mentor-detail">{{ course.mentor.job }}</label>
                        </div>
                    </div>
                    <p class="detail-mentor pt-3" justified>
                        {{ course.mentor.about }}
                    </p>
                </div>
            </div>
        </div>
        <div class="card pt-3 justify-content-center sub-subtile-course" style="width: 20rem;">
            <h5 class="card-title ms-3 mt-2">Materials Info</h5>
            <div v-for="(valueMaterial, indexMaterial) in course.material" :key="indexMaterial">

                <div class="card smallcard ms-4 me-4 mt-2">
                    <div class="card">
                        <div class="d-flex pt-2 ms-3">
                            <div class="me-auto">
                                <i class="far fa-play-circle mr-2 icon" v-if="valueMaterial.type === 1"></i>
                                <i class="fas fa-book-bookmark mr-2 icon" v-if="valueMaterial.type === 2"></i>
                                <label class="text-muted">{{ valueMaterial.title }}</label>
                            </div>
                            <div>
                                <label class="text-muted me-3"></label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>          
            <div class="mb-2">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsInfoItem',
    props: {
        course: {
            type: Object
        }
    },
    methods: {
        toDetail (courseId) {
            this.$router.push({ name: 'CheckoutPage', params: { id: courseId  } })
        }
    },
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
.btn-join-course {
    background-color: #00AFB9;
    border-color: #00AFB9;
    padding-right: auto;
    padding-left: auto;
}
.discount-course {
    font-size: .8em;
}
.price-course {
    font-size: auto;
    color: #3D3D3D;
    font-weight: 600;
}
.btn-course-wrapper {
    margin: auto 0 0;
}
.sub-subtile-course .icon {
    color: #00AFB9;
}
.label-mentor-detail {
    font-size: 12px;
    font-weight: 500;
}
.label-mentor {
    margin-bottom: 0;
}
.detail-mentor {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #3D3D3D;
}
.text-muted {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #3D3D3D;
}
.card-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #3D3D3D;
}
.smallcard {
    background: #F9FAFB;
}
.duration-info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #3D3D3D;
}
</style>