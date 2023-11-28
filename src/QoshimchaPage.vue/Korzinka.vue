<template>
  <Header1 />
  <!-- <h6 class="text-center py-5 erorre">
    Hali hech qanday maxsulot olganingiz yuq!
  </h6> -->

  <div class="diva">
    <div class="kard border rounded-5" v-for="(data, index) of srt" :key="data">
      <div class="d1 d-flex">
        <img class="div_img my-4 ms-5 me-4" :src="data.image" />
        <p class="py-4 mt-3 d-block" style="font-size: 0.8rem">
          {{ data.title }}
        </p>
        <!-- <p class="mt-4">$ {{ data.price }} </p> -->
      </div>
      <div class="d2 d-flex mx-2">
        <span class="span my-3 mx-2">
          <i class="fa-solid fa-minus fs-5 px-3" @click="minus(index)"></i>
          <input type="text" class="px-1" style="width: 40px" v-model="counter" />
          <i class="fa-solid fa-plus fs-5 px-3" @click="plus(index)"></i>
        </span>
        <h6 class="py-3 pe-3 w-25 fw-bold">$ {{ data.price }}</h6>
        <i
          class="fa-solid fa-xmark fs-3 px-5 py-3"
          style="color: #e50606"
          @click="Delete(index)"
        ></i>
      </div>
    </div>
  </div>
  <section class="umumiy border border-start-0 border-end-0">
    <ul class="ul">
      <li>Umumiy narx : {{ price }}</li>
      <li>Maxsulotlar soni : {{ srt.length }}</li>
    </ul>
    <button class="btn btn-primary p-2">Rasmiylashtirish</button>
  </section>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import { ref, onMounted } from "vue";

let counter = 1;

let srt = ref([]);

onMounted(() => {
  srt.value = JSON.parse(localStorage.getItem("savat")) || [];
});

function Delete(index) {

console.log(srt.value.splice(index, 1));
srt.value.splice(index,1);

localStorage.setItem("savat", JSON.stringify(srt));
}

function minus(index) {

  if (srt.value[index].counter > 1) {
    srt.value[index].counter--;
  }
}
function plus(index) {

  if (srt.value[index]) {
    srt.value[index].counter += 1;
    counter = srt.value[index].counter;
  }
}


// Savatdagi barcha mahsulotlarning umumiy narxini hisoblash
function calculateTotalPrice() {

  for (let item1 of srt.value) {
    console.log(item1);
    total += item1.price * item1.counter;
  }
  let total = 0;

  return total;
}

const price = calculateTotalPrice();


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
  display: flex;
  flex-wrap: wrap;

  /* justify-content: space-around;  */
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
.span {
  width: 40%;
  height: 100%;
  display: block;
}
span::selection {
  display: none;
}
.span i {
  cursor: pointer;
}

.fa-xmark {
  cursor: pointer;
}
.umumiy {
  background-color: white;
  width: 67%;
  height: 10vh;
  position: fixed;
  left: 14.5%;
  bottom: 1px;
  display: flex;
  border-radius: 10px !important;
  justify-content: space-between;
  align-items: center;
}
.ul {
  list-style: none;
}
/* Responnsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    display: block !important;
  }
  .kard {
    width: 90%;
    height: 20%;
    margin-top: 1.5vh;
    margin-left: 2vh;
  }
  .span {
    align-items: center;
    width: 40%;
    height: 50%;
    margin-left: 10% !important;
  }

  .d2 h6 {
    padding-top: 2.5vh !important;
  }
  .fa-xmark {
    margin-top: 2vh;
    margin-left: 2.5vh;
    padding: 0px !important;
    font-size: 1.8rem !important;
    cursor: pointer;
    width: 30px !important;
    height: 30px;
  }
  .span input {
    padding-left: 5px !important;
    width: 31% !important;
  }
  .d1 p {
    width: 90% !important;
    font-size: 0.7rem !important;
  }
  .fa-minus {
    margin-left: -2vh !important;
  }

  .umumiy {
    width: 100%;
    bottom: 7.5vh;
    left: 0%;
  }
  .ul li {
    padding-left: 2vh;
    font-size: 0.8rem;
  }
  .umumiy button {
    margin-right: 3vh;
    font-size: 0.5rem;
  }
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
  .span {
    align-items: center;
    width: 40%;
    height: 50%;
    margin-left: 10% !important;
  }

  .d2 h6 {
    padding-top: 2.5vh !important;
  }
  .fa-xmark {
    margin-top: 2vh;
    margin-left: 2.5vh;
    padding: 0px !important;
    font-size: 1.8rem !important;
    cursor: pointer;
    width: 30px !important;
    height: 30px;
  }
  .span input {
    padding-left: 5px !important;
    width: 31% !important;
  }
  .d1 p {
    width: 90% !important;
    font-size: 0.7rem !important;
  }
  .fa-minus {
    margin-left: -2vh !important;
  }
  .umumiy {
    width: 100%;
    bottom: 7.7vh;
    left: 0%;
  }
  .ul li {
    padding-left: 2vh;
    font-size: 0.8rem;
  }
  .umumiy button {
    margin-right: 2.5vh;
    font-size: 0.6rem;
  }
}
</style>
