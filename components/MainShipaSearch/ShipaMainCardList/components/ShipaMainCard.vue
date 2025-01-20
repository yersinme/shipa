<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { styleState } from "../../composables/index";
const router = useRouter();

const toShipaPage = (id) => {
  router.push(`/shipa/${id}`);
};

const props = defineProps({
  ShipaCardData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    class="shipa-card_link"
    v-for="card in ShipaCardData"
    :key="card.id"
    @click="toShipaPage(card.id)"
  >
    <div class="shipa-card"  :class="styleState ? 'list-view-flex' : 'grid-view-none'">
      <div class="shipa-card_img">
        <img :src="card.defaultImage" alt="Image of {{ card.title }}" />
      </div>
      <div class="shipa-card_info">
        <p class="shipa-card_info_title">{{ card.title }}</p>
        <p class="shipa-card_info_subtitle">{{ card.subtitle }}</p>
        <ul class="shipa-card_info_treatments">
          <li v-for="treat in card.treatments" :key="treat.id">
            {{ treat.name }}
          </li>
        </ul>
        <div class="shipa-card_contacts">
          <!-- <h4 v-for="contact in card.contacts" :key="contact">{{ contact }}</h4> -->
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
$title-color: #000;
$subtitle-color: #555;
$description-color: #666;
$info-font-size: 12px;
$link-color: inherit;
$link-decoration: none;
// =====
.list-view-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid-view-none {
  display: flex;
  flex-direction: column;
}
// =====
.shipa-card_link {
  display: block;
  text-decoration: $link-decoration;
  color: $link-color;
}

.shipa-card {
  // display: flex;
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
      font-size: 28px;
      margin-bottom: 10px;
      color: rgba(192, 164, 5, 0.534);
    }

    &_subtitle {
      color: $subtitle-color;
      font-size: 18px;
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
  .shipa-card_link {
    margin: 0;
    padding: 0;
  }
  .shipa-card {
    flex-direction: column;
    align-items: stretch;
    text-align: start;
    margin: 0;
    padding: 0;

    &_img {
      border-right: none;
      border-bottom: 1px solid $card-border-color;
    }

    &_info {
      padding: 15px;

      &_title {
        font-size: 20px;
      }
      &_subtitle {
        font-size: 14px;
      }
      &_description {
        font-size: 12px;
      }

      &_treatments li,
      &_contacts h4 {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
