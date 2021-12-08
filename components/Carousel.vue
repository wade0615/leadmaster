<template>
  <section class="carousel">
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image"
      >
      </v-carousel-item>
    </v-carousel>
    <div class="cover-text text-center">
      <div class="
        h-full
        max-w-screen-xl mx-auto
        p-10 sm:p-20 pt-24 sm:pt-36
        flex items-center justify-center
      ">
        <div class="tracking-wider font-bold">
          <h2 class="
            break-words sm:break-normal
            text-4xl sm:text-5xl
            mb-8
          ">
            {{ text.title }}
            <br>
            {{ text.title2 }}
          </h2>
          <p class="text-lg">
            {{ text.subtitle }}
          </p>
        </div>
      </div>
      <a href="#scroll-down"><span></span></a>
    </div>
    <div id="scroll-down"></div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  props: ["images", "text"],
  data() {
    return {};
  },
  methods: {
    scrollToButton() {
      document.querySelector(".cover-text a").addEventListener("click", (e)=>{
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector("#scroll-down").offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      });
    }
  },
  mounted() {
    this.scrollToButton();
  },
};
</script>

<style lang="sass" scoped>
.carousel::v-deep
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
    background: linear-gradient(0deg, rgba(255, 219, 219, 1) 20%, rgba(255, 255, 255, .5))
  &::after
    top: 100%
    height: 15%
    background: linear-gradient(180deg, rgba(255, 219, 219, 1) 10%, rgba(255, 255, 255, .5))
  .v-window__prev
    display: none
    left: 0
    // @include rwd-sm
    //   display: block
  .v-window__next
    display: none
    right: 0
    // @include rwd-sm
    //   display: block
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
      animation-delay: 2s
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
      animation-delay: 3s
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
    transform: translate(0, -60px)
    opacity: 0
  50%
    opacity: 1
  100%
    transform: translate(0, -40px)
    opacity: 0
</style>
