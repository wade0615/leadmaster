<template>
  <footer id="footer" class="pt-16 pb-8 px-8 bg-gray-400">
    <div class="max-w-screen-xl mx-auto">
      <section class="mb-3 flex flex-col md:flex-row md:justify-between">
        <img src="@/assets/logo.svg" alt="Logo" class="w-40 mx-auto mb-8 md:m-0" />
        <div class="flex flex-col md:items-center md:flex-row md:justify-end">
          <div class="px-10 md:px-4 py-1 md:py-0 text-xl md:text-base">About</div>
          <div class="px-10 md:px-4 py-1 md:py-0 text-xl md:text-base">Services</div>
          <div class="px-10 md:px-4 py-1 md:py-0 text-xl md:text-base">Stories</div>
          <div class="px-10 md:px-4 py-1 md:py-0 text-xl md:text-base">Members</div>
          <div class="px-10 md:px-4 py-1 md:py-0 text-xl md:text-base">Contact us</div>
        </div>
      </section>
      <section class="mb-12 px-10 md:px-4 md:text-right">
        <v-icon large>mdi-facebook</v-icon>
        <v-icon large>mdi-instagram</v-icon>
        <v-icon large>mdi-youtube</v-icon>
      </section>
      <section class="text-center">
        <span>&copy; 2020-2021, David</span>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: [],
  watch: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#footer
  position: relative
</style>
