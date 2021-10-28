<template>
  <main id="agent" class="">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <Features :features="agents" />
  </main>
</template>

<script>
import agentsData from "@/assets/mockdata/agents";

export default {
  name: "Agent",
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "All Agents",
      banner_description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
      banner_description: "我們代理各式多功能蒸烤箱、西餐爐、對流烤箱等，在本地設備與進口設備的組合上，滿足不同類型不同需求的客戶",
      agents: agentsData,
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
