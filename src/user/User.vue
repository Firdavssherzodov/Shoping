<template>
  <header1 />
  <p class="text-center text-black py-5 font-medium font-sans">Shaxsiy kabinet</p>

  <div class="rounded-xl  md:w-2/5 w-full md:h-[40rem] h-full md:pb-0 pb-96 m-auto bg-gray-100">
    <!-- userHeader -->
<div class="userHeader rounded-xl w-full h-[20%] flex">
  <!-- userAvater -->
    <div class="p-5">
      <fwb-avatar
      rounded
        size="lg"
      />
    </div>
  <!-- userAvater -->
<!-- userHeaderBody -->
<div class="pt-8">
<p class="font-medium font-sans">Firdavs</p>
<p class="py-0.5 font-sans">+998 99 939 39 48</p>
</div>
<!-- /userHeaderBody -->
  </div>
    <!-- /userHeader -->
<div class="flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 cursor-pointer">
  <i class="pi  pi-shopping-bag text-black ps-4 md:text-xl text-lg" > <span class="ps-3 md:text-[16px] text-sm font-sans">Buyurtmalar</span></i>
  <i class="pi pi-chevron-right pe-4"></i>
</div>
<div class="flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 mt-1. cursor-pointer">
  <i class="pi  pi-user text-black ps-4 md:text-xl text-lg"> <span class="ps-3 md:text-[16px] text-sm font-sans">Profil</span></i>
  <i class="pi pi-chevron-right pe-4"></i>
</div>
  </div>
</template>

<script setup>
import { PrimeIcons } from 'primevue/api';
import header1 from "../components/Header.vue";
import { FwbAvatar, FwbButton } from "flowbite-vue";
</script>

<style lang="scss" scoped>
.userHeader{
background-image: url(https://i.makeagif.com/media/6-15-2017/B-HnKH.gif);
background-size: cover;

}
</style>
