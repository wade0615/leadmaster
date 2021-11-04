<template>
  <section class="feature-tag max-w-screen-xl mx-auto mb-8 p-6 bg-gray-200">
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
        <h2 class="mb-3 md:mb-2 text-3xl md:text-4xl">{{ title }}</h2>
        <p class="mb-3 md:mb-4 text-2xl md:text-4xl">{{ subtitle }}</p>
        <p class="mb-0 md:mb-4 text-sm md:text-lg">{{ description }}</p>
        <NuxtLink
          to="/projects"
          class="
            hidden
            md:block
            w-max
            ml-auto
            px-5 py-1
            border border-gray-900
            uppercase
            no-underline
          "
          >{{ moreFeature }}
        </NuxtLink>
      </div>
      <div class="md:col-span-3">
        <img
          :src="img"
          :alt="img_alt"
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
        items-start
        mb-10
      "
    >
      <div v-for="(subFeature, index) in subFeatures" :key="'subFeature' + index"
        :class="[index === 2 ? 'flex md:hidden xl:flex' : 'flex mb-4 md:mb-0']"
      >
        <img
          :src="subFeature.img"
          :alt="subFeature.img_alt"
          class="w-32 lg:w-1/3 xl:w-2/5 h-24 lg:h-32 object-cover"
        />
        <div class="flex-auto pl-3 md:px-4">
          <h3 class="text-xl xl:text-2xl">{{ subFeature.title }}</h3>
          <p class="text-lg xl:text-xl">{{ subFeature.subtitle }}</p>
          <p class="text-sm xl:text-base">{{ subFeature.description }}</p>
        </div>
      </div>
    </div>
    <div>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        class="
          block
          md:hidden
          w-full
          ml-auto
          px-5 py-1
          border border-gray-900
          text-center
          uppercase
          no-underline
        "
        >{{ moreFeature }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeatureTag",
  props: ["features"],
  watch: {
    features(){
      this.setFeatures();
    },
  },
  data() {
    return {
      title: "",
      subtitle: "",
      description: "",
      img: "",
      img_alt: "",
      subFeatures: [],
      moreFeature: "discover more",
    };
  },
  computed: {},
  methods: {
    setFeatures() {
      const mainFeature = this.features.slice(0,1)[0];
      this.title = mainFeature.title;
      this.subtitle = mainFeature.subtitle;
      this.description = mainFeature.description;
      this.img = mainFeature.img;
      this.img_alt = mainFeature.img_alt;

      this.subFeatures = this.features.slice(1);
      console.log("🚀 ~ file: Featuretag.vue ~ line 132 ~ setFeatures ~ this.subFeatures", this.subFeatures)
    },
  },
  mounted() {
  },
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
