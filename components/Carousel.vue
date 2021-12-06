<template>
  <section class="carousel">
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image"
      >
      </v-carousel-item>
    </v-carousel>
    <div class="cover-text">
      <div class="
        max-w-screen-xl mx-auto
        p-10 sm:p-20 pt-24 sm:pt-36
      ">
        <h2 class="
          break-words sm:break-normal
          font-bold
          text-4xl sm:text-5xl
          mb-8
        ">
          {{ text.title }}
          <br>
          {{ text.title2 }}
        </h2>
        <p class="font-bold text-lg">
          {{ text.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  props: ["images", "text"],
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
};
</script>

<style lang="sass" scoped>
.carousel::v-deep
  position: relative
  .v-window__prev
    display: none
    left: 0
    // @include rwd-sm
    //   display: block
  .v-window__next
    display: none
    right: 0
    // @include rwd-sm
    //   display: block
  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 1
    background: linear-gradient(135deg, rgba(255, 219, 219, 1), rgba(255, 255, 255, .5))
  .cover-text
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
    transition: all 1s
    h2, p
      opacity: 0
      animation-name: show-text
      animation-duration: 0.7s
      animation-fill-mode: forwards
    h2
      animation-delay: 2s
    p
      animation-delay: 3s

@keyframes show-text
  0%
    transform: translateX(100px)
    opacity: 0
  100%
    transform: translateX(0px)
    opacity: 1
</style>
