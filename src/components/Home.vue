<template>
  <div class="md:hidden block m-auto pt-6">
    <MiniRegistertion></MiniRegistertion>


  </div>
  <div>
    <Header1></Header1>
    <Search></Search>

    <Bolim></Bolim>
    <Mini></Mini>
    <Maxsulot> </Maxsulot>
  </div>
</template>

<script setup>
import Header1 from "../components/Header.vue";
import Search from "../components/Search.vue";
import Bolim from "../components/Bolimlar.vue";
import Maxsulot from "../components/Maxsulot.vue";
import Carusel from "../components/Carusel.vue";
import Mini from "../components/MiniCarusel.vue";
import MiniRegistertion from "../Registertion/MiniRegistertion.vue";
</script>

<style scoped></style>
