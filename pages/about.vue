<template>
  <h1>Hello from About</h1>
</template>

<script>
export default {
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      storyblokInstance.on('input', (event) => {
        if (Object.is(event.story.id, this.story.id)) {
          this.story.content = event.story.content
        }
      })
      storyblokInstance.on(['published', 'change'], (event) => {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      })
    })
  },
  async asyncData(context) {
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
    const story = await context.app.$storyapi
      .get(`cdn/stories/home`, {
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
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
  },
}
</script>

<style>
</style>