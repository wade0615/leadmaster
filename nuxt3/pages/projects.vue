<template>
  <main id="projects">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <section v-for="(project, index) in projects" :key="'project' + index">
      <RightJumbotron v-if="index % 2 === 0" class="mb-28" :content="project" />
      <LeftJumbotron v-else class="mb-28" :content="project" />
    </section>
    <FourBoxes :title="moreProjectsTitle" :boxes="moreProjects" />
  </main>
</template>

<script setup>
import projectsData from '@/assets/mockdata/projects'

useHead({
  title: '我們的客戶｜立麥餐飲設備有限公司',
})

const banner_title = 'Our Projects'
const banner_description =
  '我們專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，包含 酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳 的餐飲規劃 <br/><br/> The Taipei Marriott Hotel, 君悅 HAYTT 飯店, 福容飯店, 國賓飯店, 西華飯店, W hotel ......等國際五星級飯店，都是我們服務配合的客戶企業！'
const projects = projectsData.slice(0, 4)
const moreProjectsTitle = 'More Projects'
const moreProjects = projectsData.slice(4)
</script>

<style lang="sass" scoped>
#projects
  position: relative
  min-height: 100vh
</style>
