<template>
  <main id="home">
    <Carousel :images="images" class="mb-3" style="height: calc(100vh - 80px)" />
    <Featuretag />
    <Features />
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://fakeimg.pl/1200x900/?text=David1",
        "https://fakeimg.pl/1200x900/?text=David2",
        "https://fakeimg.pl/1200x900/?text=David3",
      ],
    };
  },
}
</script>
