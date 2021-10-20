<template>
  <main id="exhibition" class="text-center">
    <div class="max-w-screen-xl mx-auto">
      <Carousel :images="images"
        class="md:pt-8 md:px-16 mb-16" style="height: 60vh"
      />
      <Promotes class="md:px-20  mb-5" />
    </div>
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
</style>
