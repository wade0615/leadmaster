<template>
  <Teleport to="body">
    <div class="gallery-modal fixed inset-0 z-50 p-3 md:p-6">
      <div class="backdrop absolute inset-0" @click="emit('close')"></div>
      <div class="panel relative w-full h-full bg-white flex flex-col overflow-hidden">
        <header class="flex items-center justify-between px-5 md:px-8 py-4 border-b border-gray-200">
          <div>
            <h2 class="text-xl md:text-2xl">{{ project.title }}</h2>
            <p class="text-sm md:text-base text-gray-500">{{ project.subtitle }}</p>
          </div>
          <button type="button" class="p-2" aria-label="關閉照片牆" @click="emit('close')">
            <AppIcon name="mdi-close" :size="28" />
          </button>
        </header>
        <div class="flex-1 overflow-y-auto px-5 md:px-8 py-6">
          <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            <img
              v-for="(src, index) in project.photos"
              :key="src"
              :src="src"
              :alt="`${project.title} 案場照片 ${index + 1}`"
              loading="lazy"
              class="w-full mb-4 rounded break-inside-avoid cursor-zoom-in"
              @click="activeIndex = index"
            />
          </div>
        </div>
      </div>

      <!-- 燈箱：點擊瀑布牆照片後的放大呈現 -->
      <div
        v-if="activeIndex !== null"
        class="lightbox fixed inset-0 z-10 flex items-center justify-center"
        @click.self="activeIndex = null"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <img
          :src="project.photos[activeIndex]"
          :alt="`${project.title} 案場照片 ${activeIndex + 1}`"
          class="lightbox-img"
        />
        <button
          type="button" aria-label="上一張"
          class="nav-btn absolute left-2 md:left-6"
          @click="prev"
        >
          <AppIcon name="mdi-chevron-left" :size="44" />
        </button>
        <button
          type="button" aria-label="下一張"
          class="nav-btn absolute right-2 md:right-6"
          @click="next"
        >
          <AppIcon name="mdi-chevron-right" :size="44" />
        </button>
        <button
          type="button" aria-label="關閉放大檢視"
          class="nav-btn absolute top-4 right-4"
          @click="activeIndex = null"
        >
          <AppIcon name="mdi-close" :size="32" />
        </button>
        <p class="counter absolute bottom-4 text-sm">
          {{ activeIndex + 1 }} / {{ project.photos.length }}
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({ project: { type: Object, required: true } })
const emit = defineEmits(['close'])

const activeIndex = ref(null)
const count = computed(() => props.project.photos.length)
const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + count.value) % count.value
}
const next = () => {
  activeIndex.value = (activeIndex.value + 1) % count.value
}

const onKeydown = (event) => {
  if (activeIndex.value !== null) {
    if (event.key === 'Escape') activeIndex.value = null
    else if (event.key === 'ArrowLeft') prev()
    else if (event.key === 'ArrowRight') next()
  } else if (event.key === 'Escape') {
    emit('close')
  }
}

let touchStartX = 0
const onTouchStart = (event) => {
  touchStartX = event.changedTouches[0].clientX
}
const onTouchEnd = (event) => {
  const deltaX = event.changedTouches[0].clientX - touchStartX
  if (Math.abs(deltaX) < 50) return
  deltaX > 0 ? prev() : next()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style lang="sass" scoped>
.backdrop
  background-color: rgba(0, 0, 0, 0.75)
.lightbox
  background-color: rgba(0, 0, 0, 0.92)
  .lightbox-img
    max-width: calc(100vw - 7rem)
    max-height: calc(100vh - 5rem)
    object-fit: contain
  .nav-btn
    color: rgba(255, 255, 255, 0.85)
    &:hover
      color: #fff
  .counter
    left: 50%
    transform: translateX(-50%)
    color: rgba(255, 255, 255, 0.85)
</style>
