import axios from 'axios'
const movieApi = {
    getListMovies() {
        const url = 'http://localhost:3100/api/movie/search'
        return axios.get(url)
            .then(response => {
                console.log(response)
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
                console.log(response)
                return response.data
            })
            .catch(error => {
                throw error
            })
    }

}
export default movieApi