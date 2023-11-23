<template>
  <section class="Maxsulotlar">
    <div class="diva">
      <div class="div">
        <div
          class="kard border rounded-5 m-2 ms-5"
          v-for="data in srt"
          :key="data"
        >
          <div class="div_img">
            <img :src="data.image" alt="inkas" />
            <p class="mt-5 mx-2" style="font-size: 0.8rem">{{ data.title }}</p>
            <h5 class="mx-2 text-dark">{{ data.price }} $</h5>
            <Rating :cancel="false" class="ms-2 mt-3 Rating" />
            <button class="btn btn-success mx-2 my-2">
              <i class="fa-solid fa-plus" style="color: #edeff3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <button class="btn btn-primary my-5" style="position: relative; left: 80%;">yana</button> -->
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
let isActive = ref(false);
let srt = ref([]);
console.log(srt);

const api = "https://fakestoreapi.com/products";

axios.get(api).then((resp) => {
  resp.data.slice(0, 20).forEach((element) => {
    srt.value.push(element);
  });
});

import Rating from "primevue/rating";
</script>
<style scoped>
.diva {
  width: 100%;
  height: 900px;
}
.div {
  width: 77%;
  height: 100%;
  /* border: 1px solid; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.kard {
  width: 15%;
  height: 50%;
  border: 1px solid;
}
.div_img {
  width: 100%;
  height: 55%;
  background-color: rgba(128, 128, 128, 0.128);
}
.div_img img {
  width: 60%;
  height: 60%;
  margin: 13% 20%;
}
.kard:hover img {
  padding: 2px;
}
.kard p {
  width: 100%;
  height: 15%;
}
.btn-success {
  position: relative;
  top: 8%;
  left: 60%;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .div {
    margin-top: 1vh;
    width: 95%;
    height: 100%;
    justify-content: space-around;
  }
  .kard {
    margin: 1vh !important;
    width: 45%;
    height: 37%;
  }
  .div_img img {
    width: 50%;
    height: 55%;
    margin: 20% 23%;
  }
  .div_img {
    height: 50%;
  }
  p {
    margin-top: 4vh !important;
    font-size: 0.75rem !important;
    width: 100%;
    height: 30px !important;
  }
  h5 {
    font-size: 1rem;
  }
  .Rating {
    display: none;
  }
  .btn-success {
    padding: 10px;
    top: 4%;
    left: 55%;
    width: 30%;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
  .Maxsulotlar {
    height: 1850px !important;
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .div {
    width: 95%;
    height: 100%;
    justify-content: space-around;
  }
  .kard {
    margin: 1vh !important;
    width: 45%;
    height: 37%;
  }
  .div_img img {
    width: 50%;
    height: 55%;
    margin: 20% 23%;
  }
  .div_img {
    height: 50%;
  }
  p {
    margin-top: 4vh !important;
    font-size: 0.75rem !important;
    width: 100%;
  }
  h5 {
    font-size: 1rem;
  }
  .Rating {
    display: none;
  }
  .btn-success {
    padding: 10px;
    top: 4%;
    left: 55%;
    width: 30%;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
  .Maxsulotlar {
    height: 1850px !important;
  }
}
</style>
