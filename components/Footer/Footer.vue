

<template>
  <v-footer class="bg-red text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      8706 406 56 14
    </div>

    <v-divider></v-divider>
    <div>sdddddd</div>

  </v-footer>
</template>

<script setup>
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<style scoped>
.bg-red {
  background-color: #1f1d2b !important;
  margin-top: 30px;
}
</style>
