<template>
  <div class="search container">
    <input
      @keyup.enter="searchMovies"
      type="text"
      placeholder="Search"
      v-model.trim="searchInput"
    />
    <button
      v-if="!searchMovies.length"
      style="width: 122px"
      class="button"
      @click.prevent="searchMovies"
    >
      Search
    </button>
    <button @click.prevent="cleanSerch" v-else class="button">
      Clear Search
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
    searchMovies() {
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