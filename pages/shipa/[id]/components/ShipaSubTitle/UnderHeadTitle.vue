<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
import ShipaProceduresList from './ShipaProceduresList.vue'
import RoomsShipa from "./RoomsShipa.vue"

const route = useRoute();
const id = route.params.id;
const subtitles = ref();

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://4c5b5b24cc48bd57.mokky.dev//saryagashshipa?id=${id}`
    );
    subtitles.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div>
    <div v-for="subtitle in subtitles" class="under-title">
      <div v-for="item in subtitle.underHeadTitles">
        <div class="subtitle_title">
          {{ item.title }}
        </div>
        {{ item.subtitle }}
      </div>
    </div>
    <RoomsShipa :subtitles="subtitles"/>
    <ShipaProceduresList :subtitles="subtitles"/>
  </div>
</template>

<style scoped>
.under-title {
  background-color: #1f1d2b;
  border-radius: 10px;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.2s;
  color: #fff;
  /* max-width: 1300px; */
  width: 100%;
}

.under-title:hover {
  transform: scale(1.02);
}
.subtitle_title {
  color: #ddac58;
}

@media (max-width: 768px) {
  .under-title {
     margin: 0;
  }
}


</style>