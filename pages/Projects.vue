<template>
  <main id="projects">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <section v-for="(project, index) in projects" :key="'project' + index">
      <RightJumbotron v-if="index%2 === 0"
        class="mb-28" :content="project"
      />
      <LeftJumbotron v-else
        class="mb-28" :content="project"
      />
    </section>
    <FourBoxes :title="moreProjectsTitle" :boxes="moreProjects" />
  </main>
</template>

<script>
import projectsData from "@/assets/mockdata/projects";

export default {
  name: "Projects",
  head: {
    title: "我們的客戶｜立麥餐飲設備有限公司"
  },
  props: [],
  watch: {},
  data() {
    return {
      banner_title: "Our Projects",
      banner_description: "我們專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，包含 酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳 的餐飲規劃",
      projectsData: projectsData,
      projects: [],
      moreProjectsTitle: "More Projects",
      moreProjects: [],
    };
  },
  computed: {
    },
  methods: {
    getProjects(projectsData) {
      const projects = projectsData;
      return projects.slice(0, 4);
    },
    getMoreProjects(projectsData) {
      const moreProjects = projectsData;
      return moreProjects.slice(4);
    }
  },
  mounted() {
    this.projects = this.getProjects(this.projectsData);
    this.moreProjects = this.getMoreProjects(this.projectsData);
  },
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#projects
  position: relative
  min-height: 100vh
</style>
