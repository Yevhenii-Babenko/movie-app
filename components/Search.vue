<template>
  <div class="search container">
    <input
      @keyup.enter="fetchMovies"
      type="text"
      placeholder="Search"
      v-model="searchInput"
    />
    <button @click.prevent="cleanSerch" v-if="searchMovies.length" class="button">
      Clear Search
    </button>
    <button
      v-else
      style="width: 122px"
      class="button"
      @click.prevent="fetchMovies"
    >
      Search
    </button>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Search',
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
      this.$store.dispatch('fetctSearchedMovies', this.searchInput)
    },
    cleanSerch() {
      this.$store.commit('CLEARINPUT', '')
      this.$store.commit('UPDATASEARCHEDMOVIES', [])
    },
  },
})
</script>

<style lang="scss">
@import '~/assets/scss/layout/search';
</style>