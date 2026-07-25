<template>
  <section id="banner" class="py-8 text-center">
    <p v-if="eyebrow" class="eyebrow mb-4 text-2xl md:text-4xl tracking-widest">
      {{ eyebrow }}
    </p>
    <h1 class="pb-8 mb-10 text-3xl md:text-5xl">{{ title }}</h1>
    <p class="max-w-screen-md mx-auto text-lg" v-html="description"></p>
  </section>
</template>

<script setup>
defineProps(['title', 'description', 'eyebrow'])
</script>

<style lang="sass" scoped>
#banner
  position: relative
  .eyebrow
    color: #6B7280
  h1
    position: relative
    &::after
      content: ""
      position: absolute
      top: 100%
      left: 50%
      width: 10%
      height: 1px
      transform: translate(-50%, 0)
      background-color: #000
</style>
