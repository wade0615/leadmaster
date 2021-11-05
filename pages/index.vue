<template>
  <main id="home">
    <Carousel :images="images" class="mb-20 md:mb-24" style="height: calc(100vh - 80px)" />
    <h1
      class="
        max-w-screen-xl mx-auto
        text-2xl md:text-4xl text-center
        py-10 px-8
        mb-18 md:mb-24
      "
      v-html="intro_content"
    ></h1>
    <ImgText
      :img="intro_1_img"
      :title="intro_1_title"
      :description="intro_1_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="intro_2_img"
      :title="intro_2_title"
      :description="intro_2_description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20 mb-20"
    />
    <Featuretag :features="projects" class="mb-32 md:mb-52" />
    <BigThreePhotoFrame
      :images="agents"
      class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24"
    />
    <section class="contact-us max-w-screen-xl mx-auto p-20 text-center">
      <span class="block mx-auto mb-8 max-w-lg md:text-lg">{{ contact_content }}</span>
      <v-btn
        elevation="2"
        class="px-10 max-w-md"
        outlined
        href="mailto:bryanwu088@gmail.com"
      >
        Contact Us
      </v-btn>
    </section>
  </main>
</template>

<script>
import introData from "@/assets/mockdata/homeIntro";
import projectsData from "@/assets/mockdata/projects";
import agentsData from "@/assets/mockdata/agents";

import carouselImg_1 from "@/assets/image/design2.jpeg";
import carouselImg_2 from "@/assets/image/construction.jpeg";
import carouselImg_3 from "@/assets/image/design.jpeg";
import carouselImg_4 from "@/assets/image/construction2.jpeg";

export default {
  data() {
    return {
      images: [
        carouselImg_1,
        carouselImg_2,
        carouselImg_3,
        carouselImg_4
      ],
      intro_content: "我們從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工<br>專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作",
      intro_1_img: introData.intro_1_img,
      intro_1_title: introData.intro_1_title,
      intro_1_description: introData.intro_1_description,
      intro_2_img: introData.intro_2_img,
      intro_2_title: introData.intro_2_title,
      intro_2_description: introData.intro_2_description,
      projectsData: projectsData,
      projects: [],
      agentsData: agentsData,
      agents: [],
      contact_content: "我們熱情的接受來自各方的合作邀約與業務洽談，若對於公司業務、團隊經驗、職務招募...等有任何疑問，歡迎來信詢問",
    };
  },
  computed: {
    },
  methods: {
    getProjects(projectsData) {
      const projects = projectsData;
      return projects.slice(0, 4);
    },
    getAgents(agentsData) {
      const agents = agentsData;
      return agents.slice(0, 3);
    },
  },
  mounted() {
    this.projects = this.getProjects(this.projectsData);
    this.agents = this.getAgents(this.agentsData);
  },
  beforeMount() {},
}
</script>

<style lang="sass" scoped>
#home
  position: relative
  .contact-us
    a
      color: rgba(29, 78, 216)
      border: solid 1px rgba(29, 78, 216)
</style>