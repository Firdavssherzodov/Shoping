<template>
  <header1 />

  <div class="mb-10 relative">
    <p class="text-center font-sans text-xl py-5">Admin</p>

    <span
      class="lg:w-[9%] border flex justify-between items-center py-4 rounded-xl cursor-pointer hover:bg-slate-200 absolute lg:left-[80%] left-[60%] md:bottom-1 bottom-"
    >
      <i class="px-1 pi pi-plus"></i>
      <p>Yangi mahsulot</p>
      <i class="px-1.5\ pi pi-chevron-right pe-4"></i>
    </span>
  </div>

  <!--  -->
  <div class="md: mt-10">
    <inSaid />
  </div>
</template>

<script setup>
import header1 from "../components/Header.vue";
import inSaid from "../Admin/inSaidMaxsulot.vue";
</script>

<style lang="scss" scoped></style>
