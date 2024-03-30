<template>
  <Transition appear>
    <div
      class="flex lg:flex-row flex-col items-center gap-4 p-4 bg-amber-400 bg-opacity-15 shadow-lg rounded-lg hover:scale-105 transition"
    >
      <div>
        <img
          :src="getFoodData.image"
          alt=""
          width="150"
          height="150"
          class="min-w-[150px] min-h-[150px] object-cover rounded-xl aspect-square"
        />
      </div>
      <div class="flex flex-col justify-evenly text-white h-48 cursor-default">
        <span class="font-bold text-2xl self-center">{{ getFoodData.name }}</span>
        <hr class="" />
        <span class="font-thin italic mb-6">{{ getFoodData.description }}</span>
        <span class="font-semibold self-end text-lg mt-8"
          >¥{{ getFoodData.price }}</span
        >
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["foodData"],

  setup(props) {
    const getFoodData = props.foodData;

    return { getFoodData };
  },
};
</script>

<style>
.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-leave-active {
  transition: all 1.0s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
