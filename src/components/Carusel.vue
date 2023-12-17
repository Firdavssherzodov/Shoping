<template>
  <div class="md:w-9/12 md:h-100vh w-[90%] m-auto md:my-8 my-4">
    <fwb-carousel
      :pictures="pictures"
      slide
      :slide-interval="8000"
      class="rounded-xl"
    />
  </div>
</template>

<script setup>
import { FwbCarousel } from "flowbite-vue";

const pictures = [
  {
    src: "https://static.review.uz/crop/1/1/1400__100_1120206047.jpg?v=1605087317",
    alt: "Image 1",
  },
  {
    src: "https://static.review.uz/crop/1/1/1400__100_1120206047.jpg?v=1605087317",
    alt: "Image 2",
  },
  {
    src: " https://static.review.uz/crop/1/1/1400__100_1120206047.jpg?v=1605087317",
    alt: "Image 3",
  },
];
</script>
<style scoped>
:deep button {
  display: none;
}

@media (min-width: 768px) {
  :deep img {
    height: 200%;
  }
}
</style>
