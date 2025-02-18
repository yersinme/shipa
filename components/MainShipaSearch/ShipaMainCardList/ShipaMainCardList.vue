<script setup lang="ts">
import { styleState } from "../composables/index";
import ShipaMainCard from "./components/ShipaMainCard.vue";
import { ref, onMounted, watch } from "vue";
import axios from "axios";

const ShipaCardData = ref(null);
const CardStyleState = styleState;
const searchVal = ref("");

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      `https://4c5b5b24cc48bd57.mokky.dev/saryagashshipa?title=*${searchVal.value}*`
    );
    ShipaCardData.value = data;
  } catch (err) {
    console.log(err);
  }
};

// Загружаем данные при монтировании
onMounted(fetchData);

// Следим за изменениями в поле поиска и обновляем данные
watch(searchVal, fetchData);
</script>

<template>
  <div class="main">
    <div class="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          ></path>
        </g>
      </svg>
      <input
        placeholder="Поиск"
        type="search"
        class="input"
        v-model="searchVal"
      />
    </div>
    <ul
      :class="styleState ? 'list-view' : 'grid-view'"
      class="shipa-main_cards_list"
    >
    <div v-if="!ShipaCardData || ShipaCardData.length === 0" class="not-found">
  
        <p>Ничего не найдено</p>
      </div>

      <div v-else>
        <ShipaMainCard :ShipaCardData="ShipaCardData" />
      </div>
    </ul>
  </div>
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
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 100%;
  margin-top: 20px;
  // margin-bottom: 10px;
}

.not-found {
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #9e9ea7;
  margin-top: 40px;
}

.input {
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
.input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
/* Мобильная версия */
@media (max-width: 768px) {
  .grid-view {
    grid-template-columns: 1fr; /* Одна карточка в строке */
  }

  .group {
    margin: 0;
    margin-bottom: 20px;
  }

  .shipa-card {
    font-size: 0.9rem; /* Уменьшение шрифта для мобильных */
  }
}

/* Общие стили для карточек */
.shipa-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Стили для поиска */
</style>
