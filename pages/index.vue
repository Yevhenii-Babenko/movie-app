<template>
  <section class="section">
    <Hero />
    <Search />
    <Loading v-if="isLoading" />
    <MovieGridTeamplate v-else />
    <Footer />
  </section>
</template>

<script lang="ts">
import Hero from '~/components/Hero.vue'
import Search from '~/components/Search.vue'
import MovieGridTeamplate from '~/components/MovieGridTeamplate.vue'
import Footer from '~/components/Footer.vue'
import Loading from '~/components/Loading.vue'
import Vue from 'vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  // layout: 'authorisation',
  async mounted() {
    this.$store.dispatch('fetchMovies')
  },
  computed: mapGetters(['movies', 'auth', 'isLoading']),
  components: {
    Hero,
    MovieGridTeamplate,
    Search,
    Footer,
    Loading,
  },
})
</script>

<style lang="scss" scoped>
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
}
</style>