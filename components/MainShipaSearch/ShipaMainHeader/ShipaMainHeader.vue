<script setup lang="ts">
import { styleState } from '../composables/index'
import { TogglestyleState } from '../composables/index'

const HeaderStyleState = styleState
const HeaderTogglestyleState = TogglestyleState
</script>

<template>
  <div class="shipa-main_header">
    <div class="shipa-main_header_title"></div>
    <div class="shipa-main_header_style_btns">
      <button @click="HeaderTogglestyleState" v-if="HeaderStyleState">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
        </svg>
      </button>

      <button @click="HeaderTogglestyleState" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$background-color: #f8f9fa;
$text-color: #333;
$svg-color: #5f6368;
$header-padding: 20px;
$header-font-family: 'Arial', sans-serif;
$header-title-font-size-desktop: 2rem;
$header-title-font-size-mobile: 1.5rem;

.shipa-main_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $header-padding;
  background-color: $background-color;
  color: $text-color;
  font-family: $header-font-family;

  &__title {
    font-size: $header-title-font-size-desktop;
    font-weight: bold;
  }

  &__style_btns {
    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;

      svg {
        width: 30px;
        height: 30px;
        fill: $svg-color;
      }
    }
  }
}

@media (max-width: 768px) {
  .shipa-main_header {
    display: none;
    flex-direction: column;
    text-align: center;

    &__title {
      font-size: $header-title-font-size-mobile;
    }

    &__style_btns {
      margin-top: 10px;

      button svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
