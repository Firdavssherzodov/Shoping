<template>
  <div class="diva">
    <div class="form m-auto my-3 square border border-primary rounded-5">
      <input
        type="text"
        class="rounded-5 px-3 py-3"
        placeholder="Qidiruv"
        v-model="Search"
      />
    </div>
    <button class="btn btn-primary rounded-5" @click="Searchfunc()">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
  <p
    style="position: absolute; top: 30%; left: 30%; display: none"
    class="error"
  >
    Siz qidirgan topilmadi
  </p>
</template>

<script setup>

import { products } from "../user/store/userStore";
import { onBeforeMount, ref, watchEffect } from "vue";

const product_list = products();

let Search = ref("");
let data1 = JSON.parse(JSON.stringify(product_list.srt));

function Searchfunc() {
  let Data1 = data1.filter((list) => {
    return list.title.toUpperCase().includes(Search.value.toUpperCase());
  });
  product_list.srt = [...Data1];
}

let data2 = JSON.parse(JSON.stringify(product_list.srt));

onBeforeMount(() => {
  watchEffect(() => {
    let Data1 = data2.filter((list) => {
      return list.title.toUpperCase().includes(Search.value.toUpperCase());
    });
    product_list.srt = [...Data1];
  });
});
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 6.5vh;
  position: relative !important;
  display: flex;
  align-items: center;
}
.form {
  width: 50%;
  height: 60%;
  border: 1px solid;
  display: flex;
  /* z-index: 2233; */
}
input {
  padding-top: 30vh;
  width: 100%;
  height: 100%;
  border: none;
}
button {
  position: absolute;
  left: 74%;
  height: 60%;
  z-index: 3223;
}
/* Responsive 385px*/
@media (max-width: 385px) {
  .diva {
    margin-top: 4vh !important;
  }
  .diva:focus {
    position: relative !important;
    z-index: 999999;
  }
  .form {
    margin-left: 3.5vh !important;
    width: 80%;
    border: 1px solid blue;
    z-index: 22222 !important;
  }

  form:focus {
    z-index: 99999999 !important;
  }
  button {
    left: 77% !important;
    height: 70% !important;
    z-index: 1000000;
  }
}
/* Responsive 576px*/
@media (max-width: 576px) {
  .diva {
    margin-top: 4vh;
    z-index: 333222 !important  ;
  }
  .form {
    margin-left: 3vh !important;
    width: 80%;
    height: 70%;
    /* z-index: 22222 !important; */
  }
  button {
    left: 80%;
    height: 70% !important;
    z-index: 1000000;
  }
}
</style>
