import axios from 'axios'
const movieApi = {
    getListMovies() {
        const url = 'http://localhost:3100/api/movie/search'
        return axios.get(url)
    },
    getAllMoviesSeries() {
        const url = 'http://localhost:3100/api/movie/search/series'
        return axios.get(url)
    },
    getAllMoviesNoSeries() {
        const url = 'http://localhost:3100/api/movie/search/noseries'
        return axios.get(url)
    },
    getListMovieBymovieId(id) {
        const url = `http://localhost:3100/api/movie/search/movieId/${id}`
        return axios.get(url)
    },
    getListMovieByCountryId(id) {
        const url = `http://localhost:3100/api/movie/search/countryId/${id}`
        return axios.get(url)
    },
    getListMovieByDirectorId(id) {
        const url = `http://localhost:3100/api/movie/search/directorId/${id}`
        return axios.get(url)
    },
    getMovieById(id) {
        const url = `http://localhost:3100/api/movie/search/${id}`
        return axios.get(url)
    },
    updateMovieReview(id, reviewId) {
        const url = `http://localhost:3100/api/movie/updateReview/${id}`
        return axios.put(url, {
            reviewId: reviewId
        })
    },
    addMovie(name, description) {
        const url = 'http://localhost:3100/api/movie/'
        return axios.post(url, { name, description })
    },
    updateMovie(id, name, description) {
        const url = `http://localhost:3100/api/movie/${id}`
        return axios.put(url, { name, description })
    },
    deleteMovie(id) {
        const url = `http://localhost:3100/api/movie/${id}`
        return axios.delete(url)
    }

}
export default movieApi