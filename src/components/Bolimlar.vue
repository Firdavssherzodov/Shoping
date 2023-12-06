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
import { onMounted } from "vue";
const ProductsList = products();


onMounted(()=>{
  function Sort(value) {
  // Kiyimlar
  if (value == "kiyim") {
    let Kiyim = ProductsList.srt.sort((first, second) => {
      if (first.category > second.category) return -1;
      if (first.category < second.category) return 1;
      return 0;
    });
    ProductsList.srt = Kiyim;
  }
  // Elektronika
  if (value == "Elektronika") {
    ProductsList.srt = []
    let Elektronika = ProductsList.srt.sort((first, second) => {
      if (first.category < second.category) return -1;
      if (first.category > second.category) return 1;
      return 0;
    });
    ProductsList.srt = Elektronika;
  }
  // Sumkalar
  if (value == "Sumkalar") {
    ProductsList.srt = []

    let Sumkalar = ProductsList.srt.sort((first, second) => {
      if (first.description <= second.description) return -1;
      if (first.description >= second.description) return 1;
      return 0;
    });
    ProductsList.srt = Sumkalar;
  }
  // NarxiB
  if (value == "NarxiB") {
    ProductsList.srt = []

    let NarxiB = ProductsList.srt.sort((first, second) => {
      if (first.price > second.price) return -1;
      if (first.price < second.price) return 1;
      return 0;
    });
    ProductsList.srt = NarxiB;
  }
  // NarxiP
  if (value == "NarxiP") {
    ProductsList.srt = []

    let NarxiP = ProductsList.srt.sort((first, second) => {
      if (first.price < second.price) return -1;
      if (first.price > second.price) return 1;
      return 0;
    });
    ProductsList.srt = NarxiP;
  }
}
})
// onMOUNTED
function Sort(value) {
  // Kiyimlar
  if (value == "kiyim") {
    ProductsList.srt = []

    let Kiyim = ProductsList.srt.sort((first, second) => {
      if (first.category > second.category) return -1;
      if (first.category < second.category) return 1;
      return 0;
    });
    ProductsList.srt = Kiyim;
  }
  // Elektronika
  if (value == "Elektronika") {
    ProductsList.srt = []

    let Elektronika = ProductsList.srt.sort((first, second) => {
      if (first.category < second.category) return -1;
      if (first.category > second.category) return 1;
      return 0;
    });
    ProductsList.srt = Elektronika;
  }
  // Sumkalar
  if (value == "Sumkalar") {
    ProductsList.srt = []

    let Sumkalar = ProductsList.srt.sort((first, second) => {
      if (first.description <= second.description) return -1;
      if (first.description >= second.description) return 1;
      return 0;
    });
    ProductsList.srt = Sumkalar;
  }
  // NarxiB
  if (value == "NarxiB") {
    ProductsList.srt = []

    let NarxiB = ProductsList.srt.sort((first, second) => {
      if (first.price > second.price) return -1;
      if (first.price < second.price) return 1;
      return 0;
    });
    ProductsList.srt = NarxiB;
  }
  // NarxiP
  if (value == "NarxiP") {
    ProductsList.srt = []

    let NarxiP = ProductsList.srt.sort((first, second) => {
      if (first.price < second.price) return -1;
      if (first.price > second.price) return 1;
      return 0;
    });
    ProductsList.srt = NarxiP;
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
li::selection{
  display: none;
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
