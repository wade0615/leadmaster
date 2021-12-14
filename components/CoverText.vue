<template>
  <section
    :style="{backgroundImage: 'url(' + coverImg + ')'}"
    class="cover-text"
  >
  <div class="text flex items-center justify-center">
    <article class="p-8 sm:p-20 md:pt-28 max-w-screen-xl mx-auto">
      <p
        ref="textContent"
        v-html="text"
        class="
          md:w-1/2 text-sm md:text-xl tracking-wider
          p-4 rounded
          bg-gray-50 bg-opacity-80
          opacity-0
        "
        :class="{'ml-auto': right}"
      ></p>
    </article>
  </div>
  </section>
</template>

<script>
export default {
  name: "CoverText",
  props: ["right", "coverImg", "text"],
  watch: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    showText() {
      window.addEventListener("scroll", ()=>{
        const windowScroll = window.innerHeight;
        const textDOM = this.$refs.textContent;
        const textOffestTop = this.$refs.textContent.getBoundingClientRect().top;
        if (windowScroll * 0.8 >= textOffestTop) {
          textDOM.classList.add("active-animate");
        };
      });
    }
  },
  mounted() {
    this.showText();
  },
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
.cover-text
  position: relative
  background-repeat: no-repeat
  background-size: cover
  background-position: center center
  min-height: 80vh
  &::after
    content: ''
    position: absolute
    top: -1px
    left: 0
    width: 100%
    height: calc( 100% + 2px )
    z-index: 1
    background: linear-gradient(0deg, rgba(255, 255, 255), rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255))
  .text
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
  .active-animate
    animation-name: show-text
    animation-duration: 0.7s
    animation-fill-mode: forwards
@keyframes show-text
  0%
    transform: translateY(100px)
    opacity: 0
  100%
    transform: translateY(0px)
    opacity: 1
</style>
