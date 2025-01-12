<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  subtitles: {
    type: Array,
    required: true,
  },
});

const openedCards = ref<number[]>([]); // Массив для хранения ID открытых карточек

const toggleCard = (id: number) => {
  if (openedCards.value.includes(id)) {
    openedCards.value = openedCards.value.filter((cardId) => cardId !== id);
  } else {
    openedCards.value.push(id);
  }
};
</script>

<template>
    <div
      v-for="elem in subtitles"
      :key="elem.id"
      class="room-cards"
    >
      <v-card
        v-for="item in elem.rooms"
        :key="item.id"
        width="344"
       class="room-card"
      >
        <!-- <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-img> -->

        <v-card-title> {{ item.name }} </v-card-title>

        <v-card-subtitle> Количество мест: {{ item.capacity }} </v-card-subtitle>

        <v-card-subtitle>
          <ul>
            <li>1 человек: {{ item.pricePerPerson }}тг</li>
            <li>2 персоны: {{ item.priceForTwo }}тг</li>
          </ul>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            @click="toggleCard(item.id)"
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="openedCards.includes(item.id) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="toggleCard(item.id)"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="openedCards.includes(item.id)">
            <v-divider></v-divider>

            <v-card-text>
              {{ item.characteristics }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  color: #000;
}
.room-cards {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
  margin: 30px;
}

.room-card {
    background-color: rgba(173, 168, 168, 0.989);
}
</style>
