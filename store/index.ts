import { GetterTree, ActionTree, MutationTree } from 'vuex'
import api from '~/services/api'

export const state = () => ({
    users: [] as string[],
    name: 'test' as string,
    auth: false as boolean,
    movies: [] as [],
    searchedMovies: [] as [],
    searchInput: '' as string,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    name: state => state.name,
    auth: state => state.auth,
    movies: state => state.movies,
    searchMovies: state => state.searchedMovies,
    inputSearchMovie: state => state.searchInput,
}
export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName),
    LOGGED: (state, log: boolean) => (state.auth = log),
    UPDATEMOVIES: (state, payload: []) => (state.movies = payload),
    UPDATASEARCHEDMOVIES: (state, payload: []) => (state.searchedMovies = payload)
}
export const actions: ActionTree<RootState, RootState> = {
    async fetchMovies({ commit }) {
        try {
            const movies = await this.$axios.$get('movie/now_playing?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1')
                .then(data => data.results);
            commit('UPDATEMOVIES', movies)
            return movies;
        } catch (error) {
            console.error('error fetching movies', error)
        }
    },
    setLog({ commit }) {
        commit('LOGGED', true)
    },
    async fetctSearchedMovies({ commit }) {
        try {
            const searchedMovies = await this.$axios.$get('search/movie?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1&query=' + this.getters.inputSearchMovie)
                .then(data => data.results);
            commit('UPDATASEARCHEDMOVIES', searchedMovies)
            return searchedMovies;
        } catch (error) {
            console.error('error fetching searched movies', error)
        }
    }
}