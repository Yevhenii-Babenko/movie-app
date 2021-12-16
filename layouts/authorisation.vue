<template>
  <div>
    <login-register-bar />
    <Nuxt />
  </div>
</template>

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
