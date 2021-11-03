<template>
  <div class="four-boxes max-w-screen-xl mx-auto">
    <section class="mb-9 text-0 text-center">
      <h2 class="mb-3 text-3xl">{{ title }}</h2>
      <span class="inline-block h-px w-14 bg-yellow-600"></span>
    </section>
    <section class="px-2 grid grid-cols-2 lg:grid-cols-4">
      <div class="px-2 mx-auto mb-10 max-w-screen-sm md:max-w-max w-full"
        v-for="(box, index) in boxes" :key="'box' + index"
      >
        <a class="inline-block w-full" :href="box.link">
          <img
            :src="box.img"
            :alt="box.img_alt"
            class="w-full h-40 md:h-72 object-cover mb-4"
          />
          <h3 class="block text-lg">{{ box.title }}</h3>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FourBoxes",
  props: ["title","boxes"],
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
.four-boxes
  position: relative
</style>
