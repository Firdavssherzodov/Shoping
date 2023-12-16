<template>
  <!-- <Toast position="top-center" /> -->

  <Header1 />
  <div class="diva">
    <div class="text1 text-center m-auto">
      <p class="text-center mt-5">Hali hech qanday maxsulot olganingiz yuq!</p>
      <router-link to="/">
        <button class="btn btn-primary p-2 my-4 pe-3">
          <i class="fa-solid fa-arrow-left pe-2" style="color: #f5f5f5"></i>
          Bosh Sahifaga
        </button>
      </router-link>
    </div>

    <div class="kard border rounded-5" v-for="(data, index) in ff" :key="data">
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
        <div class="counter d-flex">
          <span class="s1 rounded" style="background-color: #eb0505">
            <i
              class="fa-solid fa-minus text-white border-primary ps-0 py-2"
              style="cursor: pointer"
              @click="minus(data)"
            ></i>
          </span>
          <p class="px-2 mx-2 mt-1" style="width: 25px">{{ data.count }}</p>
          <span class="s2 rounded">
            <i
              class="fa-solid fa-plus text-primary border-primary ps-0 py-2"
              style="cursor: pointer"
              @click="plus(data)"
            ></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <section class="umumiy border border-x-0">
    <ul class="ul py-0">
      <li class="pt-1">Umumiy narx : $ {{ total }}</li>
      <li
        class="pt-1"
      >
        {{ srt?.length }} ta mahsulot
      </li>
    </ul>
      <fwb-button color="default" class="bg-color2">Buyurtma berish</fwb-button>

  </section>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import { ref, onMounted } from "vue";
import { FwbButton } from 'flowbite-vue'
// import Toast from "primevue/toast";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();
import { products } from "../user/store/userStore";
const listProducts = products();

//  // // // //
let srt = ref([]);
const ff = ref([]);

onMounted(() => {
  srt.value = [];
  srt.value = JSON.parse(localStorage.getItem("savat"));

  if (!!srt.value) {
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
  }

  if (ff.value.length == 0) {
    let text = document.querySelector(".text1");
    text.classList.add("text2");
  } else {
    let text = document.querySelector(".text1");
    text.classList.add("text3");
  }

  Canculator();
  // TakrorId();
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
    let price1 = (total - item.price) * item.price;
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
// TakrorId
// function TakrorId() {
//   let uniqueItems = {};

//   for (let item of ff.value) {
//     if (uniqueItems[item.id]) {
//       uniqueItems[item.id].count++;
//     } else {
//       uniqueItems[item.id] = item;
//       uniqueItems[item.id].count = 1;
//     }
//   }
//   ff.value = uniqueItems;
//   console.log(uniqueItems);
//   console.log(ff.value);
// }
// Savatdagi barcha mahsulotlarning umumiy narxini hisoblash
function Canculator() {
  for (let item of ff.value) {
    let price3 = (total += item.price * item.count);
    total = price3;
  }
}

// const sendtelegram = () => {
//   toast.add({
//     severity: "success",
//     summary: "Xaridingiz uchun raxmat",
//     detail: `Maxsulotlar yig'lmoqda`,
//     life: 3000,
//   });
//   localStorage.removeItem("savat");
// };
</script>

<style scoped>


/* Responnsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    display: block !important;
    margin: 0 !important;
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
  .counter {
    margin-left: -2vh;
  }
  .fa-trash-can {
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
  .kard {
    width: 90%;
    margin: 2.5vh;
  }
  .d2 h6 {
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
