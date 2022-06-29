<template>
  <div>
    <div class="card mt-5">
      <div class="card-header bg-mx-green text-white text-center">
        <i class="float-right fas fa-window-close icon" @click="toPage"></i>
        <h4>How to Pay</h4>
      </div>
      <div class="card-body p-5">
        <h4>Bank BCA</h4>
        <div class="mt-4">
          <div class="d-flex justify-content-between">
            <div>
              <div class="text-muted">Number of Virtual Account</div>
              <div>807771234567898765</div>
            </div>
            <div class="text-right my-auto text-mx-green">
              <label >
                Copy to Clipboard
                <i class="fas fa-clipboard ml-2"></i>
              </label>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-muted">Total Payment</div>
            <div>Rp. 1.100.000</div>
          </div>
        </div>
        <div class="mt-5">
          <div>
            <b-button v-b-toggle.collapse-3 class="m-1 btn btn-outline-info border-0 bg-white text-dark btn-block text-left my-2">
              <div class="d-flex justify-content-between">
                <div>
                  ATM BCA
                </div>
                <div>
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </b-button>
            <b-collapse id="collapse-3" class="mt-2">
              <b-card>
                Lakukan log in pada aplikasi BCA Mobile <br>
                Pilih menu m-BCA, kemudian masukkan kode akses m-BCA <br>
                Pilih m-Transfer > BCA Virtual Account <br>
                Pilih dari Daftar Transfer, atau masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 807771234567898753)
                Masukkan pin m-BCA <br>
                Pembayaran selesai. <br>
                Simpan notifikasi yang muncul sebagai bukti pembayaran
              </b-card>
            </b-collapse>
          </div>
          <div>
            <b-button v-b-toggle.collapse-5 class="m-1 btn btn-outline-info border-0 bg-white text-dark btn-block text-left my-2">
              <div class="d-flex justify-content-between">
                <div>
                  m-BCA (BCA Mobile)
                </div>
                <div>
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </b-button>
            <b-collapse id="collapse-5" class="mt-2">
              <b-card>
                Lakukan log in pada aplikasi BCA Mobile <br>
                Pilih menu m-BCA, kemudian masukkan kode akses m-BCA <br>
                Pilih m-Transfer > BCA Virtual Account <br>
                Pilih dari Daftar Transfer, atau masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 807771234567898753)
                Masukkan pin m-BCA <br>
                Pembayaran selesai. <br>
                Simpan notifikasi yang muncul sebagai bukti pembayaran
              </b-card>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentCard',
  methods: {
    toPage () {
      this.$router.push({ name: 'TransactionsPage' })
    }
  },
}
</script>

<style scoped>
.card, .card-header {
  border-radius: 20px;
}
.icon {
  cursor: pointer;
}
</style>