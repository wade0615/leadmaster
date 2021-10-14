<template>
  <div id="london">
    <Nav v-show="hidden" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  props: [],
  watch: {
    $route() {
      if (process.client) {
        this.hideNav();
      };
    },
  },
  data () {
    return {
      hidden: null,
    }
  },
  methods: {
    isLogin() {
      return window.location.pathname != '/login';
    },
    hideNav() {
      this.isLogin() ? this.hidden = true : this.hidden = false;
    },
  },
  computed: {
  },
  mounted(){
    this.hideNav();
  },
  beforeMount(){},
  updated(){
  },
}
</script>

<style lang="sass">
html
  font-family: 'Noto Serif TC','Source Sans Pro','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'
  font-size: 16px
  // word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,*::after
  box-sizing: border-box
  margin: 0
</style>
