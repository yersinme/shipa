<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  imgData: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="image-container">
    <img class="imgData" :src="imgData" alt="Image" />
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  max-width: 600px; /* Базовый размер для десктопа */
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 30px;
}

.imgData {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
