<template>
  <section class="section">
    <Hero />
    <!-- <Search /> -->
    <MovieGrid />
    <Footer />
  <div> {{this.$store.getters['name']}} </div>
  <div> {{this.$store.getters['auth']}} </div>
  </section>
</template>

<script lang="ts">
import Hero from '~/components/Hero.vue'
import Search from '~/components/Loading.vue'
import MovieGrid from '~/components/MovieGrid.vue'
import Footer from '~/components/Footer.vue'
import Vue from 'vue'
/* import { Component, Vue } from 'nuxt-property-decorator' */
import { getters, RootState } from '~/store'

export default Vue.extend({
  layout: 'auth',
  mounted() {
    const name = this.$store.getters['name'] as ReturnType<typeof getters.name>
  },
  data() {
    return { name: this.$store.getters['name']}
  },
  components: {
    Hero,
    MovieGrid,
    Search,
    Footer,
  },
})
</script>

<style>
.title {
  color: blue;
}
</style>