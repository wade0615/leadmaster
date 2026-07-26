<template>
  <main id="agent" class="">
    <Banner
      :eyebrow="banner_eyebrow"
      :title="banner_title"
      :description="banner_description"
      class="max-w-screen-xl mx-auto px-10 py-20"
    />
    <Features :title="agentsTitle" :features="agents" />
  </main>
</template>

<script setup>
import agentsData from '@/assets/mockdata/agents'

useSeoMeta({
  title: '代理商｜立麥餐飲設備有限公司',
  description:
    '立麥餐飲設備代理 MKN、Rational、Angelo Po 蒸烤箱西餐爐具、HALTON 煙罩、Hobart 與 Winterhalter 洗碗機、Williams 冰箱、Hoshizaki 企鵝牌製冰機、Dalla Corte 咖啡機等國際廚房設備品牌。',
  ogTitle: '代理商｜立麥餐飲設備有限公司',
  ogDescription:
    '代理 MKN、Rational、HALTON、Hobart、Winterhalter、Hoshizaki 等國際廚房設備品牌。',
})

const banner_eyebrow = 'All Agents'
const banner_title = '國際廚房設備代理品牌'
const banner_description =
  '我們代理 德製 MKN 蒸烤箱西餐爐具、HALTON 進口煙罩、Hobart 與 Winterhalter 洗碗機、Williams 進口冰箱、Kingsway 進口冷凍庫板、義大利 Angelo Po 蒸烤箱西餐爐具、Rational 多功能蒸烤箱、Dalla Corte 半自動咖啡機、MarkPhili 全爐具設備、Cambro 組合層架、Hatco 保溫燈、日本 Hoshizaki 企鵝牌製冰機、Zumex 榨汁機等國際品牌，在本地設備與進口設備的組合上，滿足不同類型不同需求的客戶'
const agentsTitle = '認識我們代理的品牌'
const agents = agentsData
</script>

<style lang="sass" scoped>
#agent
  position: relative
</style>
