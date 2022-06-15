<template>
  <div>
    <b-card text-variant="white" class="card-contact" title="Alternative Contact">
      <span>Kamu dapat menghubungi alternatif kontak di bawah ini</span>

      <div class="my-2">
        <div>
          <label class="m-2 icon">
            <i class="fab fa-whatsapp"></i>
          </label>
          <label class="text-icon">
            +62812345678
          </label>
        </div>
        <div>
          <label class="m-2 icon">
            <i class="fab fa-twitter"></i>
          </label>
          <label class="text-icon">
            Learn@learn
          </label>
        </div>
        <div>
          <label class="m-2 icon">
            <i class="fab fa-instagram"></i>
          </label>
          <label class="text-icon">
            Learn.ITnow
          </label>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ContactCard'
}
</script>

<style scoped>
.card-contact {
  background-color: #00AFB9;
}
.icon {
  font-size: 2em;
}
.text-icon {
  font-size: 1.4em;
}
</style>