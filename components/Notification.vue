<template>
  <div class="notification">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Notification',
  props: ['message']
})
</script>