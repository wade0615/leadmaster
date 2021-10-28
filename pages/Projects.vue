<template>
  <div id="projects" class="text-center">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "Our Projects",
      banner_description: "我們專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，包含 酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳 的餐飲規劃",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#projects
  position: relative
  min-height: 100vh
</style>
