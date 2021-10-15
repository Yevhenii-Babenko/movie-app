<template>
  <div class="search container">
    <input @keyup.enter="inputHandler" type="text" placeholder="Search" />
    <button
      @click="clearSearchInput"
      v-show="inputSearchMovie !== ''"
      class="button"
    >
      Clear Search
    </button>
    <div>{{ searchMovies }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'Search',
  computed: mapGetters(['inputSearchMovie', 'searchMovies']),
  methods: {
    ...mapActions(['fetctSearchedMovies']),
    clearSearchInput() {
      // this.searchInput = ''
      //   this.searchedMovies = []
    },
    inputHandler(event: any) {
      console.log(event.target.value)
      return (event.target.value)
    },
  },
})
</script>

<style lang="scss">
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
</style>