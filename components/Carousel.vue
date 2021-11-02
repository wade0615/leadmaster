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
  </section>
</template>

<script>
export default {
  name: "Carousel",
  props: ["images"],
  data() {
    return {};
  },
  mounted() {},
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
</style>
