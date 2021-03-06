import axios from 'axios'

const apiKey: string = '84a698300a40f7d90c5505eebd96b53b';
// axios.default.headers.set('Authorization',)
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const api = {
    getAllMovies: () => instance.get(`movie/now_playing?api_key=${apiKey as string}&language=en-US&page=1`),
    findSearchingMovies: (searchInput: string) => instance.get(`search/movie?api_key=${apiKey as string}&language=en-US&page=1&query=${searchInput as string}`),
    getSingleMovieById: (id: number) => instance.get(`movie/${id as number}?api_key=${apiKey as string}&language=en-US`),
}

export default api;