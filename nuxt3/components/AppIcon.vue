<template>
  <svg
    class="app-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <path :d="icons[name]" fill="currentColor" />
  </svg>
</template>

<script setup>
import icons from '@/assets/icons'

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
})
</script>

<style lang="sass" scoped>
.app-icon
  display: inline-block
  vertical-align: middle
</style>
