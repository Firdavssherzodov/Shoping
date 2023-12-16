<template>
  <div class="sm:w-[70%] w-full m-auto ">
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Jalolxon Market logo" image-url="/images/header.icons.png" link="#" class="text-color1 ">
        Jalolxon Market
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu" class="pe-16">
        <fwb-navbar-link  link="#">
          Bosh sahifa
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Xizmat
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Pricing
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Contact
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-button>
        Sigin up
      </fwb-button>
    </template>
  </fwb-navbar>

</div>
  <section
    class="Menu sm:hidden border  border-bottom-x-0"
  >
    <router-link to="/">
      <div>
        <a href="#" class="fa-solid fa-house fs-4" style="color: #8c8989"></a>
        <p style="font-size: 0.7rem; position: absolute; margin-left: -2vh">
          Bosh sahifa
        </p>
      </div>
    </router-link>
    <router-link to="/search">
      <div>
        <a
          href="#"
          class="fa-solid fa-magnifying-glass fs-4"
          style="color: #8c8989"
        ></a>
        <p style="font-size: 0.7rem; position: absolute">Katalog</p>
      </div>
    </router-link>
    <router-link to="/korzinka">
      <div>
        <a
          href="#"
          class="fa-solid fa-cart-shopping text-seccess fs-4"
          style="color: #8c8989"
        ></a>
        <p style="font-size: 0.7rem; position: absolute; margin-left: -0.2vh">
          Savat
        </p>
        <button
          class="btn btn-primary btn-floating fa-bounce counter"
          style="
            border-radius: 50px;
            font-size: 0.7rem;
            width: 20px;
            height: 20px;
          "
        >
          {{ countet.length }}
        </button>
      </div>
    </router-link>
    <router-link to="/favorites">
      <div>
        <a href="#" class="fa-regular fa-heart fs-4" style="color: #8c8989"></a>
        <p style="font-size: 0.7rem; position: absolute; margin-left: -2vh">
          Saralangan
        </p>
      </div>
    </router-link>
    <router-link to="/user">
      <div>
        <a href="#" class="fa-regular fa-user fs-4" style="color: #8c8989"></a>
        <p style="font-size: 0.7rem; position: absolute; margin-left: -1.3vh">
          Kabinet
        </p>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
let countet = ref([]);


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
:deep img{
  width: 110px;
  height: 70px;
}


</style>
