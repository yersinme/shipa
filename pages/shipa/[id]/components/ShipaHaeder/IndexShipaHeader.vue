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
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  padding-top: 60px;
  /* flex-wrap: wrap; */
  /* max-width: 1300px; */
  /* margin: 0 auto;  */
  /* background-color: red; */
}
/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .shipa-data_container {
    flex-wrap: wrap;
      padding-top: 50px;

    /* flex-direction: column; */
  }
}
</style>