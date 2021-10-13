<template>
  <header>
    <div class="wrapper container">
      <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <NuxtLink class="navbar__link" :to="{ name: 'index' }">Home</NuxtLink>
          </li>
          <li class="navbar__item">News</li>
          <li class="navbar__item">Contact</li>
          <li class="navbar__item">About</li>
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
  background-color: $header-bg-color;
  border: $header-bg-color;
}

.wrapper {
  padding: 30px 0;
}
.navbar {
  @include theme($theme: $header-bg-color);
  color: #fff;
  // display: block;
  @include margin($margin: 0);
  overflow: hidden;
  &__list {
    @include display-flex;
    @include list-style;
    gap: 10px;
  };
  &__link {
    color: red;
  }
}
</style>