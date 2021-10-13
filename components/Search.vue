<template>
  <div class="search container">
    <input
      @keyup.enter="$fetch"
      type="text"
      placeholder="Search"
      v-model.lazy="searchInput"
    />
    <button
      @click="clearSearchInput"
      v-show="searchInput !== ''"
      class="button"
    >
      Clear Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  loading: false
}
</script>

<style>
</style>