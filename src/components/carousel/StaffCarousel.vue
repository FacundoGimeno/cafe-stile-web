<template>
  <Carousel
    v-if="staffData"
    v-slot="{ currentImage, currentSlide }"
    :startAutoplay="false"
    :list="staffData"
  >
    <Slide :key="currentSlide">
      <div
        class="flex items-center justify-between p-4 bg-amber-400 bg-opacity-10 shadow-lg mt-8 rounded-md md:w-2/3 w-[80%] h-2/3 hover:scale-105 transition slide"
      >
        <img
          :src="currentImage.image"
          alt=""
          width="1000"
          height="1000"
          class="w-72 ml-6 object-fill rounded-lg bg-purple-700 bg-opacity-40 p-4 -rotate-2 shadow-lg shadow-purple-900 hover:scale-105 transition"
        />
        <div class="flex flex-col items-center justify-between text-white font-thin mx-6 h-96 w-1/2 cursor-default">
          <p class="text-5xl font-light">{{ currentImage.name }}</p>
          <p class="">{{ currentImage.description }}</p>
          <p class="self-end italic">Age: {{ currentImage.age }}</p>
          <p class="self-end italic">Role: {{ currentImage.role }}</p>
        </div>
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
