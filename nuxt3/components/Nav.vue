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
          <button @click.stop="drawer = !drawer"
            class="hamburger hamburger--collapse"
            type="button"
            :class="{ 'is-active': drawer }"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <!-- 取代 v-navigation-drawer + v-overlay -->
    <aside class="navigation-drawer px-14 py-16" :class="{ open: drawer }">
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
    </aside>
    <div v-if="drawer" class="drawer-overlay" @click="drawer = false"></div>
  </header>
</template>

<script setup>
const drawer = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  drawer.value = false
})
</script>

<style lang="sass" scoped>
#nav
  position: sticky
  top: 0
  left: 0
  z-index: 10
  box-shadow: 0px 0px 16px 2px rgb(79 64 53 / 20%)
  background-color: $leadmaster-red
  img
    width: 100px
    border: 1px solid white
    border-radius: 3px
    box-shadow: 0 0 0 3px #da1b0a inset
  .navigation-drawer
    position: fixed
    top: 0
    left: 0
    height: 100%
    width: 256px
    z-index: 30
    overflow-y: auto
    background-color: $leadmaster-red
    box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%)
    transform: translateX(-110%)
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &.open
      transform: translateX(0)
    @include rwd-lg
      display: none
  .drawer-overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 20
    background-color: rgba(33, 33, 33, 0.46)
    @include rwd-lg
      display: none
</style>
