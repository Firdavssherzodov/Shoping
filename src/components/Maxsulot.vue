<template>
  <!-- <Toast position="top-center" group="pt" /> -->

  <section class="Maxsulotlar bg-white dark:bg-white">
    <div class="">
      <div
        class="div sm:w-full md:w-[80%] w-[98%] h-full m-auto flex flex-wrap relative"
      >
        <div
          class="kard sm:m-3 sm:w-[30%] sm:h-[40%] md:h-[40%] md:w-[15%] w-[45%] md:m-3 m-2 rounded-xl shadow-lg shadow-color1-500/50"
          v-for="(data, index) in listProducts.srt"
          :key="data.id"
        >
          <!-- {{ activeIndexes }} -->
          <div
            class="div_img rounded-xl bg-gray-100 sm:h-[55%] h-[50%] border relative"
          >
            <i
              :class="[
                activeIndexes.includes(index)
                  ? 'text-danger'
                  : 'text-secondary',
              ]"
              class="fa-regular fa-heart text-xl absolute sm:left-42 left-[80%] py-1 px-1 cursor-pointer text-gray-400"
              @click="Like(data.id, index)"
            ></i>
            <img
              :src="data.image"
              alt="inkas"
              class="rounded-xl sm:w-28 w-24 sm:h-32 h-28 m-auto sm:my-7 my-3.5"
            />
            <p
              class="pt-6 mx-2 overflow-hidden line-clamp-2 h-[60px] text-[0.8rem] dark:text-white"
            >
              {{ data.title }}
            </p>
            <h5 class="mx-2 pt-2 text-dark font-semibold dark:text-white">
              {{ data.price }} $
            </h5>
            <fwb-rating size="sm" :rating="4" class="pt-[0.30rem] px-2">
              <template #besideText>
                <p
                  class="ml-2 text-xs font-medium text-gray-500 dark:text-white"
                >
                  4.95
                </p>
              </template>
            </fwb-rating>
            <fwb-button
              color="green"
              class="rounded-lg my-2.5 sm:ml-36 md:ml-40 ml-[67%]"
              outline
              @click="AddShop(data.id)"
            >
              <i class="fa-solid fa-cart-shopping"></i
            ></fwb-button>
          </div>
        </div>
        <!-- loading -->
        <fwb-spinner size="12" class="loader mx-auto my-40" />
        <!-- loading -->
      </div>
    </div>
  </section>

  <fwb-pagination
    v-model="currentPage"
    :total-pages="5"
    show-icons
    class="sm:my-10 my-10 sm:py-10 pb-16 text-center align-text-bottom page"
  ></fwb-pagination>
</template>

<script setup>
import { FwbRating } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { FwbSpinner } from "flowbite-vue";
import { FwbPagination } from "flowbite-vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { products } from "../user/store/userStore";
// import Toast from "primevue/toast";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();
const currentPage = ref(1);

Pagination(currentPage);
console.log(currentPage.value);
const listProducts = products();

// let id = ref(null);
onMounted(() => {
  axios.get("https://fakestoreapi.com/products").then((resp) => {
    // console.log(resp.data);
    if (resp.data) {
      resp.data.slice(0, 12).forEach((element) => {
        if (!!resp.data) {
          listProducts.srt.push(element);
          let loader = document.querySelector(".loader");
          loader.classList.add("hidden");
        } else {
          let loader = document.querySelector(".loader");
          loader.classList.remove("hidden");
        }
        // console.log(element);
      });
    }
  });
});

function Pagination(pagination) {
  console.log(pagination.value);
  axios.get("https://fakestoreapi.com/products").then((resp) => {
    let DaTA = resp.data;

    if (pagination == 2) {
      DaTA.slice(12, 20).forEach((el) => {});
    }
  });
}

function AddShop(idw) {
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
}

const activeIndexes = ref([]);
function Like(id, index) {
  if (activeIndexes.value.includes(index)) {
    activeIndexes.value.forEach((el, idx) => {
      if (el == index) {
        activeIndexes.value.splice(index, 1);
      }
    });
  } else {
    activeIndexes.value.push(index);
  }

  axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
    listProducts.favorites.push(resp.data);
    localStorage.setItem("likes", JSON.stringify(listProducts.favorites));
  });
}
</script>
<style scoped>
.diva {
  width: 100%;
  height: 900px;
}
.overflow {
  overflow: none !important;
  line-clamp: none;
}
</style>
