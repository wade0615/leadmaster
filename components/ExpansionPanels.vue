<template>
  <section class="expansion-panels">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(expansion, index) in expansions"
        :key="'expansion' + index"
      >
        <v-expansion-panel-header class="justify-between">
          {{ expansion.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul>
            <li
              v-for="(description, index) in expansion.descriptions"
              :key="'description' + index"
            >
              {{ description }}
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
export default {
  name: "ExpansionPanels",
  props: ["expansions"],
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
