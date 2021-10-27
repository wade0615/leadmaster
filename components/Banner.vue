<template>
  <section id="banner" class="py-8 text-center">
    <h2 class="mb-10 text-6xl md:text-8xl">{{ title }}</h2>
    <p class="max-w-screen-md mx-auto">{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: [],
  watch: {},
  data() {
    return {
      title: "About Us",
      description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#banner
  position: relative
  h2
    position: relative
    &::after
      content: ""
      position: absolute
      top: 100%
      left: 50%
      width: 10%
      height: 1px
      transform: translate(-50%, 0)
      background-color: #000
</style>
