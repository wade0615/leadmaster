<template>
  <section class="feature-tag max-w-screen-xl mx-auto mb-8 p-6 bg-red-300">
    <!-- 特色分類大圖 -->
    <div
      class="
        main-feature
        grid grid-cols-1
        md:grid-cols-5
        items-center
        mb-10
        md:pb-10
      "
    >
      <div class="md:col-span-2 md:order-last md:pl-14">
        <h2 class="mb-3 mb-md-4 text-xl md:text-4xl">{{ title }}</h2>
        <p class="mb-0 mb-md-4 text-sm md:text-lg">{{ subtitle }}</p>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          class="
            hidden
            md:block
            w-max
            ml-auto
            px-5
            py-1
            border border-dark
            uppercase
            no-underline
          "
          >{{ moreFeature }}
        </a>
      </div>
      <div class="md:col-span-3">
        <img
          src="https://fakeimg.pl/1200x900/?text=David"
          alt="Feature image"
          class="w-full h-80 object-cover"
        />
      </div>
    </div>
    <!-- 特色商品小圖 -->
    <div
      class="
        sub-feature
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        items-center
        mb-10
      "
    >
      <div class="flex mb-4 mb-md-0">
        <img
          src="https://fakeimg.pl/1200x900/?text=David1"
          alt="Feature post image"
          class="w-32 lg:w-1/3 xl:w-2/5"
        />
        <p class="flex-auto pl-3 px-md-4">
          Feature post description. Feature post description.
        </p>
      </div>
      <div class="flex mb-4 mb-md-0">
        <img
          src="https://fakeimg.pl/1200x900/?text=David2"
          alt="Feature post image"
          class="w-32 lg:w-1/3 xl:w-2/5"
        />
        <p class="flex-auto pl-3 px-md-4">
          Feature post description. Feature post description.
        </p>
      </div>
      <div class="flex md:hidden xl:flex">
        <img
          src="https://fakeimg.pl/1200x900/?text=David3"
          alt="Feature post image"
          class="w-32 lg:w-1/3 xl:w-2/5"
        />
        <p class="flex-auto pl-3 px-md-4">
          Feature post description. Feature post description.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeatureTag",
  props: [],
  watch: {},
  data() {
    return {
      title: "Travel to see things different",
      subtitle: "走出屬於自己的故事",
      moreFeature: "discover more",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.feature-tag
  position: relative
  .main-feature
    @include rwd-md
      border-bottom: 1px solid #C0B6AE
</style>
