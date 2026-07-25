export default defineNuxtConfig({
  compatibilityDate: '2026-07-20',

  app: {
    head: {
      title: '立麥餐飲設備有限公司',
      htmlAttrs: { lang: 'zh-Hant-TW' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '立麥餐飲設備有限公司——專業廚房顧問與餐飲顧問公司，提供國際酒店廚房設計、HACCP 顧問輔導、酒吧與酒櫃設計、食品加工廠設計規劃，從動線規劃、設備選型到施工維保一站式服務。',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          property: 'og:title',
          content: 'Leadmaster 立麥餐飲設備有限公司｜廚房顧問・餐飲顧問',
        },
        {
          property: 'og:description',
          content:
            '專業廚房顧問與餐飲顧問公司，提供國際酒店廚房設計、HACCP 顧問輔導、酒吧與酒櫃設計、食品加工廠設計規劃。',
        },
        {
          property: 'og:site_name',
          content: '立麥餐飲設備有限公司',
        },
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://leadmaster.tw/og_img.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
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

  // hamburgers.css 是由 hamburgers.scss 套件預編譯（僅含 collapse 型），避免舊語法的 Sass 棄用警告
  css: ['@/assets/css/hamburgers.css', '@/assets/css/global.sass'],

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
