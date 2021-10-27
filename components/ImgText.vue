<template>
  <section id="img-text" class="">
    <div class="flex flex-col sm:flex-row items-start lg:items-center">
      <div class="mb-10 sm:m-0 sm:w-1/3">
        <img
          :src="img"
          alt="Feature image"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex-1 px-8 sm:px-16">
        <h3 class="text-2xl">
          {{ title }}
        </h3>
        <p class="text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImgText",
  props: ["img", "title", "description"],
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
#img-text
  position: relative
</style>
