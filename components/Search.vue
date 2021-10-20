<template>
  <div class="search container">
    <input
      @keyup.enter="inputFetchHandler"
      type="text"
      placeholder="Search"
      v-model="inputSearchMovie"
    />
    <button v-if="!inputSearchMovie" style="width: 122px" class="button" @click="inputFetchHandler">Search</button>
    <button
      @click="clearSearchInput"
      v-else
      class="button"
    >
    <!--  v-show="inputSearchMovie !== ''" -->
      Clear Search
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Search',
  computed: mapGetters([
    'inputSearchMovie',
    'searchMovies',
    'inputSearchMovie',
  ]),
  methods: {
    ...mapActions(['fetctSearchedMovies']),
    ...mapMutations(['CLEARINPUT', 'UPDATASEARCHEDMOVIES']),
    clearSearchInput() {
      this.CLEARINPUT('')
      this.UPDATASEARCHEDMOVIES([])
    },
    inputFetchHandler(event: { target: { value: string } }) {
      this.fetctSearchedMovies(event.target.value)
    },
    onClickHendler() {
      // this.fetctSearchedMovies(this.inputSearchMovie)
      console.log(this.inputSearchMovie.get())
    }
  },
})
</script>

<style lang="scss">
@import '~/assets/scss/layout/search';
</style>