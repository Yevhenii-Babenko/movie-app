<template>
  <section class="section">
    <Hero />
    <Search />
    <Loading v-if="isLoading" />
    <MovieGridTeamplate v-else />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['isLoading']),
})
export default class Index extends Vue {
  async mounted() {
    this.$store.dispatch('fetchMovies');
  }
}
</script>
