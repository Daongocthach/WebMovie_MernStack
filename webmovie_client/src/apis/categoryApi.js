import axios from 'axios'
const categoryApi = {
    getListCategories() {
        const url = 'http://localhost:3100/api/category/search'
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
    },
    addCategory(name, description) {
        const url = 'http://localhost:3100/api/category/'
        return axios.post(url, { name, description })
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }

}
export default categoryApi