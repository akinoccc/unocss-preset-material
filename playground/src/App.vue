<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(true)
</script>

<template>
  <div :class="{'dark': isDark}">
    <div class="m-bg-surface">
      <span class="m-text-primary">Uno CSS Preset for Material</span>
    </div>
  </div>
  <button @click="isDark = !isDark">
    Change Theme
  </button>
</template>

<style scoped>
</style>
