<template>
  <section class="section">
    <Hero />
    <Search />
    <Loading v-if="isLoading" />
    <MovieGridTeamplate v-else />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  async mounted() {
    this.$store.dispatch('fetchMovies')
  },
  computed: mapGetters(['movies', 'auth', 'isLoading']),
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