<template>
  <div
    class="flex lg:flex-row flex-col items-center gap-4 p-4 bg-pink-300 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transition"
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
      <span class="text-pretty font-thin italic mb-6">{{ getFoodData.description }}</span>
      <span class="font-semibold self-end text-lg mt-8"
        >¥{{ getFoodData.price }}</span
      >
    </div>
  </div>
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
