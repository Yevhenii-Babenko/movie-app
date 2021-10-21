<template>
  <div class="movie-info">
    <button @click="increment">Increment</button>
    <p>Counter : {{ counter }}</p>
    <button @click="decrement">Decrement</button>
    <!-- <div class="movie-img">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        alt="poster"
      />
    </div>
    <div class="movie-content">
      <h1>Title: {{ movie.title }}</h1>
      <p class="movie-fact tagline">
        <span>Tagline:</span> {{ movie.tagline }}
      </p>
      <p class="movie-fact">
        <span>Released:</span>
        {{ released }}
      </p>
      <p class="movie-fact"><span>Duration:</span> {{ movie.runtime }}</p>
      <p class="movie-fact">
        <span>Revenue:</span>
        {{ revenue }}
      </p>
      <p class="movie-fact"><span>Overview:</span> {{ movie.overview }}</p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SingleMovie extends Vue {
  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
/* import Vue from 'vue'
import { mapGetters } from 'vuex' */

/* export default Vue.extend({
  name: 'single-movie-by-id',
  computed: {
    ...mapGetters(['movie', 'isLoading']),
    revenue() {
      return this.movie?.revenue
        ? this.movie.revenue.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          })
        : 0
    },
    released() {
      return new Date(this.movie.release_date).toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },
  },
}) */
</script>

<style lang="scss">
@import '~/assets/scss/layout/single-movie';
</style>