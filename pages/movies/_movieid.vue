<template>
  <div class="container single-movie">
    <NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>
    <Loading v-if="isLoading" />
    <SingleMovie v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import SingleMovie from '~/components/SingleMovie.vue'

export default Vue.extend({
  name: 'single-movie',
  components: {
    SingleMovie,
  },
  async mounted() {
    await this.$store.dispatch('fetchSingleMovieById', this.$route.params.movieid)
  },
  computed: mapGetters(['movie', 'isLoading']),
})
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
}
</style>