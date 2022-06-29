<template>
    <div class="cards pt-5 mt-5">
        <h2 class="titlecolor mb-5 mt-5" v-if="!title">Explore Your Courses</h2>
        <div v-if="!typeTitle">
            <h2 class="titlecolor mb-5 mt-5" v-if="title">{{ title }}</h2>
        </div>
        <div v-if="typeTitle">
            <h3 v-if="title">{{ title }}</h3>
        </div>
        <div class="row mb-5">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-5" v-for="n in 6" :key="n">
                <div class="card border-light">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <img :src="require('@/assets/images/Rectangle4486.png')"/>
                            </div>
                            <div>
                                <b-form-rating v-model="rating" variant="warning" class="rating-form" no-border readonly></b-form-rating>
                            </div>
                        </div>
                        <div>
                            <label class="title-course">Mastering React Js untuk Pemula</label>
                            <div class="sub-title-course">
                                <div class="">
                                    <i class="fas fa-user text-muted mr-3"></i>
                                    <label class="text-muted">Fernando Hendrict</label>
                                </div>
                            </div>
                            <div class="d-flex sub-subtile-course">
                                <div>
                                    <i class="fas fa-file-video mr-2 icon"></i>
                                    <label class="text-muted">15 Videos</label>
                                </div>
                                <div class="mx-3">
                                    <i class="fas fa-users mr-2 icon"></i>
                                    <label class="text-muted">50+ Members  </label>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <div>
                                <div class="discount-course">
                                    <label class="text-decoration-line-through text-muted">Rp 600.000</label>
                                </div>
                                <div class="price-course">
                                    <label>Rp 600.000</label>
                                </div>
                            </div>
                            <div class="btn-course-wrapper">
                                <button class="btn btn-success py-2 btn-join-course" @click="toDetail">
                                    Join Class
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExploreCourseItem',
  props: {
      title: String,
      typeTitle: Number,
  },
  data() {
      return {
        rating: 4
      }
  },
  methods: {
    toDetail () {
        this.$router.push({ name: 'DetailCoursePage', params: { id: 1 } })
    }
  },
}
</script>

<style scoped>
.titlecolor { 
    width: 348px;
    height: 48px;
    left: 80px;
    top: 2133px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #3D3D3D;
}
.rating-form {
    margin-top: 10%;
}
.title-course {
    color: #00899F;
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 1em;
}
.sub-title-course{
    font-size: 1em;
}
.sub-subtile-course{
    font-size: .9em;
}
.sub-subtile-course .icon {
    color: #00AFB9;
}
.discount-course {
    font-size: .8em;
}
.price-course {
    font-size: 1.2em;
    color: #DD234E;
    font-weight: 600;
}
.btn-course-wrapper {
    margin: auto 0 0;
}
.btn-join-course {
    background-color: #00AFB9;
    border-color: #00AFB9;
    padding-right: 2.5em;
    padding-left: 2.5em;
}
</style>