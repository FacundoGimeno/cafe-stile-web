<template>
  <div class="flex flex-row w-full justify-center items-center h-full sm:gap-0">
    <div
      v-if="navigationEnabled"
      @click="prevSlide"
      class="flex items-center justify-center text-white scale-110 w-[10%] h-1/6 hover:scale-150 transition cursor-pointer"
    >
      <i
        class="fa-solid fa-chevron-left scale-150"
      ></i>
    </div>
    <slot :currentImage="currentImage" :currentSlide="currentSlide"></slot>
    <div
      v-if="navigationEnabled"
      @click="nextSlide"
      class="flex items-center justify-center text-white scale-110 w-[10%] h-1/6 hover:scale-150 transition cursor-pointer"
    >
      <i
        class="fa-solid fa-chevron-right scale-150"
      ></i>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["startAutoplay", "timeout", "navigation", "list"],
  setup(props) {
    const dataList = ref(props.list);
    const currentSlide = ref(0);
    const autoPlayEnabled = ref(
      props.startAutoplay === undefined ? true : props.startAutoplay
    );
    const timeoutDuration = ref(
      props.timeout === undefined ? 3000 : props.timeout
    );
    const navigationEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    const nextSlide = () => {
      if (currentSlide.value === dataList.value.length - 1) {
        currentSlide.value = 0;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 0) {
        currentSlide.value = dataList.value.length - 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    const currentImage = computed(() => {
      return dataList.value[currentSlide.value];
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      navigationEnabled,
      currentImage,
    };
  },
};
</script>
