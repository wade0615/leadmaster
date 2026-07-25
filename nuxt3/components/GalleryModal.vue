<template>
  <Teleport to="body">
    <div
      ref="rootEl"
      class="gallery-modal fixed inset-0 z-50 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      @keydown="onKeydownTrap"
    >
      <div class="backdrop absolute inset-0" @click="emit('close')"></div>
      <div class="panel relative w-full h-full bg-white flex flex-col overflow-hidden">
        <header class="flex items-center justify-between px-5 md:px-8 py-4 border-b border-gray-200">
          <div>
            <h2 id="gallery-modal-title" class="text-xl md:text-2xl">{{ project.title }}</h2>
            <p class="text-sm md:text-base text-gray-500">{{ project.subtitle }}</p>
          </div>
          <button
            ref="closeBtn" type="button" class="p-2"
            aria-label="關閉照片牆" @click="emit('close')"
          >
            <AppIcon name="mdi-close" :size="28" />
          </button>
        </header>
        <div class="flex-1 overflow-y-auto px-5 md:px-8 py-6">
          <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            <button
              v-for="(src, index) in project.photos"
              :key="src"
              type="button"
              class="block w-full mb-4 break-inside-avoid cursor-zoom-in"
              :aria-label="`放大檢視${project.title}案場照片第 ${index + 1} 張`"
              @click="openLightbox(index)"
            >
              <img
                :src="src"
                :alt="`${project.title} 案場照片 ${index + 1}`"
                loading="lazy"
                class="w-full rounded"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- 燈箱：點擊瀑布牆照片後的放大呈現 -->
      <div
        v-if="activeIndex !== null"
        ref="lightboxEl"
        class="lightbox fixed inset-0 z-10 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        :aria-label="`${project.title} 案場照片放大檢視`"
        @click.self="closeLightbox"
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
          ref="lightboxCloseBtn" type="button" aria-label="關閉放大檢視"
          class="nav-btn absolute top-4 right-4"
          @click="closeLightbox"
        >
          <AppIcon name="mdi-close" :size="32" />
        </button>
        <p class="counter absolute bottom-4 text-sm" aria-live="polite">
          {{ activeIndex + 1 }} / {{ project.photos.length }}
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({ project: { type: Object, required: true } })
const emit = defineEmits(['close'])

const rootEl = ref(null)
const lightboxEl = ref(null)
const closeBtn = ref(null)
const lightboxCloseBtn = ref(null)

const activeIndex = ref(null)
let lightboxTrigger = null

const count = computed(() => props.project.photos.length)
const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + count.value) % count.value
}
const next = () => {
  activeIndex.value = (activeIndex.value + 1) % count.value
}

const openLightbox = (index) => {
  lightboxTrigger = document.activeElement
  activeIndex.value = index
  nextTick(() => lightboxCloseBtn.value?.focus())
}
const closeLightbox = () => {
  activeIndex.value = null
  nextTick(() => (lightboxTrigger ?? closeBtn.value)?.focus())
}

// Tab 焦點限制在彈窗內（燈箱開啟時限制在燈箱內）
const onKeydownTrap = (event) => {
  if (event.key !== 'Tab') return
  const container = activeIndex.value !== null ? lightboxEl.value : rootEl.value
  if (!container) return
  const focusables = [...container.querySelectorAll('button, [href]')].filter(
    (el) => el.offsetParent !== null
  )
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const onKeydown = (event) => {
  if (activeIndex.value !== null) {
    if (event.key === 'Escape') closeLightbox()
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

let previouslyFocused = null
onMounted(() => {
  previouslyFocused = document.activeElement
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
  document.getElementById('__nuxt')?.setAttribute('inert', '')
  nextTick(() => closeBtn.value?.focus())
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
  document.getElementById('__nuxt')?.removeAttribute('inert')
  previouslyFocused?.focus?.()
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
