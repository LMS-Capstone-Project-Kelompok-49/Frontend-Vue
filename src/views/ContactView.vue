<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1>Have Some Question?</h1>

      <div class="mt-4 w50 m-auto">
        <label class="my-4 text-detail">
          Terima kasih telah tertarik dengan website kursus kami, kami akan senantiasa menjawab semua pertanyaan yang kamu ingin tanyakan terkait kegiatan kursus ini
        </label>
        <label class="my-3 text-detail">
          Kamu bisa mengirimkan langsung pertanyaan melalui form di bawah ini, atau kamu bisa menggunakan kontak alternatif yang telah kami sediakan
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
