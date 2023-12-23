<template>
  <div class="sm:w-[80%] w-full m-auto sm:block hidden">
    <fwb-navbar>
      <template #logo>
        <router-link to="/">
          <fwb-navbar-logo
            alt="Jalolxon Market logo"
            image-url="../../images/header.icons.png"
            link="#"
            class="text-color1 relative font-sans"
          >
            Jalolxon Market
          </fwb-navbar-logo>
        </router-link>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu" class="pe-32">
          <fwb-navbar-link link="/" class="font-sans">
            Bosh sahifa
          </fwb-navbar-link>
          <fwb-navbar-link link="/search" class="font-sans">
            Katalog
          </fwb-navbar-link>
          <fwb-navbar-link link="/korzinka" class="font-sans">
            Savat
          </fwb-navbar-link>
          <fwb-navbar-link link="/user" class="font-sans">
            Kabinet
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side>
        <router-link to="/Login">
          <fwb-button class="mr-2 font-normal font-sans" outline>
            Kirish
          </fwb-button>
        </router-link>
        <router-link to="/Siginup">
          <fwb-button class="font-bold font-sans"> Ro'yxatdan o'tish</fwb-button>
        </router-link>
      </template>
    </fwb-navbar>
  </div>

  <section
    class="Menu sm:hidden border border-x-0 w-full h-16 fixed sm:left-[40.5%] left-0 bottom-0 z-[20] flex justify-around items-center rounded-lg bg-white"
  >
    <router-link to="/">
      <div class="relative">
        <a href="#" class="pi pi-home text-xl text-gray-500"></a>

        <p class="text-[11px] absolute left-[-1rem] z-30 font-sans">
          Bosh/sahifa
        </p>
      </div>
    </router-link>
    <router-link to="/search">
      <div class="relative">
        <a href="#" class="pi pi-search text-xl text-gray-500"></a>
        <p class="text-[11px] absolute left-[-0.6rem] font-sans">Katalog</p>
      </div>
    </router-link>
    <router-link to="/korzinka">
      <div class="relative">
        <a href="#" class="pi pi-shopping-bag text-xl text-gray-500"></a>
        <p class="text-[11px] absolute left-[-0.1rem] font-sans">Savat</p>
        <Badge
          :value="countet.length"
          class="absolute bottom-3 bg-color2 counter hidden"
        ></Badge>
      </div>
    </router-link>
    <router-link to="/">
      <div class="relative">
        <a href="#" class="pi pi-heart text-xl text-gray-500"></a>
        <p class="text-[11px] absolute left-[-1rem] font-sans">Saralangan</p>
      </div>
    </router-link>
    <router-link to="/user">
      <div class="relative">
        <a href="#" class="pi pi-user text-xl text-gray-500"></a>
        <p class="text-[11px] absolute left-[-0.6rem] font-sans">Kabinet</p>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import Badge from "primevue/badge";
import { ref, onMounted } from "vue";
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
let countet = ref([]);

// setInterval(()=>{
//   countet.value =  JSON.parse(localStorage.getItem("savat"));
// },1000)

onMounted(async () => {
  countet.value = (await JSON.parse(localStorage.getItem("savat"))) || [];

  if (countet.value.length > 0) {
    let count = document.querySelector(".counter");
    count.classList.add = "block";
  } else {
    let count = document.querySelector(".counter");
    count.classList.remove = "block";
  }
});
</script>

<style scoped>
:deep img {
  margin: 0px !important;
  width: 200px;
  height: 120px;
}
:deep a {
  margin: 0px !important;
  justify-content: center;
}
</style>
