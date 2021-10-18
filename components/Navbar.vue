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
  padding: 30px 0;
}
.navbar {
  @include theme($theme: $header-bg-color);
  @include display-flex;
  color: #fff;
  @include margin($margin: 0);
  overflow: hidden;
  width: 50%;
  margin-left: auto;
  &__list {
    @include display-flex;
    @include list-style;
    flex-grow: 1;
    gap: 5%;
    align-items: center;
    justify-content: flex-end;
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
    &:last-of-type {
      width: 30%;
    }
    &:last-of-type .navbar__link {
      font-size: inherit;
      box-sizing: border-box;
      font-weight: bold;
      position: relative;
      vertical-align: middle;
      background-color: red;
      color: #fff;
      display: inline-block;
      height: 35px;
      text-align: center;
      transition: 0.5s;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 4px;
      border: 2px solid red;
      outline: none;
      transition: 0.5s;
      &:hover {
        border: 2px solid rgba(0, 160, 80, 0);
        background-color: #211f1f;
        color: red;
      }
      &::before,
      &::after {
        width: 100%;
        height: 100%;
        z-index: 3;
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        transform: scale(0);
        transition: 0.5s;
      }
      &:hover::after,
      &:hover::before {
        transform: scale(1);
      }
    }
    .navbar__link__outline {
      &::before {
        border-bottom: 2px solid red;
        border-left: 2px solid red;
        transform-origin: 0% 100%;
      }
      &::after {
        border-top: 2px solid red;
        border-right: 2px solid red;
        transform-origin: 100% 0%;
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