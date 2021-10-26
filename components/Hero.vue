<template>
  <section class="hero">
    <img class="img" src="../assets/imgs/movieHero.jpg" alt="bunner" />
    <div class="text-container">
      <div class="text">
        <span class="text__heading">Now Streaming</span>
        <h1 class="text__title">
          <span class="text__title--mod">Now</span> Streaming
        </h1>
        <a href="#movie-grid" class="button button--mod">View Movies</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/layout/hero';
</style>