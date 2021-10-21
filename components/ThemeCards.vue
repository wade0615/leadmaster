<template>
  <section id="big-three-photo-frame" class="text-center">
    <header class="flex flex-col md:flex-row items-center justify-between">
      <div class="w-full md:w-auto flex items-top">
        <span class="mr-2 text-xl">/</span>
        <span class="text-2xl">Feature Theme</span>
      </div>
      <div class="w-full md:w-auto justify-end flex items-center">
        <span class="text-lg">All Cards</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </header>
    <main>
      main
    </main>
  </section>
</template>

<script>
export default {
  name: "ThemeCards",
  props: [],
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
#theme-cards
  position: relative
</style>
