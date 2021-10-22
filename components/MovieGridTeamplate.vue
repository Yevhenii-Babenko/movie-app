<template>
  <section class="container movies">
    <div id="movie-grid" class="movies-grid">
      <div class="movie" v-for="(movie, index) in moviesGrid" :key="index">
        <div class="movie-img">
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="poster"
          />
          <img
            v-else
            src="../assets/imgs/default.jpg"
            alt="default poster"
            class="default"
          />
          <p class="review">{{ movie.vote_average }}</p>
          <p v-if="movie.overview" class="overview">
            {{ movie.overview.slice(0, 200) }}
            <span v-if="movie.overview.length > 200">...</span>
          </p>
          <p v-else class="overview">There is not overview do display</p>
        </div>
        <div class="info">
          <p class="title">
            {{ movie.title.slice(0, 20) }}
            <span v-if="movie.title.length > 20">...</span>
          </p>
          <p class="release">
            Released:
            {{
              new Date(movie.release_date).toLocaleString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            }}
          </p>
          <NuxtLink
            class="button button-light"
            :to="{ name: 'movies-movieid', params: { movieid: movie.id } }"
            >Get More Info</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { Result } from '~/types/moviesTypes.interfaces'

@Component({
  computed: mapGetters(['movies', 'searchMovies']),
})
export default class MovieGridTeamplate extends Vue {
  searchMovies!: Result
  movies!: Result
  get moviesGrid() {
    return this.searchMovies.length ? this.searchMovies : this.movies
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/layout/movies-teamplate';
</style>