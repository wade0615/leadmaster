<template>
  <main id="exhibition" class="text-center">
    <Carousel :images="images" class="md:pt-8 md:px-16 mb-3 h-96" />
  </main>
</template>

<script>
export default {
  name: "Exhibition",
  props: [],
  watch: {},
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=David1",
        "https://fakeimg.pl/1200x900/?text=David2",
        "https://fakeimg.pl/1200x900/?text=David3",
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#exhibition
  position: relative
  height: 100vh
</style>
