<template>
  <div class="diva">
    <ul>
      <li>Shirinlik</li>
      <li>Ichimlik</li>
      <li>Uy-ro'zg'or</li>
      <li>Mayshi</li>
      <li>Bolim</li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  margin-top: 2vh;
}
ul {
  width: 70%;
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
  transition: 1s;
  border-bottom: 1px solid blue;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100%;
    margin-top: 0;
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
}
/* Responsive 576px */
@media (max-width: 576px) {
  .diva {
    width: 100%;
    margin-top: 0;
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
}
</style>
