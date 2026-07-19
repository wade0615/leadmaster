<template>
  <div id="london">
    <Nav v-show="hidden" />
    <slot />
    <Footer v-show="hidden" />
    <div id="fb-root"></div>
  </div>
</template>

<script setup>
const route = useRoute()
const hidden = computed(() => route.path !== '/login')
</script>

<style lang="sass">
html
  font-family: 'Noto Serif TC','Source Sans Pro','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'
  font-size: 16px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,*::after
  box-sizing: border-box
  margin: 0
</style>
