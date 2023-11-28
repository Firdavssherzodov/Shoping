<template>
  <div class="diva">
    <ul class="border border-end-0 border-start-0 border-top-0">
      <li>Kiyimlar</li>
      <li>Sumkalar</li>
      <li>Uzuklar</li>
      <li>Mayshi</li>
      <li>Bolim</li>
    </ul>
  </div>
</template>

<script setup>
        

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
  border-bottom: 1px solid #3B71CA;
  color: #3B71CA;
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
