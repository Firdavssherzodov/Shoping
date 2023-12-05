<template>
  <div class="diva">
    <ul class="border border-end-0 border-start-0 border-top-0">
      <li @click="Kiyim('kiyim')">Kiyimlar</li>
      <li @click="Sumkalar">Sumkalar</li>
      <li @click="Elektronika">Elektronika</li>
      <li @click="NarxiB">Narxi B</li>
      <li @click="NarxiP">Narxi P</li>
    </ul>
  </div>
</template>

<script setup>
import { products } from "../user/store/userStore";

const ProductsList = products()

function Kiyim(value) {
  // if ( value == 'kiyim') {

  // }
  let Kiyim = ProductsList.srt.sort((first, second) => {
    if (first.category > second.category) return -1;
    if (first.category < second.category) return 1;
    return 0;
  });
  srt.value = Kiyim;
}
function Elektronika() {
  let Elektronika = ProductsList.srt.sort((first, second) => {
    if (first.category < second.category) return -1;
    if (first.category > second.category) return 1;
    return 0;
  });
  srt.value = Elektronika;
}
function Sumkalar() {
  let Sumkalar = ProductsList.srt.sort((first, second) => {
    if (first.description <= second.description) return -1;
    if (first.description >= second.description) return 1;
    return 0;
  });
  srt.value = Sumkalar;
}
function NarxiB() {
  let NarxiB = ProductsList.srt.sort((first, second) => {
    if (first.price > second.price) return -1;
    if (first.price < second.price) return 1;
    return 0;
  });
  srt.value = NarxiB;
}
function NarxiP() {
  srt.value;
  let NarxiP = ProductsList.srt.sort((first, second) => {
    if (first.price < second.price) return -1;
    if (first.price > second.price) return 1;
    return 0;
  });
  srt.value = NarxiP;
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

.divascroll {
  position: sticky;
  top: 0px;
}
ul {
  width: 77%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
}
ul li {
  list-style: none;
  font-size: 1.2rem;
}
li:hover {
  cursor: pointer;
  transition: 0.9s;
  border-bottom: 1px solid #3b71ca;
  color: #3b71ca;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100%;
    margin-top: 0;
    background-color: rgb(255, 255, 255);
    top: -1px;
    position: sticky;
    z-index: 33;
  }
  ul {
    padding: 0%;
    width: 90%;
    justify-content: space-around !important;
  }
  li {
    font-size: 0.9rem !important;
  }
  li:active {
    transition: 0s !important;
    border-bottom: 2px solid #3b71ca !important;
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .diva {
    width: 100%;
    top: -1px;
  }
  ul {
    padding: 0%;
    width: 90%;
    margin: auto;
    justify-content: space-around !important;
  }
  li {
    font-size: 0.9rem !important;
  }
  li:active {
    border-bottom: 2px solid #3b71ca !important;
  }
}
</style>
