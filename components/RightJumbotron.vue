<template>
  <section class="right-jumbotron">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-start items-stretch">
        <div class="flex-1">
          <img :src="img" :alt="title">
        </div>
        <div class="md:w-1/5 relative md:order-first">
          <div class="text-container px-8 py-4">
            <h2 class="text-4xl">
              {{ title }}
            </h2>
            <p class="text-2xl">
              {{ subTitle }}
            </p>
            <p class="text-lg">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RightJumbotron",
  props: [],
  watch: {},
  data() {
    return {
      title: "RightJumbotron",
      subTitle: "RightJumbotron",
      description: "RightJumbotron",
      img: "https://www.sherwood.com.tw/upload/f2e/banner950x1900/tos1.png"
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.right-jumbotron
  position: relative
  .text-container
    @include rwd-md
      width: 200%
      position: absolute
      left: 0
      top: 40%
      transform: translate(0, -50%)
      background-color: rgba(229, 231, 235, 0.6)
</style>
