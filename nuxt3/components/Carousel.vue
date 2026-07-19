<template>
  <section class="carousel">
    <!-- 取代 v-carousel：自動輪播淡入淡出 -->
    <div class="slides">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="slide"
        :class="{ active: i === current }"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
    <div class="cover-text text-center">
      <div
        class="h-full max-w-screen-xl mx-auto p-10 sm:p-20 pt-24 sm:pt-36 flex items-center justify-center"
      >
        <div class="tracking-wider font-bold">
          <h2 class="break-words sm:break-normal text-4xl sm:text-5xl mb-8">
            {{ text.title }}
            <br />
            {{ text.title2 }}
          </h2>
          <p class="text-lg">
            {{ text.subtitle }}
          </p>
        </div>
      </div>
      <a href="#scroll-down" @click.prevent="scrollDown"><span></span></a>
    </div>
    <div id="scroll-down"></div>
  </section>
</template>

<script setup>
const props = defineProps(['images', 'text'])

const current = ref(0)
let timer = null

function scrollDown() {
  window.scrollTo({
    top: document.querySelector('#scroll-down').offsetTop,
    left: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.images.length
  }, 6000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="sass" scoped>
.carousel
  position: relative
  &::before, &::after
    content: ''
    position: absolute
    left: 0
    width: 100%
    z-index: 1
  &::before
    top: 0
    height: 100%
    background: linear-gradient(10deg, rgba(255, 219, 219, 1) 20%, rgba(255, 255, 255, .5))
  &::after
    top: 100%
    height: 15%
    max-height: 6rem
    background: linear-gradient(180deg, rgba(255, 219, 219, 1) 10%, rgba(255, 255, 255, .5))
  .slides
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    .slide
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-size: cover
      background-position: center center
      opacity: 0
      transition: opacity 0.9s ease-in-out
      &.active
        opacity: 1
  .cover-text
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
    transition: all 1s
    h2, p
      opacity: 0
      animation-name: show-text
      animation-duration: 0.7s
      animation-fill-mode: forwards
    h2
      animation-delay: 1s
      position: relative
      &::after
        content: ''
        position: absolute
        top: 110%
        left: 50%
        width: 20%
        height: 3px
        transform: translateX(-50%)
        z-index: 1
        background-color: $leadmaster-red
    p
      animation-delay: 2s
    > a
      position: relative
      display: inline-block
      font-size: 0
      transform: translateY(-60px)
      animation: scrollDown-upAndDown 1.5s infinite
      span
        display: inline-block
        width: 24px
        height: 24px
        border-left: 3px solid #fff
        border-bottom: 3px solid #fff
        transform: rotate(-45deg)
        -webkit-transform: rotate(-45deg)

@keyframes show-text
  0%
    transform: translateX(100px)
    opacity: 0
  100%
    transform: translateX(0px)
    opacity: 1
@keyframes scrollDown-upAndDown
  0%
    transform: translate(0, -120px)
    opacity: 0
  50%
    opacity: 1
  100%
    transform: translate(0, -100px)
    opacity: 0
</style>
