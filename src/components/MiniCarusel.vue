<template>
  <div class="card dark:bg-white my-3 md:w-4/5 w-full m-auto ">
    <Carousel
      :value="products"
      :numVisible="6"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000"
      class="ps-38"
    >
      <template #item="slotProps">
        <div
          class= "md:w-[80%] w-[95%] h-72 m-1 text-center py-5 px-3 rounded-xl shadow-lg shadow-color1-600/60 dark:bg-slate-50"
        >
          <div class="mb-3">
            <img
              :src="slotProps.data.image"
              :alt="slotProps.data.title"
              class=" w-20 h-24 shadow-2 m-auto rounded-lg"
            />
          </div>
          <div>
            <p
              class="mb-1 px-0.5 overflow-hidden line-clamp-2 text-dark text-[0.8rem] pt-2 text-left text-black dark:text-white"
            >
              {{ slotProps.data.title }}
            </p>
            <p
              class="mt-2 font-bold text-left mb-1 h-15 text-[15px] dark:text-white"
            >
              {{ slotProps.data.price }} $
            </p>

            <fwb-rating size="sm" :rating="1" :scale="1" class="md:h-6 h-15">
              <template #besideText>
                <p class="ml-2 text-xs text-gray-500 dark:text-white">4.95</p>
              </template>
            </fwb-rating>

            <fwb-button
              color="green"
              class="rounded-lg my-2 sm:ml-36 md:ml-28 ml-[67%]"
              outline
              @click="AddShop(slotProps.data.id)"
            >
              <i class="fa-solid fa-cart-shopping"></i
            ></fwb-button>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel";
import { FwbRating } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";

import { ref, onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((data) => (products.value = data.data));
});

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
<style scoped>

:deep .p-carousel-item{
  padding: 0px;
  margin: 0px;
width: 10% ;
}
</style>
