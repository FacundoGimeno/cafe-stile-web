<template>
  <Carousel
    v-if="staffData"
    v-slot="{ currentImage, currentSlide }"
    :startAutoplay="false"
    :list="staffData"
  >
    <Slide :key="currentSlide">
      <div
        class="flex lg:flex-row flex-col items-center lg:justify-between p-4 bg-blue-300 bg-opacity-30 shadow-lg sm:mt-8 mt-0 rounded-md xl:w-2/3 lg:w-full md:w-2/3 sm:w-full lg:h-2/3 h-[85%] sm:overflow-hidden overflow-y-auto sm:hover:scale-105 transition slide"
      >
        <img
          :src="currentImage.image"
          alt=""
          width="1000"
          height="1000"
          class="lg:w-72 sm:w-60 w-52 lg:ml-6 object-fill rounded-lg bg-purple-700 bg-opacity-40 p-4 -rotate-2 shadow-lg shadow-purple-900 hover:scale-105 transition"
        />
        <div
          class="flex flex-col items-center lg:justify-between justify-evenly text-white sm:text-base text-sm font-thin sm:mx-6 mx-0 lg:h-96 h-full lg:mt-0 mt-2 lg:w-1/2 sm:w-auto w-full cursor-default"
        >
          <p class="lg:text-5xl sm:text-4xl text-3xl font-light">
            {{ currentImage.name }}
          </p>
          <p class="text-pretty">{{ currentImage.description }}</p>
          <p class="lg:self-end italic">Age: {{ currentImage.age }}</p>
          <p class="lg:self-end italic">Role: {{ currentImage.role }}</p>
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
      fetch(
        "https://raw.githubusercontent.com/FacundoGimeno/cafestileweb.github.io/main/public/assets/jsons/staff.json"
      )
        .then((res) => res.json())
        .then((data) => (this.staffData = data));
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
