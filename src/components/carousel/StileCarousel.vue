<template>
  <Carousel :navigation="false" :list="carouselSlides" v-slot="{ currentImage, currentSlide }">
    <Slide :key="currentSlide">
        <img
          :src="currentImage"
          alt=""
          loading="lazy"
          ismap=""
          decoding="auto"
          class="md:max-w-1/2 w-full object-cover drop-shadow-xl hover:scale-105 transition"
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
        new URL("/public/assets/stile/stile.jpeg", import.meta.url),
        new URL("/public/assets/stile/stile2.png", import.meta.url),
        new URL("/public/assets/stile/stile3.webp", import.meta.url),
        new URL("/public/assets/stile/stile4.jpg", import.meta.url),
      ],
    };
  },
  setup() {},
};
</script>
