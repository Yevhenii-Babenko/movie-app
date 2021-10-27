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