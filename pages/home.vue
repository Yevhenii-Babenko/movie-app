<template>
  <main class="home">
    <!-- <Hero /> -->
    <!-- <Search /> -->
    <MovieGrid />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Search from '~/components/Loading.vue'
import MovieGrid from '~/components/MovieGrid.vue'
import { Result } from '~/types/moviesTypes.interfaces'
import api from '~/services/api'

export default Vue.extend({
  components: {
    Hero,
    MovieGrid,
    Search,
  },
  head() {
    return {
      title: "The Latest' Streaming Movies App",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get all the lastest steaming movies',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movies, streaming',
        },
      ],
    }
  },
  data(): { movies:Array<Result>, searchedMovies: Array<Result>, searchInput: string } {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
    }
  },
  created() {
    // this.getMovies()
  },
  async fetch() {
    // await this.getMovies()
  },
  /* async fetch() {
    this.searchInput === ''
      ? await this.getMovies()
      : await this.getSearchedMovies()
  }, */
  fetchDelay: 1000,
  methods: {
    async getMovies(): Promise<void> {
      try {
        this.movies = await api.getAllMovies()
        .then((response) => response.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    // async getSearchedMovies(): Promise<void> {
    //   try {
    //     const response = await api.findSearchingMovies(this.searchInput)
    //     response.data.results.forEach((movie: Result) => {
    //       this.searchedMovies.push(movie)
    //     })
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    clearSearchInput() {
      // this.searchInput = ''
    //   this.searchedMovies = []
    },
  },
})
</script>
<style lang="scss">
.home {
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .search {
    display: flex;
    padding: 32px 16px;
    input {
      max-width: 350px;
      width: 100%;
      padding: 12px 6px;
      font-size: 14px;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }
      .movie {
        position: relative;
        display: flex;
        flex-direction: column;
        .movie-img {
          position: relative;
          overflow: hidden;
          &:hover {
            .overview {
              transform: translateY(0);
            }
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }
        .info {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #fff;
            font-size: 20px;
          }
          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }
          .button {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>