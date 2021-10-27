<template>
  <main id="agent" class="text-center">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <BigThreePhotoFrame class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24" />
    <Slogan :title="sloganTitle" :slogans="slogans" />
  </main>
</template>

<script>
export default {
  name: "Agent",
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "All Agents",
      banner_description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
      banner_description: "我們代理各式多功能蒸烤箱、西餐爐、對流烤箱等，在本地設備與進口設備的組合上，滿足不同類型不同需求的客戶",
      sloganTitle: "Slogan Slogan Slogan",
      slogans: [
        {
          icon: "mdi-wrench",
          text: "text text text text text text text text text text text text text text text ",
        },
        {
          icon: "mdi-eye",
          text: "text text text",
        },
        {
          icon: "mdi-lead-pencil",
          text: "text text text",
        }
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#agent
  position: relative
</style>
