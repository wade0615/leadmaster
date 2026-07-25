<template>
  <section class="right-jumbotron">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-start items-stretch">
        <div class="flex-1">
          <img class="w-full h-48 object-cover" :src="content.img" :alt="content.img_alt">
        </div>
        <div class="md:w-1/5 relative md:order-first">
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
            <div class="text-sm flex items-center justify-end gap-6">
              <button
                v-if="content.photos && content.photos.length"
                type="button" class="action-link flex items-center"
                @click="emit('open-gallery', content)"
              >
                案場照片
                <AppIcon name="mdi-arrow-right" :size="16" />
              </button>
              <a :href="content.link" target="_blank" class="action-link flex items-center">
                查看官網
                <AppIcon name="mdi-arrow-right" :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['content'])
const emit = defineEmits(['open-gallery'])
</script>

<style lang="sass" scoped>
.right-jumbotron
  position: relative
  img
    @include rwd-md
      height: 600px
  .text-container
    @include rwd-md
      width: 200%
      position: absolute
      left: 10%
      top: 40%
      transform: translate(0, -50%)
      background-color: rgba(229, 231, 235, 0.9)
  .action-link
    color: $leadmaster-gold
    &:hover
      text-decoration: underline
</style>
