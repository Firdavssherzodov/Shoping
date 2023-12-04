<template>
  <div class="diva">
    <form class="m-auto my-3 square border border-primary rounded-5">
      <input
        type="text"
        class="rounded-5 px-3 py-3"
        placeholder="Qidiruv"
        v-model="search"
      />
      <button class="btn btn-primary">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
</template>

<script setup>
import { srt } from "../user/store/userStore";
import { onMounted,ref } from 'vue'
 let search = ref('')

 onMounted(()=>{
  // 
  srt.value.filter((rect) => {

    console.log(rect.title);
 let Qidiruv = search.value.toUpperCase()
console.log(Qidiruv);
    

 
    });
    // 
 })
 

 
 
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 6.5vh;
  position: relative;
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
  height: 100%;
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
    margin: auto;
    width: 90%;
    border: 1px solid blue;
  }

  form:focus {
    z-index: 33334;
  }
  button {
    height: 100% !important;
  }
}
/* Responsive 576px*/
@media (max-width: 576px) {
  .diva {
    margin-top: 4vh;
    z-index: 33 !important  ;
  }
  form {
    margin: auto;
    width: 90%;
    height: 70%;
    z-index: 22 !important;
  }
}
</style>
