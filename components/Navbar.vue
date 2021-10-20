<template>
  <header>
    <div class="wrapper container">
      <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: 'index' }"
              >Home</NuxtLink
            >
          </li>
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: 'index' }"
              >About</NuxtLink
            >
          </li>
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: 'register' }"
              >Register</NuxtLink
            >
          </li>
          <li class="navbar__item">
            <NuxtLink
              class="navbar__link navbar__link__outline"
              :to="{ name: 'login' }"
              tag="button"
              >Log In</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
})
</script>

<style lang="scss">
@import '~/assets/scss/layout/navbar';
</style>