<template>
  <main id="about" class="">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <ImgText
      :img="generalManager_img"
      :title="generalManager_title"
      :description="generalManager_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="team_img"
      :title="team_title"
      :description="team_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <Slogan :title="sloganTitle" :slogans="slogans" />
    <ImgText
      :img="observe_img"
      :title="observe_title"
      :description="observe_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="design_img"
      :title="design_title"
      :description="design_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="maintenance_img"
      :title="maintenance_title"
      :description="maintenance_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="style_img"
      :title="style_title"
      :description="style_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="ethos_img"
      :title="ethos_title"
      :description="ethos_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
  </main>
</template>

<script>
import aboutData from "@/assets/mockdata/about";

export default {
  name: "About",
  head: {
    title: "關於我們｜立麥餐飲設備有限公司"
  },
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "About Us",
      banner_description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
      generalManager_img: aboutData.generalManager.img,
      generalManager_title: aboutData.generalManager.title,
      generalManager_description: aboutData.generalManager.description,
      team_img: aboutData.team.img,
      team_title: aboutData.team.title,
      team_description: aboutData.team.description,
      sloganTitle: "How we work",
      slogans: [
        {
          icon: "mdi-eye",
          text: "精準分析",
        },
        {
          icon: "mdi-lead-pencil",
          text: "事前規劃",
        },
        {
          icon: "mdi-wrench",
          text: "快速安裝",
        },
      ],
      observe_img: aboutData.observe.img,
      observe_title: aboutData.observe.title,
      observe_description: aboutData.observe.description,
      design_img: aboutData.design.img,
      design_title: aboutData.design.title,
      design_description: aboutData.design.description,
      maintenance_img: aboutData.maintenance.img,
      maintenance_title: aboutData.maintenance.title,
      maintenance_description: aboutData.maintenance.description,
      style_img: aboutData.style.img,
      style_title: aboutData.style.title,
      style_description: aboutData.style.description,
      ethos_img: aboutData.ethos.img,
      ethos_title: aboutData.ethos.title,
      ethos_description: aboutData.ethos.description,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#about
  position: relative
  min-height: 100vh
</style>
