<template>
  <section id="theme-cards" class="text-center">
    <header class="flex flex-col md:flex-row items-center justify-between mb-8">
      <div class="w-full md:w-auto flex items-top">
        <span class="mr-2 text-xl">/</span>
        <span class="text-2xl">Feature Theme</span>
      </div>
      <div class="w-full md:w-auto justify-end flex items-center">
        <span class="text-lg">All Cards</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </header>
    <main class="flex flex-col md:flex-row">
      <div class="mb-10 md:mb-0 md:w-1/3">
        <img
          src="https://fakeimg.pl/600x900/?text=Feature Theme"
          alt="Feature image"
          class="w-full max-h-80 object-cover"
        />
      </div>
      <div class="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:pl-8">
        <div v-for="(themePost, index) in themePosts" :key="'themePost' + index"
          class="theme-posts"
        >
          <img
            :src="themePost"
            alt="Feature image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="theme-posts md:hidden">
          <img
            :src="themeLastPost"
            alt="Feature image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "ThemeCards",
  props: [],
  watch: {},
  data() {
    return {
      themePosts: [
        "https://fakeimg.pl/1200x900/?text=themePosts1",
        "https://fakeimg.pl/1200x900/?text=themePosts2",
        "https://fakeimg.pl/1200x900/?text=themePosts3",
      ],
      themeLastPost: "https://fakeimg.pl/1200x900/?text=themePosts4"
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#theme-cards
  position: relative
  .theme-posts
    position: relative
    height: 0%
    padding-top: 100%
    img
      position: absolute
      top: 0
      left: 0
</style>
