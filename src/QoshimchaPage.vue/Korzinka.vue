<template>
<Toast position="top-center"/>

  <Header1 />
  <div class="diva ">
<div class="text1 text-center" >
    <p class="text-center mt-5 ">
      Hali hech qanday maxsulot olganingiz yuq! <p>&#128512;</p>
    </p>
    <router-link to="/">
    <button class="btn btn-primary p-2 my-4 pe-3">
      <i class="fa-solid fa-arrow-left pe-2" style="color: #f5f5f5;"></i>
      Bosh Sahifaga</button>
    </router-link>
  </div>


<div class="kard border rounded-5" v-for="(data,index) in ff" :key="data">
<div class="d1 d-flex">
  <img :src="data.image" alt="inkas" class="mx-4 my-3">
  <p class="py-4">{{ data.title }}</p>
  <i class="fa-solid fa-trash-can fs-5 my-4 me-4" style="color: #eb0505; cursor: pointer;" @click="Delete(index)"></i>
</div>
<div class="d2 d-flex">
  <h6 class="fw-bold py-2">${{ data.price }}</h6>
  <div class="counter d-flex">
    <span class="s1 rounded">
    <i class="fa-solid fa-minus  text-primary border-primary ps-2 py-2" style="cursor: pointer;" @click="minus(data)"></i>
  </span>
<p class="px-2 mx-2 mt-1" style="width: 25px;">{{ data.count }}</p>
<span class="s2 rounded">
    <i class="fa-solid fa-plus text-primary border-primary ps-2 py-2" style="cursor: pointer;" @click="plus(data)"></i>
  </span>
  </div>
</div>


</div>

      
  </div>
  <section class="umumiy border border-start-0 border-end-0">
    <ul class="ul">
      <li class="w-100">Umumiy narx : $ {{ total }}</li>
      <li> {{ ff?.length }} ta mahsulot</li>
    </ul>
    <button class="btn btn-primary p-2"  @click="sendtelegram">Rasmiylashtirish</button>
  </section>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import { ref, onMounted } from "vue";

import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
const toast = useToast();
import {products} from '../user/store/userStore'
const listProducts = products()

    
const sendtelegram = ()=>{
    toast.add({ severity: 'success', summary: 'Xaridingiz uchun raxmat', detail: `Maxsulotlar yig'lmoqda`, life: 4000 });
}





//  // // // //
let srt = ref([]);
const ff = ref([]);

onMounted(() => {
  srt.value = []

  srt.value = JSON.parse(localStorage.getItem("savat"));
  if (!!srt.value)
    srt.value.forEach((el) => {
      ff.value.push({
        count: 1,
        id: el.id,
        title: el.title,
        description: el.description,
        price: el.price,
        image: el.image,
      });
    });
  // }

  // if (ff.value.length == 0) {
  //   let text = document.querySelector(".text1");
  //   text.classList.add("text2");
  // } else {
  //   let text = document.querySelector(".text1");
  //   text.classList.add("text3");
  // }

  // Data();

  Canculator();
});

function Delete(index) {
  ff.value.splice(index, 1);
  if (ff.value.length == 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("savat", JSON.stringify(ff.value));
  }
}
let total = 0;

function minus(data) {
  if (data.count == 1) {
    return;
  }

  data.count--;
  for (let item of ff.value) {
    let price1 = (total - item.price) / item.price;
    total = price1;
  }
}

function plus(data) {
  data.count++;
  localStorage.setItem("savat", JSON.stringify(data));

  for (let item of ff.value) {
    let price2 = (total += item.price * item.count);
    total = price2;
  }
}

// Savatdagi barcha mahsulotlarning umumiy narxini hisoblash
function Canculator() {
  for (let item of ff.value) {
    let price3 = (total += item.price * item.count);

    total = price3;
  }
}


</script>

<style scoped>
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
  .d1{
    width: 100%;
    height: 70%;
  }
  .d1 img{
    width: 20%;
    height: 80%;
  }
  .d1 p{
    font-size: 0.8rem;
    width: 210px;
  }
  .d2{
    margin-top: -2vh;
  }
  .d2 h6{
    width: 50%;
    margin-left: 13vh;
    /* border: 1px solid blue; */
  }
  .counter{
    width: 50%;
    margin-left: 1vh;
    /* border: 1px solid blue;   */
  }
  .s1,.s2{
    width: 30px;
    height: 33px;
    background-color: rgba(0, 0, 255, 0.131);
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
  padding-top: 2vh;
  padding-left: 0px !important;
}
/* Responnsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    display: block !important;
  }
  .kard{
    width: 90%;
    margin: 2.5vh;
  }
  .d2 h6{
    width: 50%;
    margin-left: 15.5vh !important;
    /* border: 1px solid blue; */
  }
  .d2{
    margin-top: -0.5vh;
  }
  .counter{
    margin-left: -2vh;
  }
  .fa-trash-can{
    font-size: 1.1rem !important;
  }
  .umumiy {
    width: 100%;
    bottom: 7.5vh;
    left: 0% !important;
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
    width: 85%;
    display: block !important;
  }
  .kard{
    width: 90%;
    margin: 2.5vh;
  }
  .d2 h6{
    width: 50%;
    margin-left: 15.5vh !important;
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
