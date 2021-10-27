<template>
  <section id="banner" class="py-8 text-center">
    <h2 class="mb-10 text-8xl">{{ title }}</h2>
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
      description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，結合水電瓦斯空調消防各個專業領域的人才，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量。",
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
</style>
