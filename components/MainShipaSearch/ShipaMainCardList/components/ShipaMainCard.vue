<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const toShipaPage = (id) => {
  router.push(`/shipa/${id}`)
}

const props = defineProps({
  ShipaCardData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <NuxtLink to="/s" class="shipa-card_link" v-for="card in ShipaCardData" :key="card.id" @click="toShipaPage(card.id)">
    <div class="shipa-card">
      <div class="shipa-card_img">
        <img :src="card.defaultImage" alt="Image of {{ card.title }}" />
      </div>
      <div class="shipa-card_info">
        <h2 class="shipa-card_title">{{ card.title }}</h2>
        <h3 class="shipa-card_subtitle">{{ card.subtitle }}</h3>
        <p class="shipa-card_description">{{ card.description }}</p>
        <ul class="shipa-card_treatments">
          <li v-for="treat in card.treatments" :key="treat.id">{{ treat.name }}</li>
        </ul>
        <div class="shipa-card_contacts">
          <h4 v-for="contact in card.contacts" :key="contact">{{ contact }}</h4>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
$card-bg-color: #fff;
$card-border-color: #ddd;
$card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
$card-padding: 20px;
$title-color: #333;
$subtitle-color: #555;
$description-color: #666;
$info-font-size: 1rem;
$link-color: inherit;
$link-decoration: none;

.shipa-card_link {
  display: block;
  text-decoration: $link-decoration;
  color: $link-color;
}

.shipa-card {
  display: flex;
  background-color: $card-bg-color;
  border: 1px solid $card-border-color;
  border-radius: 10px;
  box-shadow: $card-shadow;
  overflow: hidden;
  transition: transform 0.2s;
  padding: $card-padding;
  margin: 20px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.02);
  }

  &_img {
    flex: 1;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-right: 1px solid $card-border-color;
    }
  }

  &_info {
    flex: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_title {
      color: $title-color;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    &_subtitle {
      color: $subtitle-color;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    &_description {
      color: $description-color;
      font-size: $info-font-size;
      margin-bottom: 10px;
    }

    &_treatments {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin: 5px 0;
        font-size: $info-font-size;
      }
    }

    &_contacts {
      h4 {
        margin: 5px 0;
        font-size: $info-font-size;
        color: $description-color;
      }
    }
  }
}

@media (max-width: 768px) {
  .shipa-card {
    flex-direction: column;
    align-items: stretch;
    text-align: start;

    &_img {
      border-right: none;
      border-bottom: 1px solid $card-border-color;
    }

    &_info {
      padding: 15px;

      &_title,
      &_subtitle,
      &_description {
        font-size: 1.2rem;
      }

      &_treatments li,
      &_contacts h4 {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
