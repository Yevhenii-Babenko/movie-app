<template>
  <section class="section">
    <Hero />
    <Search />
    <Loading v-if="isLoading" />
    <MovieGridTeamplate v-else />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async mounted() {
    this.$store.dispatch('fetchMovies')
  },
  computed: mapGetters(['movies', 'auth', 'isLoading']),
  async asyncData(context) {
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
    const storyblock = await context.app.$storyapi
      .get(`cdn/stories/home`, {
        version: 'draft',
      })
      .then((res: any) => {
        return res.data
      })
      .catch((res: any) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
    return storyblock
  },
})
</script>