<template>
  <heder />
  <div class="diva mt-5">
    <div class="div my-5 rounded-4 border">
      <h5 class="px-4 pt-4">Telefon raqamini kiriting</h5>
      <p class="px-4 py-2">Tasdiqlash kodini SMS orqali yuboramiz</p>
      <form class="form">
        <input
          type="text"
          placeholder="+998 00 000-00-00"
          style="height: 50px; font-size: 1.1rem"
          class="form-control mx-4"
        />
        <br />
      </form>
      <button class="btn btn-primary mx-4" style="width: 80%; height: 40px">
        Kodni olish
      </button>
    </div>
  </div>
</template>

<script setup>
import heder from "../components/Header.vue";
</script>

<style scoped>
.diva {
  margin: auto;
  width: 63%;
  height: 900px;
}
.div {
  margin: auto;
  width: 50%;
  height: 300px;
}
.form {
  width: 80%;
}
/* responsive 385px */
@media (max-width: 385px) {
  .diva {
    margin: 0% !important;
    width: 100%;
    height: 100%;
  }
  .div {
    margin-top: 20vh !important;
    width: 95%;
    text-align: center;
  }
  .form {
    margin-left: 2vh;
  }
}
/* responsive 576px */
@media (max-width: 576px) {
  .diva {
    margin: 0% !important;
    width: 100%;
    height: 100%;
  }
  .div {
    margin-top: 20vh !important;
    width: 95%;
    text-align: center;
  }
  .form {
    margin-left: 2vh;
  }
}
</style>
