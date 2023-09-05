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
    }


}
export default countryApi