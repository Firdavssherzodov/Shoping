<template>
  <div class="diva ">
    <form class="m-auto my-3 square border border-primary rounded-5">
      <input
        type="text"
        class="rounded-5 px-3 py-3"
        placeholder="Qidiruv"
        v-model="search"
      />
    </form>
    <button class="btn btn-primary">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
  </div>
</template>

<script setup>
import srt from "../user/store/userStore";
import { onMounted, ref, watchEffect } from "vue";
let search = ref("");


onMounted(() => {

  watchEffect(() => {
    let data2 = JSON.parse(JSON.stringify(srt.value));

    let Data1 = data2.filter((list) => {
      return list.title.toUpperCase().includes(search.value.toUpperCase());
    });

  });
});
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 6.5vh;
  position: relative;
  display: flex;
  align-items: center;
}
form {
  width: 50%;
  height: 60%;
  border: 1px solid;
  display: flex;
  z-index: 2233;
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
  form {
margin-left: 3.5vh !important;
    width: 80%;
    border: 1px solid blue;
  }

  form:focus {
    z-index: 33334;
  }
  button {
    left: 77% !important;
    height:70% !important;
  }
}
/* Responsive 576px*/
@media (max-width: 576px) {
  .diva {
    margin-top: 4vh;
    z-index: 33 !important  ;
  }
  form {
    margin-left: 3vh !important;
    width: 80%;
    height: 70%;
    z-index: 22 !important;
  }
  button {
    left: 80% ;
    height:70% !important;
  }
}
</style>
