<template>
  <Carousel
    v-if="staffData"
    v-slot="{ currentImage, currentSlide }"
    :startAutoplay="false"
    :list="staffData"
  >
    <Slide :key="currentSlide">
      <div
        class="flex items-center h-full p-8 bg-amber-400 bg-opacity-25 mt-8 rounded-md md:w-2/3 w-[80%] hover:scale-105 transition slide"
      >
        <img
          :src="currentImage.image"
          alt=""
          width="1000"
          height="1000"
          class="w-60 object-fill rounded-lg"
        />
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { ref } from "vue";
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";

export default {
  components: { Carousel, Slide },

  data() {
    return {
      staffData: ref(null),
    };
  },

  mounted() {
    try {
      fetch("http://localhost:4321/assets/jsons/staff.json")
        .then((res) => res.json())
        .then((data) => (this.staffData = data));
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
