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
    <div class="text1 text-center">
      <router-link to="/">
        <button
          class="btn btn-primary p-2 my-4 pe-3"
          style="margin-top: 13.4vh !important"
        >
          <i class="fa-solid fa-arrow-left pe-2" style="color: #f5f5f5"></i>
          Bosh Sahifaga
        </button>
      </router-link>
    </div>

    <div
      class="kard border rounded-5"
      v-for="(data, index) in Likes"
      :key="data"
    >
      <div class="d1 d-flex">
        <img :src="data.image" alt="inkas" class="mx-4 my-3" />
        <p class="py-4">{{ data.title }}</p>
        <i
          class="fa-solid fa-trash-can fs-5 my-4 me-4"
          style="color: #eb0505; cursor: pointer"
          @click="Delete(index)"
        ></i>
      </div>
      <div class="d2 d-flex">
        <h6 class="fw-bold py-2">${{ data.price }}</h6>
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

function AddShop(idw, index) {
  axios.get(`https://fakestoreapi.com/products/${idw}`).then((resp) => {
    // console.log(resp.data);

    listProducts.product_list.push(resp.data);

    // console.log(listProducts.product_list);
    localStorage.setItem("savat", JSON.stringify(listProducts.product_list));
  });
  toast.add({
    severity: "success",
    summary: "Maxsulot savatda",
    detail: "",
    group: "pt",
    life: 1000,
  });

  Likes.value.splice(index, 1);

  if (Likes.value.length == 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("likes", JSON.stringify(Likes.value));
  }
}

function Delete(index) {
  Likes.value.splice(index, 1);
  if (Likes.value.length == 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("likes", JSON.stringify(Likes.value));
  }
}

onMounted(() => {
  Likes.value = JSON.parse(localStorage.getItem("likes"));

  if (!!Likes.value) {
    if (Likes.value.length == 0) {
      let text = document.querySelector(".text1");
      text.classList.add("text2");
    } else {
      let text = document.querySelector(".text1");
      text.classList.add("text3");
    }
  }
  return;
});
</script>

<style scoped>
.text2 {
  display: block;
}
.text3 {
  display: none !important;
}
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.diva {
  width: 78%;
  height: 950px;
  margin: 3vh auto;
  display: flex !important;
  flex-wrap: wrap;
}
.kard {
  width: 25%;
  height: 16%;
  margin-top: 1.5vh;
  margin-left: 8vh;
}
.d1 {
  width: 100%;
  height: 70%;
}
.d1 img {
  width: 20%;
  height: 80%;
}
.d1 p {
  font-size: 0.8rem;
  width: 210px;
}
.d2 {
  margin-top: -2vh;
}
.d2 h6 {
  width: 50%;
  margin-left: 13vh;
  /* border: 1px solid blue; */
}
.btn-success {
  width: 12%;
  padding: 10px;
  position: relative;
  top: 8%;
  left: -3.5%;
}
/* Responnsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    display: block !important;
  }
  .kard {
    width: 90%;
    margin: 2.5vh;
  }
  .d2 h6 {
    width: 50%;
    margin-left: 15.5vh !important;
    /* border: 1px solid blue; */
  }
  .d2 {
    margin-top: -0.5vh;
  }
  .fa-trash-can {
    font-size: 1.1rem !important;
  }
  .btn-success {
    padding: 10px;
    top: -15% !important;
    left: -3% !important;
    width: 15% !important;
    margin-top: -1vh !important;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
}
/* Responnsive 576px */
@media (max-width: 576px) {
  .diva {
    width: 85%;
    display: block !important;
  }
  .kard {
    width: 90%;
    margin: 2.5vh;
  }
  .d2 h6 {
    width: 50%;
    margin-left: 15.5vh !important;
  }
  .btn-success {
    padding: 10px;
    top: -15%;
    left: -4% !important;
    width: 15% !important;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
}
</style>
