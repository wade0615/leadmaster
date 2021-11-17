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
    <ExpansionPanels class="max-w-screen-xl mx-auto px-10 sm:px-20 pb-10" />
  </main>
</template>

<script>
export default {
  name: "Recruitment",
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "We Are Hiring",
      banner_description: "我們關注員工發展，團隊合作一直是我們的工作常態，期許讓員工與公司一起成長。",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum quae iusto reiciendis, nam commodi quisquam eveniet omnis consectetur saepe?",
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
