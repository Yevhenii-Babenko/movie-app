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
  mounted() {
    this.$store.dispatch('fetchMovies')
    // this.$storybridge(() => {
    //   const storyblokInstance = new StoryblokBridge()
 
    //   // Listen to Storyblok's Visual Editor event
    //   storyblokInstance.on(['input', 'published', 'change'], (event) => {
    //     if (event.action == 'input') {
    //       if (event.story.id === this.story.id) {
    //         this.story.content = event.story.content
    //       }
    //     } else {
    //       this.$nuxt.$router.go({
    //         path: this.$nuxt.$router.currentRoute,
    //         force: true,
    //       })
    //     }
    //   })
    // }, (error) => {
    //   console.error(error)
    // })
  },
  computed: mapGetters(['movies', 'auth', 'isLoading']),
  /* async asyncData(context) {
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
    const story= await context.app.$storyapi
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
    return story
  }, */
})
</script>