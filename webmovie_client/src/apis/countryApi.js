import axios from 'axios'
const countryApi = {
    getListCountries() {
        const url = 'http://localhost:3100/api/country/search'
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    getCategoriesByMovieId(id) {
        const url = `http://localhost:3100/api/category/search/movieId/${id}`
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }


}
export default countryApi