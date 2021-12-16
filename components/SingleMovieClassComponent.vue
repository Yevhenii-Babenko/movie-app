<template>
  <div class="movie-info">
    <div class="movie-img">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Movie } from '~/types/moviesTypes.interfaces';

@Component({
  computed: mapGetters(['movie']),
})
export default class SingleMovieClassComponent extends Vue {
  movie!: Movie;

  get revenue() {
    return this.movie?.revenue
      ? this.movie.revenue.toLocaleString('en-us', {
          style: 'currency',
          currency: 'USD',
        })
      : 0;
  }
  get released() {
    return new Date(this.movie.release_date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/layout/single-movie';
</style>
