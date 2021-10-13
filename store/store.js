export const state = () => ({
    users: [{
        name: 'user 1'
    }]
})

export const auth = () => ({
    isAuthed: true,
})

export const getters = {
    isAuthenticated: state => state.isAuthed
}