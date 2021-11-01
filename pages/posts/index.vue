<template>
  <h1>Hello from post root page</h1>
</template>

<script>
export default {
asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
    }).then(response => response)
}
}
</script>