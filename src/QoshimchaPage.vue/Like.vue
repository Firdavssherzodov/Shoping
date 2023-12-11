<template>
  <Xadaer />
  <Toast
    position="top-center"
    group="pt"
    :pt="{
      container: { style: 'margin-top:0vh;' },
    }"
  />
  <div class="diva card">
   
    <div
      class="kard border rounded-5"
      v-for="(data, index) of Likes"
      :key="data"
    >
      <div class="d1 d-flex">
        <img class="div_img my-4 ms-5 me-4" :src="data.image" />
        <p class="py-4 mt-3 d-block" style="font-size: 0.8rem">
          {{ data.title }}
        </p>
        <!-- <p class="mt-4">$ {{ data.price }} </p> -->
      </div>
      <div class="d2 d-flex mx-5">
        <h6 class="py-4 px-2 pe-3 w-25 fw-bold">$ {{ data.price }}</h6>
        <i
          class="fa-solid fa-xmark fs-3 px-5 py-3"
          style="color: #e50606"
          @click="Delete(index)"
        ></i>
        <button
          class="btn btn-success btn btn-outline-success ripple-surface-dark mx-2 my-2"
          @click="AddShop(data.id)"
        >
          <i
            class="fa-solid fa-cart-shopping text-seccess"
            style="color: #14a44d"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Xadaer from "../components/Header.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { products } from "../user/store/userStore";

const toast = useToast();
let Likes = ref([]);
const listProducts = products();

onMounted(() => {
  Likes.value = JSON.parse(localStorage.getItem("likes"));


    // console.log(listProducts.product_list);
    localStorage.setItem("savat", JSON.stringify(listProducts.product_list));
  });
  toast.add({
    severity: "success",
    summary: "Maxsulot savatda",
    detail: "",
    group: "pt",
    life: 1500,
  });
}

function Delete(index) {
  Likes.value.splice(index, 1);
  if (Likes.value.length == 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("likes", JSON.stringify(Likes.value));
  }
}
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.diva {
  width: 78%;
  height: 900px;
  margin: 3vh auto;
  display: flex !important;
  flex-wrap: wrap;
  /* justify-content: space-around;  */
}
.text2 {
  display: block;
}
.text3 {
  display: none;
}
.kard {
  width: 25%;
  height: 25%;
  margin-top: 1.5vh;
  margin-left: 8vh;
}
.div_img {
  width: 25%;
  height: 70%;
}
.d1 {
  width: 100%;
  height: 70%;
}
.d2 {
  width: 100%;
  height: 30%;
}

.fa-xmark {
  cursor: pointer;
}

.btn-success {
  position: relative;
  top: 8%;
  left: 5% !important;
  width: 65px !important;
  height: 40px;
  margin-top: 1.5vh !important;
  margin-left: -1vh !important;
}
/* Responnsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    display: block !important;
  }
  .kard {
    width: 90% !important;
    height: 20%;
    margin-top: 1.5vh;
    margin-left: 2vh;
  }

  .d2 h6 {
    width: 100px !important;
    padding-top: 2.3vh !important;
  }
  .fa-xmark {
    margin-top: 1.5vh !important;
    margin-left: 5vh !important;
    padding: 0px !important;
    font-size: 1.9rem !important;
    cursor: pointer;
    width: 30px !important;
    height: 30px;
  }

  .d1 p {
    width: 100% !important;
    font-size: 0.7rem !important;
  }
}
.btn-success {
  padding: 10px;
  top: -8%;
  left: 13% !important;
  width: 15% !important;
  font-size: 0.5rem;
}
.btn-success i {
  font-size: 0.9rem;
}
/* Responnsive 576px */
@media (max-width: 576px) {
  .diva {
    width: 90%;
    display: block !important;
  }
  .kard {
    width: 90%;
    height: 20%;
    margin-top: 1.5vh;
    margin-left: 2vh;
  }
  .d2 h6 {
    padding-top: 2.5vh !important;
  }
  .fa-xmark {
    margin-top: 2vh;
    margin-left: 6vh;
    padding: 0px !important;
    font-size: 1.8rem !important;
    cursor: pointer;
    width: 30px !important;
    height: 30px;
  }
  .d1 p {
    width: 90% !important;
    font-size: 0.7rem !important;
  }
  .btn-success {
  padding: 10px;
  top: -8%;
  left: 15% !important;
  width: 15% !important;
  font-size: 0.5rem;
}
.btn-success i {
  font-size: 0.9rem;
}
}
</style>
