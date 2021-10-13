<template>
  <div class="div">
    <!-- <Loading v-if="$fetchState.pending" /> -->
    <!-- Movies -->
    <!-- <div v-else class="container movies"> -->
    <div class="container movies">
      <div id="movie-grid" class="movies-grid" v-if="!searchInput">
        <div class="movie" v-for="(movie, index) in movies" :key="index">
          <div class="movie-img">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="poster"
            />
            <p class="review">{{ movie.vote_average }}</p>
            <p class="overview">{{ movie.overview }}</p>
          </div>
          <div class="info">
            <p class="title">
              {{ movie.title.slice(0, 25) }}
              <span v-if="movie.title.length > 25">...</span>
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
      <!-- Searhed movie display -->
      <div id="movie-grid" class="movies-grid" v-else>
        <div
          class="movie"
          v-for="(movie, index) in searchedMovies"
          :key="index"
        >
          <div class="movie-img">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="poster"
            />
            <p class="review">{{ movie.vote_average }}</p>
            <p class="overview">{{ movie.overview }}</p>
          </div>
          <div class="info">
            <p class="title">
              {{ movie.title.slice(0, 25) }}
              <span v-if="movie.title.length > 25">...</span>
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
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
export default {
  name: 'MovieGrid',
  components: {
    Loading,
  },
}
</script>

<style>
</style>