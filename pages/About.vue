<template>
  <main id="about" class="">
    <Banner class="max-w-screen-xl mx-auto px-10 py-20" />
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
      :img="maintenance_img"
      :title="maintenance_title"
      :description="maintenance_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="observe_img"
      :title="observe_title"
      :description="observe_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="design_img"
      :title="design_title"
      :description="design_description"
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
export default {
  name: "About",
  props: [],
  watch: {},
  data() {
    return {
      generalManager_img: "https://fakeimg.pl/900x900/?text=Bryan",
      generalManager_title: "吳介仁 Bryan WU",
      generalManager_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      team_img: "https://fakeimg.pl/900x900/?text=Our Team",
      team_title: "The Team",
      team_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      sloganTitle: "How we work",
      slogans: [
        {
          icon: "mdi-wrench",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          icon: "mdi-eye",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, possimus!",
        },
        {
          icon: "mdi-lead-pencil",
          text: "Lorem ipsum dolor sit amet consectetur.",
        }
      ],
      maintenance_img: "https://fakeimg.pl/1200x900/?text=Maintenance",
      maintenance_title: "維修維護",
      maintenance_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      observe_img: "https://fakeimg.pl/900x1200/?text=Observe",
      observe_title: "規劃提案",
      observe_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      design_img: "https://fakeimg.pl/1200x1600/?text=Design",
      design_title: "空間設計",
      design_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      style_img: "https://fakeimg.pl/900x900/?text=Not Just Kitchens",
      style_title: "Not Just Kitchens",
      style_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
      ethos_img: "https://fakeimg.pl/900x1200/?text=Ethos",
      ethos_title: "Our Ethos",
      ethos_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, necessitatibus, non aspernatur dolorum fugit sequi quisquam error reiciendis sit beatae excepturi dicta. Consequuntur consectetur voluptate temporibus doloremque? Natus, sapiente.",
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
