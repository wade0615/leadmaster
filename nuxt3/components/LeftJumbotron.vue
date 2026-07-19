<template>
  <section class="left-jumbotron">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-start items-stretch">
        <div class="flex-1">
          <img class="w-full h-48 object-cover" :src="content.img" :alt="content.img_alt">
        </div>
        <div class="md:w-1/5 relative">
          <div class="text-container px-8 py-4">
            <h2 class="text-2xl md:text-4xl">
              {{ content.title }}
            </h2>
            <p class="text-xl md:text-2xl">
              {{ content.subtitle }}
            </p>
            <p class="text-base md:text-lg">
              {{ content.description }}
            </p>
            <a
              :href="content.link" target="_blank"
              class="text-sm flex items-center justify-end"
            >
              了解更多
              <AppIcon name="mdi-arrow-right" :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['content'])
</script>

<style lang="sass" scoped>
.left-jumbotron
  position: relative
  img
    @include rwd-md
      height: 600px
  .text-container
    @include rwd-md
      width: 200%
      position: absolute
      right: 10%
      top: 40%
      transform: translate(0, -50%)
      background-color: rgba(229, 231, 235, 0.9)
</style>
