<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";

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
  <div v-if="titles" v-for="title in titles" :key="title.id" class="sidebar">{{ title.title }}

     <h1>{{ title.title }}</h1>
    <h2>{{ title.subtitle }}</h2>
    <p>{{ title.description }}</p>

    <div class="contacts">
      <h3>Контакты:</h3>
      <p><strong>Телефон:</strong> {{ title.contacts.phone }}</p>
      <p><strong>Email:</strong> {{ title.contacts.email }}</p>
      <p><strong>Адрес:</strong> {{ title.contacts.address }}</p>
      <a :href="title.whatsappLink" target="_blank" class="whatsapp-link">Написать в WhatsApp</a>
    </div>

    <!-- <div class="rooms">
      <h3>Номера:</h3>
      <ul>
        <li v-for="room in title.rooms" :key="room.id">
          <h4>{{ room.name }}</h4>
          <p><strong>Вместимость:</strong> {{ room.capacity }} чел.</p>
          <p><strong>Характеристики:</strong> {{ room.characteristics }}</p>
          <p><strong>Цена за одного:</strong> {{ room.pricePerPerson }} ₸</p>
          <p v-if="room.priceForTwo"><strong>Цена за двоих:</strong> {{ room.priceForTwo }} ₸</p>
          <p v-if="room.priceForThree"><strong>Цена за троих:</strong> {{ room.priceForThree }} ₸</p>
        </li>
      </ul>
    </div> -->

    <div class="treatments">
      <h3>Лечение:</h3>
      <ul>
        <li v-for="treatment in title.treatments" :key="treatment.id">
          <strong>{{ treatment.name }}:</strong> {{ treatment.description }}
        </li>
      </ul>
    </div>

    <div class="procedures">
      <h3>Процедуры:</h3>
      <ul>
        <li v-for="procedure in title.procedures" :key="procedure.id">
          <strong>{{ procedure.name }}:</strong> {{ procedure.description }}
        </li>
      </ul>
    </div>

  </div>
  <div v-else>err</div>
</template>

<style scoped>
.sidebar {
    background-color: rgba(128, 128, 128, 0.192);
    padding: 30px;
    width: 400px;
    border-radius: 10px;
}
</style>

