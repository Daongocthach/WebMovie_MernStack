import axios from 'axios'
const movieApi = {
    getListMovies() {
        const url = 'http://localhost:3100/api/movie/search'
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getAllMoviesSeries() {
        const url = 'http://localhost:3100/api/movie/search/series'
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getAllMoviesNoSeries() {
        const url = 'http://localhost:3100/api/movie/search/noseries'
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getListMovieByCategoryId(id) {
        const url = `http://localhost:3100/api/movie/search/categoryId/${id}`
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getListMovieByCountryId(id) {
        const url = `http://localhost:3100/api/movie/search/countryId/${id}`
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getListMovieByDirectorId(id) {
        const url = `http://localhost:3100/api/movie/search/directorId/${id}`
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getMovieById(id) {
        const url = `http://localhost:3100/api/movie/search/${id}`
        return axios.get(url)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    },
    updateMovieReview(id, reviewId) {
        const url = `http://localhost:3100/api/movie/updateReview/${id}`
        return axios.put(url, {
            reviewId: reviewId
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }

}
export default movieApi