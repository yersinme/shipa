<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
import Socials from './Shipasocial.vue'

const route = useRoute();
const id = route.params.id;
const titles = ref();

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://4c5b5b24cc48bd57.mokky.dev//saryagashshipa?id=${id}`
    );
    titles.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>


<template>
  <div v-if="titles" v-for="title in titles" :key="title.id" class="sidebar">
    {{ title.title }}

    <h1 class="sidebar_title">{{ title.title }}</h1>
    <h2 class="sidebar_subtitle">{{ title.subtitle }}</h2>
    <p class="subtitle_description">{{ title.description }}</p>

    <Socials />
  </div>
  <div v-else>err</div>
</template>

<style scoped>
.sidebar {
  background-color: #1f1d2b;
  padding: 30px;
  /* padding-bottom: 5px; */
  width: 100%;
  border-radius: 10px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff ;
  transition: transform 0.2s;

}

.sidebar:hover {
  transform: scale(1.02);
}

.sidebar_title {
  color: #ddac58;
}

.sidebar_subtitle {
  color: #ddac58;
}

.subtitle_description {
  color: #fff;;
}

@media (max-width: 768px) {
 .sidebar {
  width: 100%;
  margin: 0;
 }
 .sidebar_title {
  font-size: 28px;
 }
 .sidebar_subtitle {
  font-size: 18px;
 }
}
</style>

