<template>
  <Toast position="top-center" />

  <Header1 />

  <p class="text-center text-black pt-5 font-medium font-sans">Savat</p>

  <div
    class="md:w-8/12 w-full h-full md:flex flex-wrap block md:ml-[23rem] m-auto pt-4 pb-36 "
  >
    <div
      class="kard border md:m-3 m-auto mt-2.5 rounded-xl md:w-96 w-11/12 md:h-36   shadow-lg shadow-color1-500/50 hover:opacity-75 "
      v-for="(data, index) in srt"
      :key="data"
    >
      <div class="flex">
        <img :src="data.image" alt="inkas" class="m-5 mx-7 w-1/5 md:h-20 h-20" />
        <p class="py-6 text-[13px] w-2/4 h-[5.5rem] overflow-y-hidden font-sans">{{ data.title }}</p>
        <i
          class="fa-solid fa-trash-can md:text-xl text-lg py-3 md:ml-6 ml-2  text-red-600 cursor-pointer"
          @click="Delete(index)"
        ></i>
      </div>

      <div class="flex pb-6 mt-[-2rem]">
        <h6 class="font-bold md:ps-32 ps-32 w-20 font-sans">${{ data.price }}</h6>
        <div class="flex md:ps-32 ps-[6.6rem]">
          <span class="border-red-500/100 border w-6 h-6 rounded">
            <i
              class="fa-solid fa-minus text-red-600 p-1 ps-[] cursor-pointer"
            ></i>
          </span>
          <p class="px-2 mx-2 w-6 font-sans">{{ data.count }}</p>
          <span class="rounded border border-color1/100 w-6 h-6">
            <i
              class="fa-solid fa-plus text-color1 cursor-pointer p-1 "
            ></i>
          </span>
        </div>
      </div>
    </div>
  </div>

  <section
    class="umumiy border border-x-0 bg-white md:w-8/12 w-full h-20 fixed md:left-[18.5%] left-0 md:bottom-1 bottom-16 flex justify-between rounded-t-lg items-center"
  >
    <ul class="ul py-0">
      <li class="md:pt-1 ml-3 my-1 md:text-base text-[13px] md:w-80 w-[180px] font-sans">
        Umumiy narx : $ {{  }}
      </li>
      <li class="md:pt-1 ml-3 md:text-base text-[13px] font-sans">
        {{ srt?.length }} ta mahsulot
      </li>
    </ul>
    <fwb-button color="default" class="bg-color2 md:mr-5 mr-3 font-sans"
      >Buyurtma berish</fwb-button
    >
  </section>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import { ref, onMounted } from "vue";
import { FwbButton } from "flowbite-vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();
// import { products } from "../user/store/userStore";
// const listProducts = products();

//  // // // //
let srt = ref([]);
// const ff = ref([]);

onMounted(() => {
  srt.value = [];
  srt.value = JSON.parse(localStorage.getItem("savat"));
console.log(srt.value);
  // if (!!srt.value) {
  //   if (!!srt.value)
  //     srt.value.forEach((el) => {
  //       ff.value.push({
  //         count: 1,
  //         id: el.id,
  //         title: el.title,
  //         description: el.description,
  //         price: el.price,
  //         image: el.image,
  //       });
  //     });
  // }

  // Canculator();
});

function Delete(index) {
  srt.value.splice(index, 1);
  if (srt.value.length == 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("savat", JSON.stringify(ff.value));
  }
}
// let total = 0;

// function minus(data) {
//   if (data.count == 1) {
//     return;
//   }
//   data.count--;
//   for (let item of ff.value) {
//     let price1 = (total - item.price) * item.price;
//     total = price1;
//   }
// }

// function plus(data) {
//   data.count++;
//   localStorage.setItem("savat", JSON.stringify(data));

//   for (let item of ff.value) {
//     let price2 = (total += item.price * item.count);
//     total = price2;
//   }
// }

// // Savatdagi barcha mahsulotlarning umumiy narxini hisoblash
// function Canculator() {
//   for (let item of ff.value) {
//     let price3 = (total += item.price * item.count);
//     total = price3;
//   }
// }

const sendtelegram = () => {
  toast.add({
    severity: "success",
    summary: "Xaridingiz uchun raxmat",
    detail: `Maxsulotlar yig'lmoqda`,
    life: 3000,
  });
  localStorage.removeItem("savat");
};
</script>

<style scoped></style>
