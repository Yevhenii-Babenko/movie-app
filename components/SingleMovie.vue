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
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
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
})
</script>

<style lang="scss">
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: #fff;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
  .movie-img {
    img {
      max-height: 500px;
      width: 100%;
      @media (min-width: 800px) {
        max-height: 700px;
        width: initial;
      }
    }
  }
  .movie-content {
    h1 {
      font-size: 56px;
      font-weight: 400;
    }
    .movie-fact {
      margin-top: 12px;
      font-size: 20px;
      line-height: 1.5;
      span {
        font-weight: 600;
        text-decoration: underline;
      }
    }
    .tagline {
      font-style: italic;
      span {
        font-style: normal;
      }
    }
  }
}
</style>