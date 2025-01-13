<script setup lang="ts">
import IndexShipaHeader from "./components/ShipaHaeder/IndexShipaHeader.vue";
import IndexUnderHeadSub from "./components/ShipaSubTitle/IndexShipaSub.vue";
</script>


<template>
  <div class="shipa-container">
    <IndexShipaHeader />
    <IndexUnderHeadSub />
  </div>
</template>

<style scoped>
.shipa-container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  /* background-color: #252836; */
}
</style>