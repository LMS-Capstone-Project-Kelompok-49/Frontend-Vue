<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1>Have Some Question?</h1>

      <div class="mt-4 w50 m-auto">
        <label class="my-4 text-detail">
          Thank you for being interested in our course website, we will always answer all the questions you want to ask regarding this course activity
        </label>
        <label class="my-3 text-detail">
          You can send questions directly through the form below, or you can use the alternative contacts we have provided.
        </label>
      </div>
    </div>
    <div class="mt-5">
      <h3>Contact Us</h3>
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <ContactForm />
        </div>
        <div class="col-sm-12 col-md-4">
          <ContactCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/landingpage/ContactForm.vue'
import ContactCard from '@/components/landingpage/ContactCard.vue'

export default {
  name: 'ContactView',
  components: {
    ContactForm,
    ContactCard
  }
}
</script>

<style scoped>
.text-detail {
  font-weight: 300;
  line-height: 30px;
}

h3 {
  color: #00AFB9;
}

@media screen and (min-width: 1024px) {
  .w50 {
    width: 55%;
  }
}
</style>
