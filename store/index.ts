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
}
export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName),
    LOGGED: (state, log: boolean) => (state.auth = log)
}
export const actions: ActionTree<RootState, RootState> = {
    async fetchThings({ state, commit }) {
        const things = await this.$axios.$get('movie/now_playing?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1')
        console.log(things)
        commit('CHANGE_NAME', state.movies)
    },
    setLog({state, commit}){
        commit('LOGGED', state.auth = true)
    }
}