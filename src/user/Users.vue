<template>
  <header1 />
  <div class="rounded-xl lg:w-2/5 w-full md:h-[48rem] h-full md:pb-0 pb-[31rem] m-auto bg-gray-100">
    <!-- userHeader -->
    <div class="userHeader md:rounded-xl rounded-none w-full h-[20%] flex rounded-b-none">
      <!-- userAvater -->
      <div class="p-5">
        <fwb-avatar rounded size="lg" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--mmPHnesazs3BnusJhNOA373KLqzyGWRY9PKmEqnsM-_EYZxhe8i59y2KqVmPMXpz6k&usqp=CAU"/>
      </div>
      <!-- userAvater -->
      <!-- userHeaderBody -->
      <div class="pt-8">
        <p class="font-medium font-sans">Firdavs</p>
        <p class="py-0.5 font-sans  underline-offset-1">+998 99 939 39 48</p>
      </div>
      <!-- /userHeaderBody -->
    </div>
    <!-- /userHeader -->
    <div
      class="flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 cursor-pointer hover:bg-slate-200">
      <i class="pi pi-shopping-bag text-black ps-4 md:text-xl text-lg">
        <span class="ps-3 md:text-[16px] text-sm font-sans">Buyurtmalar</span></i>
      <i class="pi pi-chevron-right pe-4"></i>
    </div>
    <!-- Profil -->
    <div
      class="flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 mt-1. cursor-pointer hover:bg-slate-200">
      <i class="pi pi-user text-black ps-4 md:text-xl text-lg">
        <span class="ps-3 md:text-[16px] text-sm font-sans">Profil</span></i>
      <i class="pi pi-chevron-right pe-4"></i>
    </div>
    <!--  -->
    <router-link to="/adminHome">
      <div
        class="xs:flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 mt-1. cursor-pointer hover:bg-slate-200 ">
        <i class="pi pi-plus text-black ps-4 md:text-lg text-lg">
          <span class="ps-3 md:text-[16px] text-sm font-sans">Yangi mahsulot qo'shish</span></i>
        <i class="pi pi-chevron-right pe-4"></i>
      </div>
    </router-link>
    <!--  -->
    <router-link to="/">
      <div
        class="flex justify-between py-4 items-center active:bg-slate-200 rounded-xl w- m-1 mt-1. cursor-pointer hover:bg-slate-200">
        <i class="pi pi-sign-out text-black ps-4 md:text-lg text-lg">
          <span class="ps-3 md:text-[16px] text-sm font-sans">Chiqish</span></i>
        <i class="pi pi-chevron-right pe-4"></i>
      </div>
    </router-link>
    <!--  -->
    
  </div>
</template>

<script setup>
import header1 from "../components/Header.vue";
import { FwbAvatar, FwbButton } from "flowbite-vue";
</script>

<style lang="scss" scoped>
.userHeader {
  background-image: url(https://i.makeagif.com/media/6-15-2017/B-HnKH.gif);
  background-size: cover;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

}
</style>
