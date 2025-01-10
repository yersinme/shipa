<script setup lang="ts">
import Slider from "./slideComponent.vue"
import Sidebar from "./ShipaSideBar.vue"

</script>


<template>
  <div class="shipa-data_container">
    <Slider />
    <Sidebar />
  </div>
</template>

<style scoped>

.shipa-data_container {
  display: flex;
  /* max-width: 1300px;
  margin: 0 auto; */
  /* background-color: red; */
}
/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .shipa-data_container {
    flex-direction: column;
  }
}
</style>