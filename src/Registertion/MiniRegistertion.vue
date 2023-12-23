<template>
  <div class="mx-auto ml-[11.5rem]">
    <router-link to="/Login">
      <fwb-button class="mr-2 font-normal font-sans" outline>
        Kirish
      </fwb-button>
    </router-link>
    <router-link to="/Siginup">
      <fwb-button class="font-bold font-sans">Ro'yxatdan o'tish</fwb-button>
    </router-link>
  </div>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";
</script>

<style lang="scss" scoped></style>
