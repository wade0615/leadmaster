<template>
  <section class="expansion-panels">
    <!-- 取代 v-expansion-panels：原生 details/summary -->
    <details
      v-for="(expansion, index) in expansions"
      :key="'expansion' + index"
      class="panel"
    >
      <summary class="flex items-center justify-between">
        {{ expansion.title }}
        <AppIcon name="mdi-chevron-right" class="chevron" />
      </summary>
      <div class="panel-content">
        <ul>
          <li
            v-for="(description, dIndex) in expansion.descriptions"
            :key="'description' + dIndex"
          >
            {{ description }}
          </li>
        </ul>
      </div>
    </details>
  </section>
</template>

<script setup>
defineProps(['expansions'])
</script>

<style lang="sass" scoped>
.expansion-panels
  position: relative
  .panel
    background-color: #fff
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)
    border-radius: 4px
    margin-bottom: 2px
    summary
      cursor: pointer
      list-style: none
      padding: 16px 24px
      &::-webkit-details-marker
        display: none
      .chevron
        transition: transform 0.2s
    &[open]
      summary .chevron
        transform: rotate(90deg)
    .panel-content
      padding: 0 24px 16px
</style>
