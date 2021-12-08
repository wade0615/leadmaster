<template>
  <section
    :style="{backgroundImage: 'url(' + taiwan + ')'}"
    class="cover-text"
  >
  <div class="text">
    <article class="p-20 max-w-screen-xl mx-auto">
      <p
        v-html="text"
        class="sm:w-1/2 text-lg"
      ></p>
    </article>
  </div>
  </section>
</template>

<script>
import taiwan from "@/assets/image/images/taiwan.jpg";

export default {
  name: "CoverText",
  props: [],
  watch: {},
  data() {
    return {
      taiwan: taiwan,
      text: "公司創立於1994年，至今已運營25年頭，我們走過亞洲、美洲，完成了400多個項目， 主要項目落在世界級的餐廳、酒店、賭場、主題公園、渡假區域、科技廠員工餐廳和會 議中心。立麥餐飲設備有限公司 專注於酒店設計和整體概念發想，並協助客戶規劃相關內容，進而發展出完善的餐飲空間。<br><br>2012年起，我們將自己重新定位為 酒店顧問 ，以反映我們對整個餐飲過程的擴展，從規劃後台設施轉型為餐飲概念的設計提供者。我們徹底改變並期待為餐飲業帶來了新的視角，打破了廚師和顧客之間的隔閡。"
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.cover-text
  position: relative
  background: no-repeat center
  min-height: 80vh
  &::after
    content: ''
    position: absolute
    top: -1px
    left: 0
    width: 100%
    height: calc( 100% + 2px )
    z-index: 1
    background: linear-gradient(0deg, rgba(255, 255, 255), rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255))
  .text
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
</style>
