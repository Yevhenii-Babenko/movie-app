<template>
  <div class="search container">
    <input @keyup.enter="inputFetchHandler" type="text" placeholder="Search" />
    <button
      @click="clearSearchInput"
      v-show="inputSearchMovie !== ''"
      class="button"
    >
      Clear Search
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Search',
  computed: mapGetters(['inputSearchMovie', 'searchMovies']),
  methods: {
    ...mapActions(['fetctSearchedMovies']),
    ...mapMutations(['CLEARINPUT']),
    clearSearchInput() {
      this.CLEARINPUT('')
    },
    inputFetchHandler(event: any) {
      this.fetctSearchedMovies(event.target.value)
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