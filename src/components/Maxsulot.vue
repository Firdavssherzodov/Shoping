<template>
  <Toast
    position="top-center"
    group="pt"
    :pt="{
      container: { style: 'margin-top:8.8vh;' },
    }"
  />

  <section class="Maxsulotlar">
    <div class="diva">
      <div class="div">
        <div
          class="kard border rounded-5 m-2"
          v-for="(data, index) in listProducts.srt"
          :key="data.id"
        >
          <div class="div_img">
            <i
              class="fa-solid fa-heart fs-5 like rounded-5"
              @click="Like(data.id,index)"
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
        <div class="loader loader--style6" title="5">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="24px"
            height="30px"
            viewBox="0 0 24 30"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <rect x="0" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="20" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
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
    life: 1500,
  });
}
function Like(id,index) {
  // if (listProducts.srt[index] == index) {
  // }
   

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
  font-size: 3rem;
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
.kard {
  width: 15%;
  height: 50%;
  border: 1px solid;
}
.div_img {
  width: 100%;
  height: 55%;
  background-color: rgba(128, 128, 128, 0.128);
}
.div_img img {
  width: 60%;
  height: 60%;
  margin: 13% 20%;
}
.kard:hover img {
  padding: 2px;
}
.kard p {
  width: 215px;
  height: 15%;
  overflow: hidden;
  line-clamp: 1;
}
.btn-success {
  position: relative;
  top: 8%;
  left: 60%;
}
.like {
  position: absolute;
  margin-left: 9.7%;
  margin-top: 1vh;
  /* color: #838891; */
}
.like:hover {
  cursor: pointer;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .div {
    margin-top: 1vh;
    width: 95%;
    height: 100%;
  }
  .kard {
    margin: 1vh !important;
    width: 45%;
    height: 37%;
  }
  .div_img img {
    width: 50%;
    height: 55%;
    margin: 20% 23%;
  }
  .div_img {
    height: 50%;
  }
  p {
    margin-top: 4vh !important;
    font-size: 0.75rem !important;
    width: 90% !important;
    height: 40px;
    overflow: hidden;
    line-clamp: 1;
  }
  h5 {
    font-size: 1rem;
  }
  .Rating {
    display: none;
  }
  .btn-success {
    padding: 10px;
    top: 4%;
    left: 55%;
    width: 30%;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
  .Maxsulotlar {
    height: 1850px !important;
  }
  .like {
    position: absolute;
    margin-left: 34%;
    font-size: 1.25rem !important;
    margin-top: 1vh;
    /* color: #838891; */
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .div {
    width: 95%;
    height: 100%;
  }
  .kard {
    margin: 1vh !important;
    margin-top: 0vh !important;
    width: 45%;
    height: 37%;
  }
  .div_img img {
    vertical-align: noneа !important;
    width: 50%;
    height: 55%;
    margin: 20% 23%;
  }
  .div_img {
    height: 50%;
  }
  p {
    margin-top: 2vh !important;
    font-size: 0.75rem !important;
    width: 96.5% !important;
    height: 40px !important;
    overflow: hidden;
    line-clamp: 1;
  }
  h5 {
    font-size: 1rem;
  }
  .Rating {
    display: none;
  }
  .btn-success {
    padding: 10px;
    top: 4%;
    left: 55%;
    width: 30%;
    font-size: 0.5rem;
  }
  .btn-success i {
    font-size: 0.9rem;
  }
  .Maxsulotlar {
    height: 1850px !important;
  }
  .like {
    position: absolute;
    margin-left: 34%;
    font-size: 1.3rem;
    margin-top: 1vh;
    color: #838891;
  }
}
</style>
