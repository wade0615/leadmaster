<template>
  <div id="features" class="max-w-screen-xl mx-auto">
    <section class="mb-9 text-0 text-center">
      <h2 class="mb-3 text-3xl">{{ title }}</h2>
      <span class="inline-block h-px w-14 bg-yellow-600"></span>
    </section>
    <section class="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="px-2 mx-auto mb-10 max-w-screen-sm md:max-w-max"
        v-for="(feature, index) in features" :key="'feature' + index"
      >
        <a class="inline-block" :href="feature.link">
          <img
            :src="feature.img"
            :alt="feature.img_alt"
            class="w-full h-80 object-cover mb-4"
          />
          <h3 class="block text-lg">{{ feature.title }}</h3>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "features",
  props: ["features",],
  watch: {},
  data() {
    return {
      title: "Featured",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#features
  position: relative
</style>
