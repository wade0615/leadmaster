<template>
  <main id="projects">
    <Banner
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <section v-for="(project, index) in projects" :key="'project' + index">
      <RightJumbotron
        v-if="index % 2 === 0" class="mb-28" :content="project"
        @open-gallery="openGallery"
      />
      <LeftJumbotron
        v-else class="mb-28" :content="project"
        @open-gallery="openGallery"
      />
    </section>
    <section class="max-w-screen-md mx-auto px-10 mb-24">
      <div class="mb-6 text-center">
        <h2 class="mb-3 text-3xl">國際酒店餐飲設備顧問</h2>
        <span class="inline-block h-px w-14 bg-yellow-600"></span>
      </div>
      <p class="text-base md:text-lg leading-relaxed">
        {{ consultant_intro }}
      </p>
    </section>
    <FourBoxes
      :title="moreProjectsTitle" :boxes="moreProjects"
      @open-gallery="openGallery"
    />
    <GalleryModal
      v-if="galleryProject"
      :project="galleryProject"
      @close="galleryProject = null"
    />
  </main>
</template>

<script setup>
import projectsData from '@/assets/mockdata/projects'
import { getGalleryImages } from '@/assets/mockdata/projectGalleries'

useSeoMeta({
  title: '國際酒店餐飲設備顧問實績｜立麥餐飲設備',
  description:
    '立麥餐飲設備作為國際酒店餐飲設備顧問，於 HACCP 規範與國際連鎖酒店標準下規劃廚房工程：台北萬豪、板橋馥華艾美、阿里山英迪格、嘉義福容voco 等五星級飯店實績。',
  ogTitle: '國際酒店餐飲設備顧問實績｜立麥餐飲設備',
  ogDescription:
    '台北萬豪、板橋馥華艾美、阿里山英迪格、嘉義福容voco 等國際五星級飯店廚房工程實績。',
})

const banner_title = 'Our Projects'
const banner_description =
  '我們作為國際酒店餐飲設備顧問，專司整合餐飲空間於 HACCP 規範與各國際連鎖飯店標準之上，涵蓋 酒水吧檯、日本料理、西餐廚房、豪宅型精緻廚具、五星級飯店開放式廚房、大型宴會廳 的餐飲規劃 <br/><br/> 台北萬豪酒店、板橋馥華艾美酒店、阿里山英迪格酒店、嘉義福容voco酒店、台中萬楓酒店、新莊凱悅嘉軒酒店、台南禧榕軒大飯店......等國際五星級飯店，都是我們服務配合的客戶企業！'

const consultant_intro =
  '我們長期擔任國際酒店餐飲設備顧問，熟悉萬豪、凱悅、IHG 等國際連鎖集團的廚房標準與驗收流程，從開放式廚房、宴會廳到全日餐廳皆有完整經驗。所有實績案場皆可透過「案場照片」檢視我們的施工成果。'

const withPhotos = projectsData.map((project) => ({
  ...project,
  photos: getGalleryImages(project.gallery),
}))
const projects = withPhotos.slice(0, 4)
const moreProjectsTitle = 'More Projects'
const moreProjects = withPhotos.slice(4)

const galleryProject = ref(null)
const openGallery = (project) => {
  galleryProject.value = project
}
</script>

<style lang="sass" scoped>
#projects
  position: relative
  min-height: 100vh
</style>
