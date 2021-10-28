<template>
  <header id="nav" class="bg-gray-400">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-4 px-6 flex justify-between items-center" style="height: 80px">
        <NuxtLink to="/" class="inline-block px-4 py-1.5">
          <img src="@/assets/logo.svg" alt="Logo" />
        </NuxtLink>
        <nav class="hidden lg:block">
          <NuxtLink to="/about" class="inline-block p-2 md:px-8">About</NuxtLink>
          <NuxtLink to="/projects" class="inline-block p-2 md:px-8">Projects</NuxtLink>
          <NuxtLink to="/agent" class="inline-block p-2 md:px-8">Agent</NuxtLink>
          <NuxtLink to="/recruitment" class="inline-block p-2 md:px-8">Recruitment</NuxtLink>
        </nav>
        <div class="lg:hidden">
          <button @click.stop="clickBurger()"
            class="hamburger hamburger--collapse"
            type="button"
            v-bind:class="{ 'is-active': drawer}"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <nav class="mx-auto px-10">
        <NuxtLink to="/" class="block p-2 md:px-8">Home</NuxtLink>
        <NuxtLink to="/about" class="block p-2 md:px-8">About</NuxtLink>
        <NuxtLink to="/projects" class="block p-2 md:px-8">Projects</NuxtLink>
        <NuxtLink to="/agent" class="block p-2 md:px-8">Agent</NuxtLink>
        <NuxtLink to="/recruitment" class="block p-2 md:px-8">Recruitment</NuxtLink>
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
    };
  },
  methods: {
    clickBurger() {
      this.drawer = !this.drawer;
      document.querySelector('.hamburger').classList.add("is-active");
    },
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
  .v-navigation-drawer
    @include rwd-lg
      display: none
</style>
