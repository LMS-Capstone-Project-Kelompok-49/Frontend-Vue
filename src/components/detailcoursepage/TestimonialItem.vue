<template>
    <div class="title">
        <h1 class="titlecolor pt-2">Testimonial</h1>
        <div class="d-flex justify-content-center">
            <div class="card pt-3 mr-3" style="width: 30%;" v-for="n in 3" :key="n">
                <div class="card-body">
                    <div class="d-flex">
                            <a class="logo mr-4" href="/">
                                <div class="logo-image">
                                    <img :src="require('@/assets/images/detailcourse_logo_mentor.png')" width="50px" />
                                </div>
                            </a>
                            <div>
                                <h6 class="label-mentor">Fernando Ferix</h6>
                                <label class="label-mentor-detail">UI/UX Specialist</label>
                            </div>
                        </div>
                    <p class="detail-mentor pt-3" justified>“Kelas yang sangat di rekomendasikan untuk pemula. Disini mentor sangat bersahabat sekali. kerennn abissss” </p>
                    <b-form-rating v-model="rating" variant="warning" class="rating-form" inline no-border readonly></b-form-rating>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestimonialItem',
  data() {
      return {
          rating: 5
      }
  },
}
</script>

<style scoped>
.titlecolor {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
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
.card {
  background-color: #F3F4F6;
}
.rating-form {
  background-color: #F3F4F6;
}
</style>