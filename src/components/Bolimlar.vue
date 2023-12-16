<template>
  <div class="w-full sm:py-5 py-1 ">
    <ul class=" flex flex-wrap sm:justify-between justify-around sm:w-2/4 w-11/12  m-auto sm:ps-0 sm:text-lg text-[14.5px] sm:font-medium font-light">
      <li @click="Sort('kiyim')" class="hover:text-blue-700 cursor-pointer">Kiyimlar</li>
      <li @click="Sort('Sumkalar')" class="hover:text-blue-700 cursor-pointer">Sumkalar</li>
      <li @click="Sort('Elektronika')" class="hover:text-blue-700 cursor-pointer">Elektronika</li>
      <li @click="Sort('NarxiB')" class="hover:text-blue-700 cursor-pointer">Narxi B</li>
      <li @click="Sort('NarxiP')" class="hover:text-blue-700 cursor-pointer">Narxi P</li>
      <li @click="Sort('NarxiP')" class="hover:text-blue-700 cursor-pointer">Narxi P</li>
      <li @click="Sort('NarxiP')" class="hover:text-blue-700 cursor-pointer">Narxi P</li>


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

  ul>li{
    padding: 0.4rem;
    color:black;
    
    }
</style>
