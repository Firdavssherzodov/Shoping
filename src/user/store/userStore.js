import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const products = defineStore("product", () => {
  const product_list = ref([]);
  const srt = ref([]);
  const favorites = ref([]);
  let Search = ref("");

  let findSearch = computed(() => {
    return srt.value.filter((list) => {
      return list.title.toUpperCase().includes(Search.value.toUpperCase());
    });
  });

  return { product_list, srt, favorites, Search, findSearch };
});
