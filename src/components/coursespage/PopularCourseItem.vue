<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5">Popular Courses</h2>
        <div class="container">
            <div class="row mb-5">
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-light border-light" style="width: 18rem;">
                        <div class="card-body">
                            <div class="logo-image">
                                <img :src="require('@/assets/images/logo_course.png')" width="50px" />
                            </div>
                            <h5 class="card-title mt-3">Flutter Courses</h5>
                            <h5 class="card-title">$100</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">45 Videos</p>
                                <p class="card-text">5k+ reviews</p>
                            </div>
                            <a href="#" class="btn btn-light text-center">Join Now</a>
                        </div>
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
.card {
   background-color: #00AFB9; 
}

</style>