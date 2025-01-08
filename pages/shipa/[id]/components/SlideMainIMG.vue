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
  <div ><img class="imgData" :src="imgData" alt=""></div>
</template>

<style scoped>
.imgData {
  width: 800px;
  height: 550px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>