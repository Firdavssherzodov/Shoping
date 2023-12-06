<template>
  <div class="diva">
    <div class="form m-auto my-3 square border border-primary rounded-5">
      <input
        type="text"
        class="rounded-5 px-3 py-3"
        placeholder="Qidiruv"
        v-model="search"
      />
    </div>
    <button class="btn btn-primary rounded-5" @click="Search()">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<script setup>
import { products } from "../user/store/userStore";
import { onMounted, ref, watchEffect } from "vue";

const product_list = products();

let search = ref("");
let data2 = JSON.parse(JSON.stringify(product_list.srt));

function Search() {
  watchEffect(() => {
    let Data1 = data2.filter((list) => {
      return list.title.toUpperCase().includes(search.value.toUpperCase());
    });

    product_list.srt = [...Data1];
  });
}
onMounted(() => {
  let data2 = JSON.parse(JSON.stringify(product_list.srt));

  watchEffect(() => {
    let Data1 = data2.filter((list) => {
      return list.title.toUpperCase().includes(search.value.toUpperCase());
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
  }
  .form {
    margin-left: 3.5vh !important;
    width: 80%;
    border: 1px solid blue;
    z-index: 333232244;
  }

  form:focus {
    z-index: 3333422;
  }
  button {
    left: 77% !important;
    height: 70% !important;
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
    z-index: 22 !important;
  }
  button {
    left: 80%;
    height: 70% !important;
  }
}
</style>
