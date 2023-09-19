import axios from 'axios'
const categoryApi = {
    getListCategories() {
        const url = 'http://localhost:3100/api/category/search'
        return axios.get(url)
    },
    getCategoriesByMovieId(id) {
        const url = `http://localhost:3100/api/category/search/movieId/${id}`
        return axios.get(url)
    },
    addCategory(name, description) {
        const url = 'http://localhost:3100/api/category/'
        return axios.post(url, { name, description })
    },
    updateCategory(id, name, description) {
        const url = `http://localhost:3100/api/category/${id}`
        return axios.put(url, { name, description })
    },
    deleteCategory(id) {
        const url = `http://localhost:3100/api/category/${id}`
        return axios.delete(url)
    }

}
export default categoryApi