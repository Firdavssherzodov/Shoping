<template>
  <div class="diva">
    <ul class="border border-end-0 border-start-0 border-top-0">
      <li @click="Sort('kiyim')">Kiyimlar</li>
      <li @click="Sort('Sumkalar')">Sumkalar</li>
      <li @click="Sort('Elektronika')">Elektronika</li>
      <li @click="Sort('NarxiB')">Narxi B</li>
      <li @click="Sort('NarxiP')">Narxi P</li>
    </ul>
  </div>
</template>

<script setup>
import { products } from "../user/store/userStore";
const ProductsList = products();

function Sort(value) {
  // Kiyimlar
  if (value == "kiyim") {
    let Kiyim = ProductsList.srt.sort((first, second) => {
      if (first.category > second.category) return -1;
      if (first.category < second.category) return 1;
      return 0;
    });
  }
  // Elektronika
  if (value == "Elektronika") {
    let Elektronika = ProductsList.srt.sort((first, second) => {
      if (first.category < second.category) return -1;
      if (first.category > second.category) return 1;
      return 0;
    });
  }
  // Sumkalar
  if (value == "Sumkalar") {
    let Sumkalar = ProductsList.srt.sort((first, second) => {
      if (first.description <= second.description) return -1;
      if (first.description >= second.description) return 1;
      return 0;
    });
  }
  // NarxiB
  if (value == "NarxiB") {
    let NarxiB = ProductsList.srt.sort((first, second) => {
      if (first.price > second.price) return -1;
      if (first.price < second.price) return 1;
      return 0;
    });
  }
  // NarxiP
  if (value == "NarxiP") {
    let NarxiP = ProductsList.srt.sort((first, second) => {
      if (first.price < second.price) return -1;
      if (first.price > second.price) return 1;
      return 0;
    });
  }
}
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 2vh;
  background-color: white;
  z-index: 33;
  position: sticky;
  top: 0px;
}

</style>
