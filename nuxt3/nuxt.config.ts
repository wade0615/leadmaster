export default defineNuxtConfig({
  compatibilityDate: '2026-07-20',

  app: {
    head: {
      title: '立麥餐飲設備有限公司',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          property: 'og:title',
          content: 'Leadmaster 立麥餐飲設備有限公司',
        },
        {
          property: 'og:description',
          content:
            '立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作',
        },
        {
          property: 'og:site_name',
          content: '餐飲設備規劃公司',
        },
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:image', content: '/og_img.png' },
        {
          name: 'google-site-verification',
          content: 'x1KDy2SSiRcOMjKFhI-ng2n7X_HosHVl8Wygn_ptFHg',
        },
        {
          name: 'google-site-verification',
          content: 'bwRWjYXKfqqFwRx-6dhFK3u1gYLu0Qdex0AeriE1Msk',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@/assets/css/hamburgers/hamburgers.scss', '@/assets/css/global.sass'],

  vite: {
    css: {
      preprocessorOptions: {
        // 讓每個元件的 <style lang="sass"> 都能用 $leadmaster-red 與 rwd mixins
        sass: {
          additionalData: '@use "@/assets/css/shared" as *\n',
        },
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
  ],

  site: {
    url: 'https://leadmaster.tw',
    name: '立麥餐飲設備有限公司',
  },

  googleFonts: {
    families: {
      Vollkorn: [400, 700],
    },
    display: 'swap',
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: '立麥餐飲設備有限公司',
      short_name: 'Leadmaster',
      lang: 'zh-TW',
    },
  },
})
