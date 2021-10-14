import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    users: [] as string[],
    name: 'test' as string,
    auth: false as boolean,
    movies: [] as []
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    name: state => state.name,
    auth: state => state.auth,
    movies: state => state.movies,
}
export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName),
    LOGGED: (state, log: boolean) => (state.auth = log),
    UPDATEMOVIES: (state, payload: []) => (state.movies = payload)
}
export const actions: ActionTree<RootState, RootState> = {
    async fetchMovies({ commit }) {
        const movies = await this.$axios.$get('movie/now_playing?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1')
            .then(data => data.results);
        console.log('movies', movies)
        commit('UPDATEMOVIES', movies)
    },
    setLog({ commit }) {
        commit('LOGGED', true)
    }
}