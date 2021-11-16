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
import bossImg from "@/assets/image/boss.jpeg";
import teamImg from "@/assets/image/team.jpeg";
import observeImg from "@/assets/image/observe.jpg";
import designImg from "@/assets/image/interior_design.jpg";
import maintenanceImg from "@/assets/image/maintenance.jpg";
import notJustKitchenImg from "@/assets/image/notJustKitchen.jpg";
import ethosImg from "@/assets/image/ethos.jpeg";

export default {
  name: "About",
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "About Us",
      banner_description: "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
      generalManager_img: bossImg,
      generalManager_title: "吳介仁 Bryan WU",
      generalManager_description: "立麥餐飲設備有限公司 總經理，在業界擁有超過 20 年的規劃、設計、施工經驗，教育並帶領公司團隊不斷挑戰不同的大型飯店專案，持續為成為業界首屈一指的飯店餐飲設計顧問而積極推動公司成長。",
      team_img: teamImg,
      team_title: "The Team",
      team_description: "我們在成立短短幾年時間內，憑藉專業完整的規劃設計、精密快速的施工品質，以及良好的售後服務，迅速獲得客戶的肯定與嘉許。我們的案子由技術嫻熟的團隊規劃和施工。員工對於企業各個方面的成功至關重要，他們訓練有素，知識淵博。",
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
      observe_img: observeImg,
      observe_title: "規劃提案",
      observe_description: "所謂的餐飲規劃包含~酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳的操作動線規劃，我們針對不同類型的客人，搭配國內外適合的代理設備，提出最適合客戶的預算與方案。",
      design_img: designImg,
      design_title: "空間設計",
      design_description: "廚房在空間的規劃上需考量的除了空間大小，還有整體動線,出餐效率,消防安全,油煙排水...等等，我們團隊藉由豐富的設計及施工的經驗，及事前的 AUTOCAD 設計規劃，幫客戶訂定出最適合的空間利用。",
      maintenance_img: maintenanceImg,
      maintenance_title: "維修維護",
      maintenance_description: "富有經驗的施工團隊熟悉各式各樣廚房設備的結構與使用方式，可以在設備出現狀況的第一時間抵達現場並快速的找出問題，將設備故障造成的盈利損失風險降至最低，良好的施工品質與售後服務讓我們獲得大量客戶的肯定，在業界擁有良好的口碑。",
      style_img: notJustKitchenImg,
      style_title: "不只是廚房",
      style_description: "我們從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作。讓您的廚房不只是出餐的地方，更可以被打造成乾淨明亮安全的舒適環境。",
      ethos_img: ethosImg,
      ethos_title: "企業價值",
      ethos_description: "我們志在成為業界首屈一指廚房設計團隊。我們相信，一個好的廚房可以為廚師團隊帶來更舒適的工作環境，進而為企業帶來更高水準的菜色呈現，客人的用餐體驗也會有更多層次的變化。",
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
