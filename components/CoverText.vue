<template>
  <section
    :style="{backgroundImage: 'url(' + coverImg + ')'}"
    class="cover-text"
  >
  <div class="text flex items-center justify-center">
    <article class="p-8 sm:p-20 md:pt-28 max-w-screen-xl mx-auto">
      <p
        v-html="text"
        class="
          md:w-1/2 text-lg md:text-xl
          p-4 rounded
          bg-gray-50 bg-opacity-80
        "
        :class="{'ml-auto': right}"
      ></p>
    </article>
  </div>
  </section>
</template>

<script>
export default {
  name: "CoverText",
  props: ["right", "coverImg", "text"],
  watch: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.cover-text
  position: relative
  background-repeat: no-repeat
  background-size: cover
  background-position: center center
  min-height: 80vh
  &::after
    content: ''
    position: absolute
    top: -1px
    left: 0
    width: 100%
    height: calc( 100% + 2px )
    z-index: 1
    background: linear-gradient(0deg, rgba(255, 255, 255), rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255))
  .text
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
</style>
