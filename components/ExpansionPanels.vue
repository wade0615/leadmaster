<template>
  <section class="expansion-panels text-center">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header class="justify-between">
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
export default {
  name: "ExpansionPanels",
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
.expansion-panels
  position: relative
</style>
