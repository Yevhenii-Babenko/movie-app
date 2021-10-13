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
              >News</NuxtLink
            >
          </li>
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: '/home' }">
              Contact</NuxtLink
            >
          </li>
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: 'index' }"
              >About</NuxtLink
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

<style lang="scss" scoped>
$header-bg-color: #333;
@mixin margin($margin: 0) {
  margin: 0;
}
@mixin padding($padding: 0) {
  padding: 0;
}
@mixin display-flex {
  display: flex;
}
@mixin list-style {
  list-style-type: none;
  @include margin($margin: 0);
  @include padding($padding: 0);
}
@mixin theme($theme: $header-bg-color) {
  // background-color: $header-bg-color;
  border: $header-bg-color;
}

.wrapper {
  padding: 40px 0;
}
.navbar {
  @include theme($theme: $header-bg-color);
  @include display-flex;
  color: #fff;
  @include margin($margin: 0);
  overflow: hidden;
  &__list {
    @include display-flex;
    @include list-style;
    flex-grow: 1;
    gap: 5%;
  }
  &__item {
    &:first-of-type .navbar__link {
      color: red;
      transition: 0.3s ease-in-out all;
      &:hover {
        color: #fff;
        transition: 0.5s ease-in-out all;
      }
    }
  }
  &__link {
    &:hover {
      color: red;
      transition: 0.3s ease-in-out all;
    }
    text-decoration: none;
    color: #fff;
    transition: 0.5s ease-in-out all;
    font-weight: bold;
  }
}
</style>