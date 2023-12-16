<template>
  <!-- <Toast position="top-center" group="pt" /> -->

  <section class="Maxsulotlar">
    <div class="diva row">
      <div class="div sm:w-[77%] w-full h-full m-auto flex flex-wrap ">
        <div
          class="kard sm:m-3 sm:w-[15%] sm:h-2/5 w-[45%] m-2"
          v-for="(data, index) in listProducts.srt"
          :key="data.id"
        >
          <!-- {{ activeIndexes }} -->
          <div class="div_img rounded-xl bg-gray-100 h-[55%] border relative">
            <i
              :class="[
                activeIndexes.includes(index)
                  ? 'text-danger'
                  : 'text-secondary',
              ]"
              class="fa-solid fa-heart text-xl absolute sm:left-44 left-[80%] py-1 px-1 cursor-pointer"
              @click="Like(data.id, index)"
            ></i>
            <img
              :src="data.image"
              alt="inkas"
              class="rounded-xl w-28 h-32 m-auto my-7"
            />
            <p class="pt-6 mx-2 overflow-hidden line-clamp-1 text-[0.8rem]">
              {{ data.title }}
            </p>
            <h5 class="mx-2 pt-2 text-dark font-bold">{{ data.price }} $</h5>
            <Rating :cancel="false" class="ms-2 mt-3 Rating" />

            <fwb-button
              color="green"
              class="rounded-lg my-3 sm:ml-40 ml-32"
              outline
              @click="AddShop(data.id)"
            >
              <i
                class="fa-solid fa-cart-shopping"
                
              ></i
            ></fwb-button>
          </div>
        </div>
        <!-- loading -->
        <div class="loader loader--style3" title="2">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#000"
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <!-- loading -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import Rating from "primevue/rating";
import { products } from "../user/store/userStore";
// import Toast from "primevue/toast";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

const listProducts = products();

// let id = ref(null);
onMounted(() => {
  axios.get("https://fakestoreapi.com/products").then((resp) => {
    // console.log(resp.data);
    if (resp.data) {
      resp.data.forEach((element) => {
        if (!!resp.data) {
          listProducts.srt.push(element);
          let loader = document.querySelector(".loader");
          loader.classList.add("loading");
        } else {
          let loader = document.querySelector(".loader");
          loader.classList.remove("loading");
        }
        // console.log(element);
      });
    }
  });
});

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
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  font-size: 2rem;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}
.loading {
  display: none;
}

/*
  Set the color of the icon
*/
svg path,
svg rect {
  fill: #3b71ca;
  /* fill: #FF6700; */
}
/* loading */
.diva {
  width: 100%;
  height: 900px;
}
.overflow {
  overflow: none !important;
  line-clamp: none;
}
</style>
