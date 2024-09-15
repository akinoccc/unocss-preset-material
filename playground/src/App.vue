<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(true)
</script>

<template>
  <div
    class="bg-background"
    :class="{'dark': isDark}"
  >
    <div class="bg-surface">
      <span class="text-primary">Uno CSS Preset for Material</span>
    </div>

    <div class="m-divider" />
    <div class="m-divider-inset" />
    <div class="m-divider-middle-inset" />
    <div class="m-divider-80%" />
    <div class="h-100px">
      <div class="m-divider-vertical" />
      <div class="m-divider-vertical-90px" />
      <div class="m-divider-vertical-inset" />
      <div class="m-divider-vertical-middle-inset" />
    </div>

    <div class="fac gap-2 p-4">
      <div class="m-badge-dot" />
      <div class="m-badge m-badge-single">
        3
      </div>
      <div class="m-badge">
        323
      </div>
    </div>
  </div>
  <button @click="isDark = !isDark">
    Change Theme
  </button>
</template>

<style scoped>
</style>
