<template>
    <div class="title">
        <h1 class="titlecolor">Becoming Professional UI/UX Design</h1>
        <p class="subtitle" justified>Jadilah seorang profesional UI/UX Designer dengan mengikuti kursus ini. Kamu akan diajari bagaimana cara menyelesaikan sebuah case dari user dalam pembuatan sebuah produk digital.</p>
        <div class="d-flex pb-2">
            <div class="d-flex me-auto">
                <img :src="require('@/assets/images/detailcourse_design_logo.png')" class="" width="100%" />
                <b-form-rating v-model="rating" variant="warning" class="rating-form" inline no-border readonly></b-form-rating>
            </div>
            <div class="d-flex">
                <div class="mr-2">
                    <i class="far fa-heart mr-2"></i>
                    <label>2.5K</label>
                </div>
                <div class="mr-2">
                    <i class="far fa-comment-alt mr-2"></i>
                    <label>2.5K</label>
                </div>
            </div>
        </div>
        <div class="pt-2 pb-2">
            <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/Hifv78Cekgs"
                allowfullscreen
            ></b-embed>
        </div>
        <h3 class="titlecolor-about pt-4">About the Course</h3>
        <p class="subtitle" justified>Build your UX career with a globally recognised, industry-approved qualification. Get the mindset, the confidence and the skills that make UX designers so valuable. User experience (UX) designers focus on the interaction that users have with products, likewebsites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible. Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. You will create designs on paper and in digital design tools like Figma and Adobe XD. By the end of the certificate program, you will have a professional UX portfolio that includes three end-to-end projects, so that you’re ready to apply for jobs. Upon completion, you can directly apply for jobs with Google and over 150 U.S. employers, including Walmart, Best Buy, and Astreya.</p>
    </div>
</template>

<script>
export default {
  name: 'DetailCourseItem',
  data() {
      return {
        rating: 4
      }
  },
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