export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '立麥餐飲設備有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: 'Leadmaster 立麥餐飲設備有限公司' },
      { hid: 'og:description', property: 'og:description', content: '立麥餐飲設備有限公司從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工，專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作' },
      { hid: 'og:site_name', property: 'og:site_name', content: '餐飲設備規劃公司' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh_TW' },
      { hid: 'og:image', property: 'og:image', content: '/og_img.png' },
      { name: 'google-site-verification', content: 'x1KDy2SSiRcOMjKFhI-ng2n7X_HosHVl8Wygn_ptFHg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/hamburgers/hamburgers',
  ],

  // Global SCSS
  styleResources: {
    sass: [
      './assets/css/index.sass',
      ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // googleFonts
  googleFonts: {
    families: {
      'Vollkorn': [400, 700],
    }
  },

  target: 'static'
}
