import { ref } from "vue";
import { defineStore } from "pinia";


export const products = defineStore("product", () => {
  const product_list = ref([]);
  const srt = ref([]);
  const favorites = ref([]);

  return { product_list, srt, favorites };
});
