<template>
  <main id="about" class="">
    <Banner
      :eyebrow="banner_eyebrow"
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <ImgText
      :img="aboutData.team.img"
      :title="aboutData.team.title"
      :description="aboutData.team.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="aboutData.intro_1.img"
      :title="aboutData.intro_1.title"
      :description="aboutData.intro_1.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="aboutData.intro_2.img"
      :title="aboutData.intro_2.title"
      :description="aboutData.intro_2.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <Slogan :title="sloganTitle" :slogans="slogans" />
    <ImgText
      :img="aboutData.observe.img"
      :title="aboutData.observe.title"
      :description="aboutData.observe.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="aboutData.design.img"
      :title="aboutData.design.title"
      :description="aboutData.design.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="aboutData.maintenance.img"
      :title="aboutData.maintenance.title"
      :description="aboutData.maintenance.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <TextImg
      :img="aboutData.style.img"
      :title="aboutData.style.title"
      :description="aboutData.style.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
    <ImgText
      :img="aboutData.ethos.img"
      :title="aboutData.ethos.title"
      :description="aboutData.ethos.description"
      class="max-w-screen-xl mx-auto p-10 sm:p-20"
    />
  </main>
</template>

<script setup>
import aboutData from '@/assets/mockdata/about'

useSeoMeta({
  title: '關於我們與服務項目｜廚房設計・HACCP・酒吧顧問｜立麥餐飲設備',
  description:
    '立麥餐飲設備專注於廚房設計與 HACCP 顧問輔導，服務涵蓋酒吧顧問與酒櫃設計、中央廚房與食品加工廠設計，以精準分析、事前規劃、快速安裝，在台灣的五星級飯店推動廚房設備運轉的力量。',
  ogTitle: '關於我們與服務項目｜廚房設計・HACCP・酒吧顧問｜立麥餐飲設備',
  ogDescription:
    '廚房設計、HACCP 顧問輔導、酒吧與酒櫃設計、食品加工廠設計——在台灣的五星級飯店推動廚房設備運轉的力量。',
})

const banner_eyebrow = 'About Us'
const banner_title = '廚房設計與 HACCP 顧問服務'
const banner_description =
  '我們專注於廚房設計與 HACCP 顧問輔導的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量'
const sloganTitle = 'How we work'
const slogans = [
  {
    icon: 'mdi-eye',
    text: '精準分析',
  },
  {
    icon: 'mdi-lead-pencil',
    text: '事前規劃',
  },
  {
    icon: 'mdi-wrench',
    text: '快速安裝',
  },
]
</script>

<style lang="sass" scoped>
#about
  position: relative
  min-height: 100vh
</style>
