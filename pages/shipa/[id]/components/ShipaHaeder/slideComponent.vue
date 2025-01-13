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
      <v-sheet class="mx-auto" elevation="50" max-width="750" width="100%">
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
                alt="Image"
                class="slider-img"
                @click="sendImgData(img)"
              />
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped lang="scss">
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

}

/* Адаптация для мобильных устройств */
/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .slider-container {
    overflow-x: auto;
  }

  .image-card {
    height: 100px; /* уменьшенная высота */
    width: 60px; /* уменьшенная ширина */
    margin: 2px; /* минимальный отступ */
  }

  .slider-img {
    object-fit: cover; /* изображение полностью покрывает карточку */
    height: 100%; /* изображение занимает всю высоту карточки */
    width: 100%; /* изображение занимает всю ширину карточки */
  }

  .v-slide-group {
    gap: 4px; /* минимальное расстояние между карточками */
  }

  /* Скрытие стрелок */
  .v-slide-group__prev, .v-slide-group__next {
    display: none;
  }
}

</style>
