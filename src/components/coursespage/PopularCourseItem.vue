<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5">Popular Courses</h2>
        <div class="container">
            <div class="row mb-5">
                <div class="col">
                  <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                  </div>
                </div>
                <div class="col">
                    <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                  </div>
                </div>
                <div class="col">
                    <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                  </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                  </div>
                </div>
                <div class="col">
                    <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                  </div>
                </div>
                <div class="col">
                    <div style="width: 18rem;">
                    <router-link
                            :to="{
                            name: 'DetailCoursePage',
                            }"
                    >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="require('@/assets/images/logo_mycourse.png')" width="100%" />
                            </div>
                            <div class="col-8 d-flex-column mt-2">
                                <div>
                                    <b-form-rating variant="warning" id="rating-md-no-border" v-model="value" no-border></b-form-rating>
                                </div>
                            </div>
                        </div>
                        <h5 class="card-title mt-3">Mastering React JS Untuk Pemula</h5>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_students_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">30 Students</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/images/logo_material_mycourse.png')" width="15%" height="15%" />
                                    <p class="tutor align-items-center pt-3 pl-2">3 Materials</p>
                                </div>
                            </div>
                            <div class="d-flex-column mt-2">
                                <s>Rp.600.000</s>
                                <div>
                                    <h5 class="text-danger">Rp.520.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                  </router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PopularCourseItem'
}
</script>

<style scoped>
.titlecolor {
   color: #3D3D3D; 
}
.logo-image {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -6px;
}
.card-title {
   color: #00AFB9;
}

</style>