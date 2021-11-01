<template>
  <main id="projects">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <RightJumbotron class="mb-28" />
    <LeftJumbotron class="mb-28" />
    <RightJumbotron class="mb-28" />
    <LeftJumbotron class="mb-28" />
    <FourBoxes :boxes="moreProjects" />
  </main>
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
      projects: ["萬豪","君悅","福容","西華"],
      moreProjects: [
        {
          title: "萬楓酒店",
          img: "https://cache.marriott.com/marriottassets/marriott/RMQFI/rmqfi-dining-1254-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*",
          img_alt: "萬楓酒店",
          link: "https://www.marriott.com/hotels/travel/rmqfi-fairfield-taichung/"
        },
        {
          title: "國賓飯店",
          img: "https://www.ambassador-hotels.com/images/files/taipei/dining/a-cut/4V6A1388.jpg",
          img_alt: "國賓飯店",
          link: "https://www.ambassador-hotels.com/tc/taipei/"
        },
        {
          title: "W Hotel",
          img: "https://cache.marriott.com/marriottassets/marriott/TPEWH/tpewh-woobar-6921-hor-feat.jpg?interpolation=progressive-bilinear&downsize=2000px:*",
          img_alt: "W Hotel",
          link: "https://www.marriott.com/hotels/travel/tpewh-w-taipei/?scid=5d6c9ba8-fdb3-45cd-90d4-fc3cbfe3681c&y_source=1_Mjc4MjA3My01NTktbG9jYXRpb24ud2Vic2l0ZQ%3D%3D&fbclid=IwAR3TancnMEzau_FIpeG-YuP0j9J3Xf72rQJ95dFY2g7P664CjMzScb0JvvQ"
        },
        {
          title: "大板根森林溫泉酒店",
          img: "https://www.thegreatroots.com/wp-content/uploads/2016/12/9c6881c2a0f0dbc2550cdf827c6d8bfd.jpg",
          img_alt: "HOBART",
          link: "https://www.thegreatroots.com/"
        },
      ],
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
