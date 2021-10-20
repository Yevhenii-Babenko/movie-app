<template>
  <section class="hero">
    <img class="img" src="../assets/imgs/movieHero.jpg" alt="bunner" />
    <div class="text-container">
      <div class="text">
        <span class="text__heading">Now Streaming</span>
        <h1 class="text__title">
          <span class="text__title--mod">Now</span> Streaming
        </h1>
        <a href="#movie-grid" class="button">View Movies</a>
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
.hero {
  height: 25rem;
  position: relative;
  @media (min-width: 46.875rem) {
    height: 31.25rem;
  }
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
      padding: 0 16px;
      width: 100%;
      max-width: 87.5rem;
      margin: 0 auto;
      &__heading {
        font-weight: 600;
        font-size: 1.125rem;
        text-transform: uppercase;
        color: #c92502;
        margin-bottom: 8px;
        @media (min-width: 46.875rem) {
          font-size: 1.375rem;
        }
      }
      &__title {
        color: #fff;
        font-size: 4rem;
        font-weight: 200;
        margin-bottom: 8px;
        @media (min-width: 46.875rem) {
          font-size: 84px;
        }
        &--mod {
          font-size: 5.25rem;
          font-weight: 500;
        }
      }
    }

    h1 {
      .button {
        font-size: 1.25rem;
        align-self: flex-start;
      }
    }
  }
}
</style>