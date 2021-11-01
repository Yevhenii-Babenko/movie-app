<template>
  <div v-editable="blok" class="teaser">
    <img :src="blok.image.filename" alt="">
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss">
.teaser {
  width: 100%;
  text-align: center;
  margin: 30px 0;
}
</style>