<template>
  <section id="big-three-photo-frame">
    <header class="flex flex-col md:flex-row items-center justify-between">
      <div class="w-full md:w-auto flex items-top">
        <span class="mr-2 text-xl">/</span>
        <span class="text-4xl">Feature Agent</span>
      </div>
      <div class="w-full md:w-auto justify-end flex items-center">
        <span class="text-2xl">All Agents</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </header>
    <main class="flex flex-col sm:flex-row mt-20">
      <div v-for="(image, index) in images" :key="'promotes' + index"
        class="flex-1 px-4 mb-12 sm:mb-0"
      >
        <div class="promotes">
          <img
            :src="image"
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
  name: "BigThreePhotoFrame",
  props: [],
  watch: {},
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=Agents1",
        "https://fakeimg.pl/1200x900/?text=Agents2",
        "https://fakeimg.pl/1200x900/?text=Agents3",
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
#big-three-photo-frame
  position: relative
  .promotes
    position: relative
    box-shadow: 10px 10px #dadada
    height: 0%
    padding-top: 100%
    img
      position: absolute
      top: 0
      left: 0
  main > div:nth-child(2)
    .promotes
      @include rwd-sm
        margin-top: -50px
</style>
