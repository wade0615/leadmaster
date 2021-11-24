<template>
  <main id="recruitment" class="">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20 text-center"
    />
    <section class="max-w-screen-xl mx-auto px-10 py-8 text-center text-lg">
      <p>
        我們定期國外看展,安排與建築師及室內設計師開會,協調工地配合事項,本工作相較一般市場工作機會更為專業也更為冷門
      </p>
      <p>
        我們除了會耐心培養你學習水電,排煙空調,瓦斯,消防等專業知識，還會有 國外看展,安排與建築師及室內設計師開會,協調工地配合事項,設計學習各國進口餐飲設備的維修技能,國外技師培訓機會 ... 等不同的機會
      </p>
      <p>
        歡迎新血加入，共同努力共事。
      </p>
    </section>
    <h2 class="max-w-screen-xl mx-auto px-10 sm:px-20 py-8">
      目前開放職缺：
    </h2>
    <ExpansionPanels :expansions="recruitments"
      class="max-w-screen-xl mx-auto px-10 sm:px-20 pb-10"
      v-if="recruitments.length > 0"
    />
    <p v-else class="max-w-screen-xl mx-auto px-10 sm:px-20">
      目前沒有開放職缺唷！感謝您！有任何興趣還是歡迎來信詢問
    </p>
  </main>
</template>

<script>
export default {
  name: "Recruitment",
  head: {
    title: "職缺招募｜立麥餐飲設備有限公司"
  },
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "We Are Hiring",
      banner_description: "我們關注員工發展，團隊合作一直是我們的工作常態，期許讓員工與公司一起成長。",
      recruitments: [
        // {
        //   title: "設備維修工程師",
        //   descriptions: ["設備維護與安裝", "40000/月 以上"]
        // },
        // {
        //   title: "專案設計工程師",
        //   descriptions: ["空間設計與專案規劃", "40000/月 以上"]
        // },
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
#recruitment
  position: relative
  min-height: 100vh
</style>
