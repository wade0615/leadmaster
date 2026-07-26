<template>
  <footer id="footer" class="pt-16 pb-8 px-8 text-white">
    <div class="max-w-screen-xl mx-auto">
      <section class="mb-3 flex flex-col md:flex-row md:justify-between md:items-start">
        <img
          src="@/assets/image/leadmaster_logo.png" alt="Logo"
          class="w-28 mx-auto mb-8 md:m-0 pr-px bg-white rounded"
        />
        <div class="">
          <ul>
            <li class="p-1">
              LEADMASTER KITCHEN EQUIPMENT CO., LTD.
            </li>
            <li class="p-1">
              <a href="https://www.facebook.com/LiMaiCanYinSheBeiYouXianGongSi" target="_blank">
                <v-icon dark>mdi-facebook</v-icon>
                <span>Facebook</span>
              </a>
            </li>
            <li class="p-1">
              <a href="tel:0229161022">
                <v-icon dark>mdi-phone</v-icon>
                <span>(02)2916-1022</span>
              </a>
            </li>
            <li class="p-1">
              <a href="mailto:bryanwu088@gmail.com">
                <v-icon dark>mdi-gmail</v-icon>
                <span>bryanwu088@gmail.com</span>
              </a>
            </li>
            <li class="p-1">
              <a href="https://goo.gl/maps/QGZWNmaCro4nnSux8" target="_blank">
                <v-icon dark>mdi-map-marker</v-icon>
                <span>23141新北市新店區二十張路33巷2弄1號1樓</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="text-center">
        <span class="text-sm">
          &copy; 2020-2021, Copyright by LeadMasters
          <a href="https://wade0615.github.io/" target="_blank">
            Wade
          </a>
          . All rights reserved.
        </span>
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
  background-color: $leadmaster-red
</style>
