<template>
  <div class="container single-movie">
    <NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>
    <Loading v-if="isLoading" />
    <SingleMovieClassComponent v-else />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  computed: mapGetters(['isLoading']),
})
export default class MovieidClassComponent extends Vue {
  async mounted() {
    await this.$store.dispatch(
      'fetchSingleMovieById',
      this.$route.params.movieid
    );
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/movieid';
</style>
