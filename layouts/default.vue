<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";

const isHeaderVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHeaderVisible.value = currentScrollY < lastScrollY || currentScrollY <= 0;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="main">
    <header :class="{ hidden: !isHeaderVisible }">
      <Header />
    </header>
    <NuxtPage />
  </div>
</template>

<style scoped>
* {
  background-color: #252836;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

header.hidden {
  transform: translateY(-100%); /* Скрываем header вверх */
}
</style>
