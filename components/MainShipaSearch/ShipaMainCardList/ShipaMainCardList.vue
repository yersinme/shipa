<script setup lang="ts">
import { styleState } from "../composables/index";
import ShipaMainCard from "./components/ShipaMainCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const ShipaCardData = ref(null);
const CardStyleState = styleState;

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://4c5b5b24cc48bd57.mokky.dev//saryagashshipa"
    );
    ShipaCardData.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <ul :class="styleState ? 'list-view' : 'grid-view'" class="shipa-main_cards_list">
    <ShipaMainCard :ShipaCardData="ShipaCardData" />
  </ul>
</template>

<style scoped lang="scss">
.shipa-main_cards_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* Мобильная версия */
@media (max-width: 768px) {
  .grid-view {
    grid-template-columns: 1fr; /* Одна карточка в строке */
  }

  .shipa-card {
    // padding: 10px;
    font-size: 0.9rem; /* Уменьшение шрифта для мобильных */
  }
}

/* Общие стили для карточек */
.shipa-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  // padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
</style>
