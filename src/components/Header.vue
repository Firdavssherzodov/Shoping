<template>
  <div class="sm:w-[80%] w-full m-auto sm:block hidden">
    <fwb-navbar>
      <template #logo>
        <fwb-navbar-logo
          alt="Jalolxon Market logo"
          image-url="/images/header.icons.png"
          link="#"
          class="text-color1 relative"
        >
          Jalolxon Market
        </fwb-navbar-logo>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu" class="pe-32">
          <fwb-navbar-link link="#"> Bosh sahifa </fwb-navbar-link>
          <fwb-navbar-link link="#"> Katalog </fwb-navbar-link>
          <fwb-navbar-link link="#"> Savat </fwb-navbar-link>
          <fwb-navbar-link link="#"> Kabinet </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side>
        <fwb-button class="mr-2 font-normal" outline> Log in </fwb-button>
        <fwb-button class="font-bold"> Sigin up </fwb-button>
      </template>
    </fwb-navbar>
  </div>

  <section
    class="Menu sm:hidden  border border-x-0 w-full h-16 fixed sm:left-[40.5%] left-0 bottom-0 z-[20] flex justify-around items-center rounded-lg bg-white"
  >
    <router-link to="/">
      <div class="relative">
        <a href="#" class="fa-solid fa-house text-xl text-gray-500" ></a>

        <p class="text-[11px] absolute left-[-1rem]  z-30">
          Bosh/sahifa
        </p>
      </div>
    </router-link>
    <router-link to="/search">
      <div class="relative">
        <a
          href="#"
          class="fa-solid fa-magnifying-glass text-xl text-gray-500"
        ></a>
        <p class="text-[11px] absolute left-[-0.6rem]">Katalog</p>
      </div>
    </router-link>
    <router-link to="/korzinka">
      <div class="relative">
        <a
          href="#"
          class="fa-solid fa-cart-shopping text-xl text-gray-500"
        ></a>
        <p class="text-[11px] absolute left-[-0.1rem]">
          Savat
        </p>
        <Badge :value="countet.length" class="absolute bottom-3 bg-color2 "></Badge>
       
      </div>
    </router-link>
    <router-link to="/">
      <div class="relative">
        <a href="#" class="fa-regular fa-heart text-xl text-gray-500" ></a>
        <p class="text-[11px] absolute left-[-1rem]">
          Saralangan
        </p>
      </div>
    </router-link>
    <router-link to="/user">
      <div class="relative">
        <a href="#" class="fa-regular fa-user text-xl text-gray-500" ></a>
        <p class="text-[11px] absolute left-[-0.6rem]">
          Kabinet
        </p>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import Badge from 'primevue/badge';
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

  // if (countet.value.length > 0) {
  //   let count = document.querySelector(".counter");
  //   count.style.display = "block";
  //   let count2 = document.querySelector(".counter2");
  //   count2.style.display = "block";
  // } else {
  //   let count = document.querySelector(".counter");
  //   count.style.display = "none";
  //   let count2 = document.querySelector(".counter2");
  //   count2.style.display = "none";
  // }
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
