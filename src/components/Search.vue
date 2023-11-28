<template>
  <div class="diva">
    <form class="m-auto my-3 square border border-primary rounded-5">
      <input type="text" class="rounded-5 px-3" placeholder="Qidiruv"/>
      <button class="btn btn-primary">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
</template>

<script setup>

// import { ref} from 'vue';
// let homeInput =ref("")
// let product = ref([]);
// const api = "https://api.escuelajs.co/api/v1/products";
// axios.get(api).then((resp) => {
//   resp.data.forEach((element) => {
//     srt.value.push(element);
//   });
// });

 
 
//  let findInfo = product.value.filter((list) => {
//    return list.title.toUpperCase().includes(homeInput.value.toUpperCase());
//  });
 

// console.log(findInfo);
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
}
form {
  width: 50%;
  height: 60%;
  border: 1px solid;
  display: flex;
}
input {
  width: 100%;
  height: 100%;
  border: none;
}
/* Responsive 385px*/
@media (max-width: 385px) {
  .diva {
    margin-top: 5vh;
  }
  form {
    margin: auto;
    width: 90%;
    border: 1px solid blue;
  }
}
/* Responsive 576px*/
@media (max-width: 576px) {
  .diva {
    margin-top: 5vh;
    z-index: 33;
  }
  form {
    margin: auto;
    width: 90%;
    height: 70%;
    z-index: 22 !important;
  }
}
</style>
