<template>
  <section id="promotes" class="text-center">
    <header class="flex justify-between mb-20">
      <span>Feature Arts</span>
      <span>All Exhibition</span>
    </header>
    <main class="flex flex-col md:flex-row">
      <div v-for="(image, index) in images" :key="'promotes' + index">
        <img
          :src="image"
          alt="Feature image"
          class="w-full h-80 object-cover"
        />
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "Promotes",
  props: [],
  watch: {},
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=Promotes1",
        "https://fakeimg.pl/1200x900/?text=Promotes2",
        "https://fakeimg.pl/1200x900/?text=Promotes3",
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
#promotes
  position: relative
</style>
