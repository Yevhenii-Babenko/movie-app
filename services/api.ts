import axios from 'axios'

const apiKey = '84a698300a40f7d90c5505eebd96b53b';
// axios.default.headers.set('Authorization',)
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const api = {
    getAllMovies: () => instance.get(`movie/now_playing?api_key=${apiKey}&language=en-US&page=1`),
}

export default api;