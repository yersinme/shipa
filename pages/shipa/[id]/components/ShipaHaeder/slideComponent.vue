<script setup>
import SlideMainIMG from "./SlideMainIMG.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

const route = useRoute();
const products = ref([]);
const imgData = ref();
const model = ref();

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://4c5b5b24cc48bd57.mokky.dev/saryagashshipa"
    );
    products.value = data;
    // Установим изображение по умолчанию как первое в массиве sliderImages
    if (
      products.value.length > 0 &&
      products.value[0].sliderImages.length > 0
    ) {
      imgData.value = products.value[0].sliderImages[0];
    }
  } catch (err) {
    console.log(err);
  }
});

const product = computed(() => {
  return products.value.find((p) => p.id == route.params.id);
});

const sendImgData = (data) => {
  imgData.value = data;
};
</script>

<template>
  <div class="product-container">
    <div class="main-image-container">
      <SlideMainIMG :imgData="imgData" />
    </div>
    <div v-if="product && product.sliderImages" class="slider-container">
      <v-sheet class="mx-auto" elevation="50" max-width="1050" >
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          
          <v-slide-group-item
            v-for="(img, i) in product.sliderImages"
            :key="i"
            v-slot="{ isSelected, toggle }"
          >
            <v-card
              :color="isSelected ? 'primary' : 'grey-lighten-1'"
              class="ma-4 image-card"
              height="150"
              width="130"
              @click="toggle"
            >
              <img
                :src="img"
                alt="wait"
                class="slider-img"
                @click="sendImgData(img)"
              />
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <!-- <div v-else>Loading...</div> -->
  </div>
</template>

<style scoped lang="scss">
/* Стили для всего компонента */
.product-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
}

.slider-container {
  width: 100%;
}

.slider-img {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover; /* изображение полностью покрывает карточку */
  height: 100%; /* изображение занимает всю высоту карточки */
  width: 100%; /* изображение занимает всю ширину карточки */
}

.mx-auto {
  background-color: #252836;
}

/* Адаптация для планшетов */
@media (max-width: 1024px) {
  .image-card {
    height: 120px;
    width: 90px;
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .slider-container {
    display: flex; /* Используем flexbox для размещения карточек */
    overflow: hidden; /* Прячем всё, что выходит за границы */
    width: 100%; /* Контейнер занимает всю ширину экрана */
    position: relative; /* Для управления положением вложенных элементов */
  }

  .v-slide-group {
    display: flex; /* Горизонтальное размещение карточек */
    gap: 2px; /* Расстояние между карточками */
    width: 50%; /* Слайдер адаптируется к ширине экрана */
    transition: transform 0.3s ease; /* Добавляем плавность анимации */
    margin-left: -70px;
  }

  .image-card {
    flex: 0 0 auto; /* Фиксируем размер карточек */
    width: 25%; /* Карточка занимает 25% ширины экрана */
    max-width: 150px; /* Ограничиваем максимальную ширину */
    height: auto; /* Автоматическая высота */
    margin: 0; /* Убираем отступы вокруг карточек */
  }



}

</style>
