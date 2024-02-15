<template>
  <header1 />

  <div class="mb-10 relative">
    <p class="text-center font-sans text-xl py-5">Admin</p>

    <search></search>

    <router-link to="/addProduct">
      <span
        class="lg:w-[9%] border flex justify-between items-center py-[0.800rem] rounded-xl cursor-pointer hover:bg-slate-200 absolute md:left-[80%] left-[54%] md:bottom-3 hover:text-color1"
      >
        <i class="px-1 pi pi-plus text-sm"></i>
        <p class="text-sm font-sans">Yangi mahsulot</p>
        <i class="px-1.5 text-sm pi pi-chevron-right pe-4"></i>
      </span>
    </router-link>
  </div>

  <!--  -->
  <div class="md: mt-10">
    <inSaid1 />
  </div>
</template>

<script setup>
import header1 from "./components/Header.vue";
import inSaid1 from "./admin/inSaidMaxsulot.vue";
import search from "./components/Search.vue";
</script>

<style lang="scss" scoped></style>
