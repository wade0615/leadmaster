<template>
  <header id="nav" class="text-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-1 px-6 flex justify-between items-center" style="height: 80px">
        <NuxtLink to="/" class="inline-block px-4 py-1.5">
          <img src="@/assets/image/leadmaster_logo2.png" alt="Logo"
            class="p-px bg-white"
          />
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
      class="navigation-drawer px-14 py-16"
    >
      <NuxtLink to="/" class="block mx-auto w-24 mb-8">
        <img src="@/assets/image/leadmaster_logo.png" alt="Logo"
          class="inline-block bg-white rounded"
        />
      </NuxtLink>
      <nav class="mx-auto text-white text-2xl">
        <NuxtLink to="/" class="block mb-2 p-2">Home</NuxtLink>
        <NuxtLink to="/about" class="block mb-2 p-2">About</NuxtLink>
        <NuxtLink to="/projects" class="block mb-2 p-2">Projects</NuxtLink>
        <NuxtLink to="/agent" class="block mb-2 p-2">Agent</NuxtLink>
        <NuxtLink to="/recruitment" class="block mb-2 p-2">Recruitment</NuxtLink>
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
  background-color: $leadmaster-red
  .v-navigation-drawer
    @include rwd-lg
      display: none
  img
    width: 100px
    border: 1px solid white
    border-radius: 3px
    box-shadow: 0 0 0 3px #da1b0a inset
  .navigation-drawer
    background-color: $leadmaster-red
</style>
