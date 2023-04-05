<template>
  <section id="banner" class="py-8 text-center">
    <h2 class="pb-8 mb-10 text-6xl md:text-8xl">{{ title }}</h2>
    <p class="max-w-screen-md mx-auto text-lg" v-html="description"></p>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: ['title', 'description'],
  watch: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
}
</script>

<style lang="sass" scoped>
#banner
  position: relative
  h2
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
