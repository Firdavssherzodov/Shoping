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
        Get started
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
:deep img{
  width: 110px;
  height: 70px;
}


.Menu {
  width: 350px;
  height: 70px;
  position: fixed;
  left: 40.5%;
  z-index: 288882;
  bottom: 0px !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px !important;
  background-color: rgb(255, 255, 255);
}
.Menu a:hover {
  color: #3b71ca !important;
}
.counter {
  bottom: 55%;
  margin-left: 4%;
  position: absolute;
}
.counter2 {
  display: none;
  margin-left: 14px !important;
  position: absolute;
}
/* Responsive 385px*/
@media (max-width: 385px) {
  .diva {
    display: none;
  }
  .Menu {
    display: block;
    width: 100%;
    height: 65px !important;
    left: 0% !important;
    padding-bottom: 1vh;
  }
  .Menu p {
    margin-left: -0.8vh;
    position: absolute !important;
    max-height: 10px;
  }

  .Menu,
  a {
    font-size: 1.3rem !important;
  }
}
/* Responsive  576px*/
@media (max-width: 576px) {
  .diva {
    display: none;
  }
  .Menu {
    display: inline-flex !important;
    width: 100%;
    height: 60px !important;
    left: 0%;
    padding-bottom: 1vh;
  }
  .Menu,
  a {
    font-size: 1.4rem;
  }
  .counter {
    bottom: 55%;
    margin-left: 4%;
    position: absolute;
  }
}
</style>
