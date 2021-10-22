<template>
  <form @submit.prevent="fetchMovies">
    <div class="search container">
      <input
        @keyup.enter="fetchMovies"
        type="text"
        placeholder="Search"
        v-model="searchInput"
        required
      />
      <button
        @click.prevent="cleanSerch"
        v-if="searchMovies.length"
        class="button button--srch button--width"
      >
        Clear Search
      </button>
      <button v-else class="button button--srch button--width" type="submit">
        Search
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters, mapActions, mapMutations } from 'vuex'

@Component({
  computed: {
    ...mapGetters(['inputSearchMovie', 'searchMovies', 'inputSearchMovie']),
    ...mapMutations(['CLEARINPUT', 'UPDATASEARCHEDMOVIES']),
  },
  methods: mapActions(['fetctSearchedMovies']),
})
export default class Search extends Vue {
  fetctSearchedMovies: any
  name: string = 'Search'
  async mounted() {
    this.fetctSearchedMovies()
  }
  get searchInput() {
    return this.$store.state.searchInput
  }

  fetchMovies() {
    if (this.searchInput) {
      this.$store.dispatch('fetctSearchedMovies', this.searchInput)
    }
  }
  cleanSerch() {
    this.$store.commit('CLEARINPUT', '')
    this.$store.commit('UPDATASEARCHEDMOVIES', [])
  }
  /* name: 'Search',
  computed: {
    ...mapGetters(['inputSearchMovie', 'searchMovies', 'inputSearchMovie']),
    searchInput: {
      get() {
        return this.$store.state.searchInput
      },
      set(value) {
        this.$store.commit('UODATEINPUTFIELD', value)
      },
    },
  },
  methods: {
    ...mapActions(['fetctSearchedMovies']),
    ...mapMutations(['CLEARINPUT', 'UPDATASEARCHEDMOVIES']),
    clearSearchInput() {},
    fetchMovies() {
      if (this.searchInput) {
        this.$store.dispatch('fetctSearchedMovies', this.searchInput)
      }
    },
    cleanSerch() {
      this.$store.commit('CLEARINPUT', '')
      this.$store.commit('UPDATASEARCHEDMOVIES', [])
    },
  }, */
}
</script>

<style lang="scss">
@import '~/assets/scss/layout/search';
</style>