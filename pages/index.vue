<template>
  <main id="home">
    <Carousel :images="images" class="mb-24" style="height: calc(100vh - 80px)" />
    <h1 class="max-w-screen-xl mx-auto text-3xl md:text-5xl text-center
      py-10 px-8
      mb-24"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt deserunt dignissimos sint aspernatur quisquam dolorum quod error est expedita!
    </h1>
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
    <Featuretag :features="projects" class="mb-52" />
    <BigThreePhotoFrame
      :images="agents"
      class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24"
    />
    <section class="max-w-screen-xl mx-auto p-20 mb-24 text-center">
      <span class="block mx-auto mb-8 max-w-lg">{{ content }}</span>
      <v-btn
        elevation="2"
        class="px-10 max-w-md"
      >
        Click Lorem
      </v-btn>
    </section>
  </main>
</template>

<script>
import introData from "@/assets/mockdata/homeIntro";
import projectsData from "@/assets/mockdata/projects";
import agentsData from "@/assets/mockdata/agents";

export default {
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=David1",
        "https://fakeimg.pl/1200x900/?text=David2",
        "https://fakeimg.pl/1200x900/?text=David3",
      ],
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
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum quae iusto reiciendis, nam commodi quisquam eveniet omnis consectetur saepe?",
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
