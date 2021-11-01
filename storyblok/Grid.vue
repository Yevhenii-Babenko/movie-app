<template>
  <div v-editable="blok" style="display: flex; justify-content: space-around">
    <component
      :key="blok._uid"
      v-for="blok in blok.columns"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>