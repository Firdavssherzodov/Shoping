<template>
  <Toast position="top-center" group="pt" />

  <section class="Maxsulotlar">
    <div class="diva">
      <div class="div">
        <div
          class="kard rounded-5 m-2"
          v-for="(data, index) in listProducts.srt"
          :key="data.id"
        >
          <!-- {{ activeIndexes }} -->
          <div class="div_img rounded-5">
            <i
              :class="[
                activeIndexes.includes(index)
                  ? 'text-danger'
                  : 'text-secondary',
              ]"
              class="fa-solid fa-heart fs-5 like rounded-5"
              @click="Like(data.id, index)"
            ></i>
            <img :src="data.image" alt="inkas" class="rounded-5" />
            <p class="mt-5 mx-2" style="font-size: 0.8rem">{{ data.title }}</p>
            <h5 class="mx-2 text-dark fw-bold">{{ data.price }} $</h5>
            <Rating :cancel="false" class="ms-2 mt-3 Rating" />
            <button
              class="btn btn-success btn btn-outline-success ripple-surface-dark mx-2 my-2"
              @click="AddShop(data.id)"
            >
              <i
                class="fa-solid fa-cart-shopping text-seccess"
                style="color: #14a44d"
              ></i>
            </button>
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
import axios from "axios";
import { ref, onMounted } from "vue";
import Rating from "primevue/rating";
import { products } from "../user/store/userStore";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();

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
.div {
  width: 77%;
  height: 100%;
  /* border: 1px solid; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
