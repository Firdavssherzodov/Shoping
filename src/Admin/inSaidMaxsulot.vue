<template>
  <Toast position="top-center" group="pt" />

  <section class="Maxsulotlar md:mb-2 mb-20 md:mt-0 mt-20">
    <div class="">
      <div
        class="div sm:w-full md:w-[80%] w-[98%] h-full m-auto flex flex-wrap relative"
      >
        <div
          class="kard sm:m-3 sm:w-[30%] sm:h-[40%] md:h-[40%] md:w-[15%] w-[45%] md:m-3 m-2 rounded-xl hover:shadow-xl shadow-color1-500/50 cursor-pointer"
          v-for="(data, index) in listProducts.srt"
          :key="data.id"
        >
          <div
            class="div_img rounded-xl rounded-b-none bg-gray-100 sm:h-[55%] h-[50%] border relative"
          >
            <img
              :src="data.image"
              alt="inkas"
              class="rounded-xl sm:w-28 w-24 sm:h-32 h-28 m-auto sm:my-7 my-3.5"
            />
            <p
              class="pt-6 mx-2 overflow-hidden line-clamp-2 h-[60px] text-[0.8rem] text-black dark:text-white font-sans"
            >
              {{ data.title }}
            </p>
            <h5
              class="mx-2 pt-2 text-dark font-semibold dark:text-white font-sans"
            >
              {{ data.price }} $
            </h5>
            <fwb-rating size="sm" :rating="4" class="pt-[0.30rem] px-2">
              <template #besideText>
                <p
                  class="ml-2 text-xs font-medium text-gray-500 dark:text-white font-sans"
                >
                  4.95
                </p>
              </template>
            </fwb-rating>
            <fwb-button
              color="green"
              class="rounded-lg my-2.5 sm:ml-24 md:ml-24 ml-[25%]"
              outline
            >
              <i class="pi pi-upload text-sm"></i
            ></fwb-button>

            <fwb-button
              color="red"
              class="rounded-lg my-2.5 ml-5"
              outline
              @click="Delete(index)"
            >
              <i class="fa-solid fa-trash-can text-sm"></i
            ></fwb-button>
          </div>
        </div>
        <!-- loading -->
        <fwb-spinner size="12" class="loader mx-auto my-40" />
        <!-- loading -->
      </div>
    </div>
  </section>

  <span class="my-14">.</span>
</template>

<script setup>
import { FwbRating } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { FwbSpinner } from "flowbite-vue";
import { FwbPagination } from "flowbite-vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { products } from "../userStore/userStore.js";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const currentPage = ref(1);

const listProducts = products();

// let id = ref(null);
onMounted(() => {
  listProducts.srt = [];

  axios.get("https://fakestoreapi.com/products").then((resp) => {
    listProducts.srt = resp.data.slice(0, 18);
    if (resp.data) {
      resp.data.slice(0, 12).forEach((element) => {
        if (!!resp.data) {
          let loader = document.querySelector(".loader");
          loader.classList.add("hidden");
        } else {
          let loader = document.querySelector(".loader");
          loader.classList.remove("hidden");
        }
      });
    }
  });
});

function Delete(index) {
  listProducts.srt.splice(index, 1);

  toast.add({
    severity: "error",
    summary: "Maxsulot o'chirildi",
    detail: "",
    group: "pt",
    life: 1000,
  });
}
</script>
<style scoped>
.kard:hover img {
  transition: 0.2s;
  transform: scale(1.05);
}
</style>
