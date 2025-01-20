<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  subtitles: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="procedures">
    <div v-for="subtitle in subtitles" :key="subtitle.id" class="procedures-container">
      <div v-for="item in subtitle.procedures" :key="item.id" >
        
        <h2 class="procedures_ul_title">{{ item.name }}</h2><div class="procedures_ul">
        <ul v-for="descrip in item.description" :key="descrip.id" >
          <li>{{ descrip }}</li>
        </ul>
      </div></div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.procedures {
  margin-top: 30px;
  color: #fff;
  max-width: 1300px;
}
.procedures_ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 300px;
    margin-bottom: 15px;
    width: 100%;
  list-style-type: disc;
  padding-left: 25px;

    &_title {
        color: #ddac58;
        margin-bottom: 15px;
        padding-left: 15px;
    }
}

li {
}
@media (max-width: 768px) {
  .procedures_ul {
    height: 100%;
  }
}
</style>