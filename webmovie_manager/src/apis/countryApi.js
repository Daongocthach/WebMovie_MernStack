import axios from 'axios'
const countryApi = {
    getListCountries() {
        const url = 'http://localhost:3100/api/country/search'
        return axios.get(url)
    },
    getCountriesByMovieId(id) {
        const url = `http://localhost:3100/api/country/search/movieId/${id}`
        return axios.get(url)
    },
    getCountryById(id) {
        const url = `http://localhost:3100/api/country/search/${id}`
        return axios.get(url)
    },
    addCountry(name, description) {
        const url = 'http://localhost:3100/api/country/'
        return axios.post(url, { name, description })
    },
    updateCountry(id, name, description) {
        const url = `http://localhost:3100/api/country/${id}`
        return axios.put(url, { name, description })
    },
    deleteCountry(id) {
        const url = `http://localhost:3100/api/country/${id}`
        return axios.delete(url)
    }


}
export default countryApi