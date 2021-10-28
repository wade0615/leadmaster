<template>
  <footer id="footer" class="pt-16 pb-8 px-8 bg-gray-400">
    <div class="max-w-screen-xl mx-auto">
      <section class="mb-3 flex flex-col md:flex-row md:justify-between md:items-start">
        <img src="@/assets/logo.svg" alt="Logo" class="w-40 mx-auto mb-8 md:m-0" />
        <div class="">
          <ul>
            <li>
              <v-icon>mdi-facebook</v-icon>
              <span>Facebook</span>
            </li>
            <li>
              <v-icon>mdi-phone</v-icon>
              <span>(02)2916-1022</span>
            </li>
            <li>
              <v-icon>mdi-map-marker</v-icon>
              <span>23141新北市新店區二十張路33巷2弄1號1樓</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="text-center">
        <span class="text-lg">&copy; 2020-2021, David</span>
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
