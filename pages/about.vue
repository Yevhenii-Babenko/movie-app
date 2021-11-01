<template>
  <section class="container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>

<script>
export default {
  /* mounted() {
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
          force: true,
        })
      })
    })
  }, */
  /* async asyncData(context) {
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
  }, */
  data() {
    return {
      story: { content: {} },
    }
  },
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
          force: true,
        })
      })
    })
    // Load the JSON from the API
    /* this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    }) */
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/home', {
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
  },
}
</script>

<style>
  .d-flex {
    display: flex;
  }
</style>