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
        <div>
          <a class="inline-block" href="http://">
            <img
              :src="feature.img"
              :alt="feature.img_alt"
              class="w-full h-80 object-cover"
            />
          </a>
        </div>
        <a class="block mb-2" href="http://">
          <span class="text-sm text-red-600">{{ feature.category }}</span>
        </a>
        <a class="block mb-4" href="http://">
          <h3 class="text-lg">{{ feature.title }}</h3>
        </a>
        <div class="flex items-center justify-between">
          <span>{{ feature.date }}</span>
          <v-icon v-if="feature.collection">
            mdi-bookmark-outline
          </v-icon>
          <v-icon v-else>
            mdi-bookmark
          </v-icon>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "features",
  props: [],
  watch: {},
  data() {
    return {
      title: "Featured",
      features: [
        {
          title: "Feature 1",
          category: "Category 1",
          date: "2021/03/27",
          img: "https://fakeimg.pl/1200x900/?text=Feature1",
          img_alt: "Feature1 alt",
          collection: true
        },
        {
          title: "Feature 2",
          category: "Category 2",
          date: "2021/07/27",
          img: "https://fakeimg.pl/1200x900/?text=Feature2",
          img_alt: "Feature2 alt",
          collection: false
        },
        {
          title: "Feature 3",
          category: "Category 3",
          date: "2021/09/12",
          img: "https://fakeimg.pl/1200x900/?text=Feature3",
          img_alt: "Feature3 alt",
          collection: true
        },
      ]
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
