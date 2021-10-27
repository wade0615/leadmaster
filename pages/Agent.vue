<template>
  <main id="agent" class="text-center">
    <BigThreePhotoFrame class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24" />
    <Slogan :title="sloganTitle" :slogans="slogans" />
  </main>
</template>

<script>
export default {
  name: "Agent",
  props: [],
  watch: {},
  data() {
    return {
      sloganTitle: "Slogan Slogan Slogan",
      slogans: [
        {
          icon: "mdi-wrench",
          text: "text text text text text text text text text text text text text text text ",
        },
        {
          icon: "mdi-eye",
          text: "text text text",
        },
        {
          icon: "mdi-lead-pencil",
          text: "text text text",
        }
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="sass" scoped>
#agent
  position: relative
</style>
