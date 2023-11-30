<template>
  <div class="diva">
    <ul class="border border-end-0 border-start-0 border-top-0">
      <li @click="Kiyim">Kiyimlar</li>
      <li @click="Sumkalar">Sumkalar</li>
      <li @click="Elektronika">Elektronika</li>
      <li @click="NarxiB">Narxi B</li>
      <li @click="NarxiP">Narxi P</li>
    </ul>
  </div>
</template>

<script setup>
import srt from "../user/store/userStore";


function Kiyim() {
  srt.value.sort((first, second) => {
    if (first.category > second.category) return -1;
    if (first.category < second.category) return 1;
    return 0;
  });
}
function Elektronika() {
  srt.value.sort((first, second) => {
    if (first.category < second.category) return -1;
    if (first.category > second.category) return 1;
    return 0;
  });
}
function Sumkalar() {
  srt.value.sort((first, second) => {
    if (first.description <= second.description) return -1;
    if (first.description >= second.description) return 1;
    return 0;
  });
}
function NarxiB() {
  srt.value.sort((first, second) => {
    if (first.price > second.price) return -1;
    if (first.price < second.price) return 1;
    return 0;
  });
}
function NarxiP() {
  srt.value.sort((first, second) => {
    if (first.price < second.price) return -1;
    if (first.price > second.price) return 1;
    return 0;
  });
}
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 2vh;
  position: sticky;
  background-color: white;
  top: 0px;
  z-index: 33;
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
    position: sticky;
    top: -1px;
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
