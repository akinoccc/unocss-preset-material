<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(true)
</script>

<template>
  <div :class="{'dark': isDark}">
    <div class="m-bg-surface">
      <span class="md-text-primary">Uno CSS Preset for Material</span>
    </div>
  </div>
  <button @click="isDark = !isDark">
    Change Theme
  </button>

  <div class="m-divider" />
  <div class="m-divider-inset" />
  <div class="m-divider-middle-inset" />
  <div class="m-divider-80%" />
  <div class="h-100px bg-black">
    <div class="m-divider-vertical" />
    <div class="m-divider-vertical-90px" />
    <div class="m-divider-vertical-inset" />
    <div class="m-divider-vertical-middle-inset" />
  </div>
</template>

<style scoped>
</style>
