<template>
  <div>
    <login-register-bar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginRegisterBar from '~/components/LoginRegisterBar.vue'
export default Vue.extend({
  components: {
    LoginRegisterBar,}
})
</script>
<style lang="scss" scoped>
  div {
    background-color: #333;
    min-height: 100vh;
  }
  .auth {
    background-color: black;
    opacity: 0.1;
    height: 100vh;
    z-index: -1;
  }
  div > div {
    color: #fff;
  }
    
</style>