<script setup lang="ts">
import Slider from "./components/slideComponent.vue"
import Sidebar from './components/ShipaSideBar.vue'
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
    gap: 15px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
}
</style>