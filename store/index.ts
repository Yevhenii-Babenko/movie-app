import { GetterTree, ActionTree, MutationTree } from 'vuex'
import api from '~/services/api'

export const state = () => ({
    users: [] as string[],
    name: 'test' as string,
    auth: false as boolean,
    movies: [] as [],
    searchedMovies: [] as [],
    searchInput: '' as string,
    loadingState: false as boolean,
    singlMovie: {} as {},
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    name: state => state.name,
    auth: state => state.auth,
    movies: state => state.movies,
    searchMovies: state => state.searchedMovies,
    inputSearchMovie: state => state.searchInput,
    isLoading: state => state.loadingState,
    movie: state => state.singlMovie,
}
export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName),
    LOGGED: (state, log: boolean) => (state.auth = log),
    UPDATEMOVIES: (state, payload: []) => (state.movies = payload),
    UPDATASEARCHEDMOVIES: (state, payload: []) => (state.searchedMovies = payload),
    UODATEINPUTFIELD: (state, payload) => (state.searchInput = payload),
    CLEARINPUT: (state, payload) => (state.searchInput = payload),
    SETLOADED: (state, payload) => (state.loadingState = payload),
    UPDATESINGLEMOVIE: (state, payload) => (state.singlMovie = payload)
}
export const actions: ActionTree<RootState, RootState> = {
    async fetchMovies({ commit }) {
        try {
            commit('SETLOADED', true);
            const movies = await this.$axios.$get('movie/now_playing?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1')
                .then(data => data.results);
            commit('UPDATEMOVIES', movies)
            commit('SETLOADED', false);
            return movies;
        } catch (error) {
            console.error('error fetching movies', error)
        }
    },
    setLog({ commit }) {
        commit('LOGGED', true)
    },
    async fetctSearchedMovies({ commit }, input) {
        try {
            commit('SETLOADED', true);
            const searchedMovies = await this.$axios.$get(`search/movie?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1&query=${input}`)
                .then(data => data.results);
            commit('UODATEINPUTFIELD', input);
            commit('UPDATASEARCHEDMOVIES', searchedMovies);
            const fetchDelay = () => setTimeout(() => {
                commit('SETLOADED', false)
            }, 1000)
                ;
            fetchDelay()

            return searchedMovies;
        } catch (error) {
            console.error('error fetching searched movies', error)
        }
    },
    async fetchSingleMovieById({ commit }, id: number) {
        try {
            commit('SETLOADED', true);
            const getMovie = await this.$axios.$get(`movie/${id}?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US`)
                .then(data => data);
            commit('UPDATESINGLEMOVIE', getMovie)
            const fetchDelay = () => setTimeout(() => {
                commit('SETLOADED', false)
            }, 1000);
            fetchDelay();
        } catch (error) {
            console.error('cant\' load movie by id', error)
        }
    }
}

function data(arg0: string, data: any): ((reason: any) => PromiseLike<never>) | null | undefined {
    throw new Error('Function not implemented.')
}
