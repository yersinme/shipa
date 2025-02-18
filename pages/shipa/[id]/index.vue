<script setup lang="ts">
import IndexShipaHeader from "./components/ShipaHaeder/IndexShipaHeader.vue";
import IndexUnderHeadSub from "./components/ShipaSubTitle/IndexShipaSub.vue";
import ShipaFooter from "./components/ShipaFooter/ShipaFooter.vue";
import Social from "./components/ShipaHaeder/Shipasocial.vue"
</script>


<template>
  <div class="shipa-container">
    <IndexShipaHeader />
    <IndexUnderHeadSub />
    <ShipaFooter />

    <div class="social">
      <Social/>
    </div>
  </div>
</template>

<style scoped>
.shipa-container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 30px;
}

.social {
  position: fixed;
  right: 60px;
  bottom: 40px;
  z-index: 1000; /* Убедитесь, что элемент находится поверх других */
}

@media (max-width: 768px) {
  .social {
    right: 10px; /* Уменьшенный отступ для мобильных устройств */
    bottom: 10px;
  }
}
</style>
