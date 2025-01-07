<script setup lang="ts">
import MainShipaSearch from "../components/MainShipaSearch/MainShipaSearch.vue";
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <MainShipaSearch />
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Выравнивание контента от верхней части */
  padding-top: 50px; /* Отступ сверху */
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%; /* Увеличенная ширина */
  max-width: 1000px; /* Максимальная ширина */
  background-color: white;
  padding: 30px;
  border-radius: 12px; /* Закругленные углы */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Более выраженная тень */
  overflow-y: auto; /* Включаем вертикальный скроллинг */
  min-height: 50vh; /* Минимальная высота окна, 50% от высоты экрана */
}
</style>
