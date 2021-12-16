<template>
  <form @submit.prevent="fetchMovies">
    <div class="search container">
      <input
        @keyup.enter="fetchMovies"
        type="text"
        placeholder="Search"
        v-model="searchInput"
        required
      />
      <button
        @click.prevent="cleanSerch"
        v-if="searchMovies.length"
        class="button button--srch button--width"
      >
        Clear Search
      </button>
      <button v-else class="button button--srch button--width" type="submit">
        Search
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { mapGetters, mapActions, mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['inputSearchMovie', 'searchMovies', 'inputSearchMovie']),
    ...mapMutations(['CLEARINPUT', 'UPDATASEARCHEDMOVIES']),
  },
  methods: {
    ...mapActions(['fetctSearchedMovies']),
    cleanSerch: function () {
      this.$store.commit('CLEARINPUT', '');
      this.$store.commit('UPDATASEARCHEDMOVIES', []);
    },
  },
})
export default class Search extends Vue {

  get searchInput(): string {
    return this.$store.state.searchInput || '';
  }

  set searchInput(value: string) {
    this.$store.commit('UODATEINPUTFIELD', value);
  }

  fetchMovies() {
    this.$store.dispatch('fetctSearchedMovies', this.searchInput);
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/layout/search';
</style>
