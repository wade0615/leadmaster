<template>
  <main id="agent" class="">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <img
      :src="allAgentsImg" alt="立麥餐飲代理品牌"
      class="
        max-w-screen-md mx-auto
        w-full sm:px-16 mb-20
      "
    >
    <Features :title="agentsTitle" :features="agents" />
  </main>
</template>

<script>
import agentsData from "@/assets/mockdata/agents";
import allAgentsImg from "@/assets/image/agents.jpeg";

export default {
  name: "Agent",
  head: {
    title: "代理商｜立麥餐飲設備有限公司"
  },
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "All Agents",
      banner_description: "我們代理各式多功能蒸烤箱、西餐爐、對流烤箱等，在本地設備與進口設備的組合上，滿足不同類型不同需求的客戶",
      agentsTitle: "認識我們代理的品牌",
      allAgentsImg: allAgentsImg,
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
