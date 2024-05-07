<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center p-8 mt-6"
  >
    <FoodCard v-for="(food, index) in menuData" :key="index" :foodData="food">
    </FoodCard>
  </div>
</template>

<script>
import FoodCard from "./FoodCard.vue";

export default {
  components: { FoodCard },

  data() {
    return {
      menuData: [],
    };
  },

  mounted() {
    try {
      fetch(
        "https://raw.githubusercontent.com/FacundoGimeno/cafestileweb.github.io/main/public/assets/jsons/menu.json"
      )
        .then((res) => res.json())
        .then((data) => (this.menuData = data));
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
