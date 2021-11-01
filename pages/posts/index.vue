<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
      <img :src="post.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/',
      })
      .then((response) => {
        return {
          posts: response.data.stories.map((post) => {
            return {
              id: post.id,
              content: post.content.postBody,
              title: post.content.title,
              img: post.content.imgArea,
            }
          }),
        }
      })
  },
}
</script>