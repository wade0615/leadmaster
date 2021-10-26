<template>
  <header id="nav" class="bg-gray-400">
    <div class="max-w-screen-xl mx-auto">
      <section
        class="px-6 flex justify-between items-center"
      >
        <NuxtLink to="/" class="inline-block">
          <img src="@/assets/logo.svg" alt="Logo" />
        </NuxtLink>
        <div>
          <button @click.stop="clickBurger()"
            class="hamburger hamburger--collapse" type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </section>
      <section class="pb-1">
        <nav class="mx-auto px-10">
          <NuxtLink to="/" class="inline-block p-2 md:px-8">Home</NuxtLink>
          <NuxtLink to="/about" class="inline-block p-2 md:px-8">About</NuxtLink>
          <NuxtLink to="/services" class="inline-block p-2 md:px-8">Services</NuxtLink>
          <NuxtLink to="/projects" class="inline-block p-2 md:px-8">Projects</NuxtLink>
          <NuxtLink to="/recruitment" class="inline-block p-2 md:px-8">Recruitment</NuxtLink>
        </nav>
      </section>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <nav class="mx-auto px-10">
        <NuxtLink to="/" class="inline-block p-2 md:px-8">Home</NuxtLink>
        <NuxtLink to="/about" class="inline-block p-2 md:px-8">About</NuxtLink>
        <NuxtLink to="/services" class="inline-block p-2 md:px-8">Services</NuxtLink>
        <NuxtLink to="/projects" class="inline-block p-2 md:px-8">Projects</NuxtLink>
        <NuxtLink to="/recruitment" class="inline-block p-2 md:px-8">Recruitment</NuxtLink>
      </nav>
    </v-navigation-drawer>
    <v-overlay :value="drawer"></v-overlay>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      drawer: null,
      login: true,
    };
  },
  methods: {
    loggedIn() {
      if(!this.login) {
        this.$router.push({ name: 'login' });
      };
    },
    clickBurger() {
      this.drawer = !this.drawer;
      document.querySelector('.hamburger').classList.add("is-active");
    }
  }
};
</script>

<style lang="sass" scoped>
#nav
  position: sticky
  top: 0
  left: 0
  z-index: 10
  box-shadow: 0px 0px 16px 2px rgb(79 64 53 / 20%)
  section:nth-child(1)
    position: relative
    // &::after
    //   content: ""
    //   position: absolute
    //   top: 100%
    //   left: 0
    //   width: 100%
    //   height: 1px
    //   background: #EEE7E1
    .member-dropdown
      position: relative
      &:hover
        .dropdown-menu
          display: block
      a
        text-decoration: none
        white-space: nowrap
        text-overflow: ellipsis
        color: white
    .dropdown-menu
      list-style-type: none
      margin: 0 auto
      padding: 0
      position: absolute
      width: max-content
      top: 100%
      right: 0
      display: none
      z-index: 10
    .dropdown-item
      padding: 0
      background: #F67280
      opacity: 0
      transform-origin: bottom
      animation: enter 0.2s ease forwards
      @for $n from 1 through 3
        &:nth-child(#{$n})
          animation-duration: 0.2s + 0.1s * ($n - 1)
          animation-delay: 0.1s * ($n - 1)
      &:hover
        background: #F8B195
      a
        display: block
        padding: 0.75rem 1.25rem
  section:nth-child(2)
    overflow-x: auto
    nav
      width: max-content
      a
        font-weight: bold
        color: #2c3e50
        &.router-link-exact-active
          color: #fcd846
  @keyframes enter
    from
      opacity: 0
      transform: scaleY(0.98) translateY(10px)
    to
      opacity: 1
      transform: none
</style>
