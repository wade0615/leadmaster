<template>
  <section class="slogan relative bg-gray-100 mt-5">
    <h3 class="text-4xl">{{ title }}</h3>
    <div class="max-w-screen-xl mx-auto pb-12 px-20">
      <div class="pt-10 flex flex-col md:flex-row justify-between">
        <div v-for="(slogan, index) in slogans" :key="'slogan' + index"
          class="flex-1 p-8"
        >
          <v-icon x-large class="mb-5">
            {{ slogan.icon }}
          </v-icon>
          <p class="text-2xl">
            {{ slogan.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "slogan",
  props: ["title", "slogans"],
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
.slogan
  position: relative
  h3
    position: absolute
    top: 0
    left: 50%
    transform: translate(-50%, -50%)
</style>
