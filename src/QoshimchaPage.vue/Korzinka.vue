<template>
  <!-- <Toast position="top-center" /> -->

  <Header1 />
  <div class="w-full h-full ">
    <p class="text-center text-gray-600">Savat</p>
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
      <div class="flex">
        <h6 class="fw-bold py-2">${{ data.price }}</h6>
        <div class="flex">
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

  <section
    class="umumiy border border-x-0 bg-white md:w-7/12 w-full h-20 fixed md:left-[25%] left-0 md:bottom-1 bottom-16 flex justify-between
      rounded-t-lg items-center"
  >
    <ul class="ul py-0">
      <li class="md:pt-1 ml-3 my-1 md:text-base text-[13px] md:w-80 w-[200px]">
        Umumiy narx : $ {{ total }}
      </li>
      <li class="md:pt-1 ml-3 md:text-base text-[13px]">
        {{ srt?.length }} ta mahsulot
      </li>
    </ul>
    <fwb-button color="default" class="bg-color2 md:mr-5 mr-3  "
      >Buyurtma berish</fwb-button
    >
  </section>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import { ref, onMounted } from "vue";
import { FwbButton } from "flowbite-vue";
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

<style scoped></style>
