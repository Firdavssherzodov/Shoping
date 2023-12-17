<template>
  <div class="sm:w-2/4 w-11/12 m-auto sm:mt-4 mt-5 focus:relative focus:z-[99999]">
    <fwb-input
      v-model="Search"
      placeholder=" search query"
      size="lg"
      class="rounded-xl sm:py-3 py-[0.8rem] sm:my-[0.30rem] my-[0.28rem] border-color1 text-gray-500"
    >
      <template #prefix>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
      <template #suffix>
        <fwb-button>Search</fwb-button>
      </template>
    </fwb-input>
  </div>
</template>
<script setup>
import { products } from "../user/store/userStore";
import { ref, watchEffect } from "vue";

import { FwbButton, FwbInput } from "flowbite-vue";

const product_list = products();

let Search = ref("");
let data2 = JSON.parse(JSON.stringify(product_list.srt));

watchEffect(() => {
  let Data1 = data2.filter((list) => {
    return list.title.toUpperCase().includes(Search.value.toUpperCase());
  });
  product_list.srt = [...Data1];
});
</script>

<style scoped>
/* :deep button {
  margin-top: 3rem;
} */
</style>
