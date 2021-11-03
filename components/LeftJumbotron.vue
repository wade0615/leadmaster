<template>
  <section class="left-jumbotron">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-start items-stretch">
        <div class="flex-1">
          <img class="w-full h-48 object-cover" :src="img" :alt="title">
        </div>
        <div class="md:w-1/5 relative">
          <div class="text-container px-8 py-4">
            <h2 class="text-2xl md:text-4xl">
              {{ title }}
            </h2>
            <p class="text-xl md:text-2xl">
              {{ subtitle }}
            </p>
            <p class="text-base md:text-lg">
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
  name: "LeftJumbotron",
  props: ["content"],
  watch: {},
  data() {
    return {
      title: this.content.title,
      subtitle: this.content.subtitle,
      description: this.content.description,
      img: this.content.img
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.left-jumbotron
  position: relative
  img
    @include rwd-md
      height: 600px
  .text-container
    @include rwd-md
      width: 200%
      position: absolute
      right: 10%
      top: 40%
      transform: translate(0, -50%)
      background-color: rgba(229, 231, 235, 0.9)
</style>
