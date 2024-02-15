<template>
  <Toast position="top-center" />
  <header1></header1>
  <p class="text-center font-sans text-xl py-5">Yangi mahsulot qo'shish</p>

  <div class="w-full h-full">
    <div class="m-auto md:w-2/5 w-[95%] h-full md:pb-10 pb-20 relative">
      <router-link to="/adminHome">
        <span class="inline-block pb-5 font-sans px-4">
          <i class="fa-solid fa-arrow-left"></i>
          Orqaga
        </span>
      </router-link>

      <form @submit.prevent="UpdateProduct()">
        <fwb-file-input v-model="image" dropzone class="mb-3" />
        <!-- Mahsulot nomi -->
        <fwb-input
          v-model="name"
          placeholder="Mahsulot nomi "
          label="Mahsulot nomi"
          required
          class="mb-2 font-sans"
        />
        <!-- Mahsulot turi -->
        <fwb-select
          v-model="type"
          :options="countries"
          label="Mahsulot turi"
          required
          size="md"
          :placeholder="'Mahsulot turi'"
          class="mb-3 font-sans"
        />
        <fwb-input
          v-model="counter"
          placeholder=" Mahsulot soni"
          label="Mahsulot soni"
          type="Number"
          required
          class="mb-3 md:w-[43%] w-[45%] font-sans"
        />
        <!-- textarea -->
        <fwb-textarea
          v-model="message"
          label="Qo'shimcha malumot"
          placeholder="Qo'shimcha malumot..."
          form="my-form"
          class="font-sans"
        />
        <!-- checbox -->

        <input
          type="checkbox"
          v-model="check"
          class="my-4 mx-1 w-5 h-5 font-sans rounded-[0.25rem] cursor-pointer"
          required
          @click="Clickcheck"
        />
        <label class="font-sans px-2 text-sm font-semibold"
          >Hammasi to'g'riliga ishonch hosil qiling</label
        >
        <!-- Sndbutton -->
        <fwb-button size="md " class="font-sans" type="submit"
          >Yuklash</fwb-button
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import header1 from "../components/Header.vue";
import { ref } from "vue";
import { FwbFileInput } from "flowbite-vue";
import { FwbInput } from "flowbite-vue";
import { FwbSelect } from "flowbite-vue";
import { FwbTextarea } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { useToast } from "primevue/usetoast";

import Toast from "primevue/toast";

const toast = useToast();

const countries = [
  { value: "us", name: "Oshxona" },
  { value: "ca", name: "Elektronika" },
  { value: "fr", name: "Kiyimlar" },
  { value: "fr", name: `Uy-ro'zg'or` },
  { value: "fr", name: "Kiyimlar" },
];
const check = ref(false);
const name = ref(null);
let image = ref("");
let type = ref("");
let counter = ref("");
let message = ref("");

function Clickcheck() {
  check.value == true;
}

function UpdateProduct() {
  if (check.value == false) {
    check.value;
  }

  toast.add({
    severity: "success",
    summary: `Yangi mahsulot qo'shildi`,
    detail: "Loading",
    life: 3000,
  });
}
</script>

<style lang="scss" scoped>
:deep button {
  margin-top: 10px;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
