<template>
  <main id="recruitment" class="text-center">
    <Carousel :images="images"
      class="max-w-screen-xl mx-auto md:pt-8 md:px-16 mb-16" style="height: 60vh"
    />
    <BigThreePhotoFrame class="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24" />
    <ThemeCards class="max-w-screen-xl mx-auto px-8 md:px-20 mb-24" />
    <section class="max-w-screen-xl mx-auto mb-24 text-center">
      <span class="block mx-auto mb-8 max-w-lg">{{ content }}</span>
      <v-btn
        elevation="2"
        class="px-10 max-w-md"
      >
        Click Lorem
      </v-btn>
    </section>
    <Slogan :title="sloganTitle" :slogans="slogans" />
  </main>
</template>

<script>
export default {
  name: "Recruitment",
  props: [],
  watch: {},
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=David1",
        "https://fakeimg.pl/1200x900/?text=David2",
        "https://fakeimg.pl/1200x900/?text=David3",
      ],
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum quae iusto reiciendis, nam commodi quisquam eveniet omnis consectetur saepe?",
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
#recruitment
  position: relative
  min-height: 100vh
</style>
