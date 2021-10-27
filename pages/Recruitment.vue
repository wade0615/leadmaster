<template>
  <main id="recruitment" class="text-center">
    <Carousel :images="images"
      class="max-w-screen-xl mx-auto md:pt-8 md:px-16 mb-16" style="height: 60vh"
    />
    <BigThreePhotoFrame class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24" />
    <ThemeCards class="max-w-screen-xl mx-auto px-8 md:px-20 mb-24" />
    <section class="max-w-screen-xl mx-auto mb-24 text-center">
      <span class="block mx-auto mb-8 max-w-lg">{{ content }}</span>
      <v-btn
        elevation="2"
        class="px-10 max-w-md"
      >
        Click Lorem
      </v-btn>
    </section>
    <Slogan :title="sloganTitle" :slogans="slogans" />
    <p>
      我們專注於台灣尖端的餐飲規劃設計顧問角色,專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上,<br>
      結合水電瓦斯空調消防各個專業領域的人才,在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量,
    </p>
    <p>
      所謂的餐飲規劃包含~酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳的操作動線規劃,
    </p>
    <p>
      我們代理特殊大型炭烤爐具GRILLWORK'S,德製RATIONAL, M.K.N蒸烤箱,HOBART洗碗機,Manitowoc製冰機,義大利大廠Angelo po西式島型爐具,桌上型6 pan, 10pan蒸烤箱,落地型20 pan, 40 pan蒸烤箱, 蒸氣鍋爐設備,robot coupe食物調理機,Cleveland 大型蒸氣迴轉鍋,ANGELO PO Blast chiller急速冷凍櫃,及麵包房設備大廠 ,
    </p>
    <p>
      我們定期國外看展,安排與建築師及室內設計師開會,協調工地配合事項,
    </p>
    <p>
      本工作相較一般市場工作機會更為專業!學習範圍廣,除專業知識外,公司同事講求Teamwork 相處融洽!歡迎新血加入,公司培訓!
    </p>
    <p>
      本公司客戶群有The Taipei Marriott Hotel,君悅HAYTT飯店,福容飯店,國賓飯店,西華飯店,W hotel,......等國際五星級飯店,都是我們服務配合的客戶企業!
    </p>
    <p>
      立麥餐飲設備股份有限公司在成立短短幾年時間內，憑藉專業完整的規劃設計、精密快速的施工品質，以及良好的售後服務，迅速獲得客戶的肯定與嘉許。
      <br>2006年，立麥餐飲設備有限公司與捷克最大的多功能蒸烤箱製造廠RETIGO簽訂合約，成為台灣總代理。同時立麥轉投資不銹鋼工廠與風管工程公司，加強公司組織，減低公司成本，隨後簽訂代理SOUTHBEND西餐爐系列、BLODJETT對流烤箱系列、PITCO高效率油炸機，在本地設備與進口設備的組合上，取得成本上的絕對優勢。
      <br>立麥餐飲設備有限公司積極整合餐飲設備工程設計與翻修工程的服務，公司成員皆具4-18年設計及施工的經驗，足以滿足不同類型不同需求的客戶，AUTO CAD套圖設計施工，完整的先前作業，勝於事後的修補，將誤差降到最低，我們期許新團隊的組合，新力量的衍生，不斷推陳出新，以最精良的服務品質回報客戶。
    </p>
    <ul>
      <li>服務介紹</li>
      <li>案例</li>
      <li>代理商</li>
      <li>歡迎新血</li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Recruitment",
  props: [],
  watch: {},
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=David1",
        "https://fakeimg.pl/1200x900/?text=David2",
        "https://fakeimg.pl/1200x900/?text=David3",
      ],
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum quae iusto reiciendis, nam commodi quisquam eveniet omnis consectetur saepe?",
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
#recruitment
  position: relative
  min-height: 100vh
</style>
