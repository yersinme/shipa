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
  <div v-for="elem in subtitles" :key="elem.id" class="room-cards">
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
        <v-btn color="orange-lighten-2" @click="toggleCard(item.id)">
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="
            openedCards.includes(item.id)
              ? 'mdi-chevron-up'
              : 'mdi-chevron-down'
          "
          @click="toggleCard(item.id)"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="openedCards.includes(item.id)">
          <v-divider></v-divider>

          <v-card-text class="card_text">
            <div class="card_text-container">
              {{ item.characteristics }}
              <button class="card_text-btn">Забронировать</button>
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
.room-cards {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
  margin: 30px;
  max-width: 1300px;
  width: 100%;
}

.room-card {
  background-color: #1f1d2b;
  color: #fff;
}

.card_text {

  &-container {
    display: flex;
    flex-direction: column;
  }
  &-btn {
    width: 100%;
    background-color: green;
    padding: 15px;
    color: #fff;
    border-radius: 5px;
    margin-top: 15px;
  }
}

@media (max-width: 768px) {
  .room-cards {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }
}
</style>
