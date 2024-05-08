<template>
  <Carousel
    :navigation="false"
    :list="carouselSlides"
    v-slot="{ currentImage, currentSlide }"
  >
    <Slide :key="currentSlide">
      <img
        :src="currentImage"
        alt=""
        loading="lazy"
        ismap=""
        decoding="auto"
        class="md:min-w-[500px] md:max-w-[700px] w-full p-6 object-cover rounded-md hover:scale-105 transition drop-shadow-2xl bg-violet-400 bg-opacity-30"
      />
    </Slide>
  </Carousel>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      carouselSlides: [
        new URL("/assets/stile/stile.webp", import.meta.url),
        new URL("/assets/stile/stile2.webp", import.meta.url),
        new URL("/assets/stile/stile3.webp", import.meta.url),
        new URL("/assets/stile/stile4.webp", import.meta.url),
      ],
    };
  },
  setup() {},
};
</script>
