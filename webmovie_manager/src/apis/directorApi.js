import axios from 'axios'
const directorApi = {
    getListDirectors() {
        const url = 'http://localhost:3100/api/director/search'
        return axios.get(url)
    },
    getDirectorByMovieId(id) {
        const url = `http://localhost:3100/api/director/search/movieId/${id}`
        return axios.get(url)
    },
    getDirectorById(id) {
        const url = `http://localhost:3100/api/director/search/${id}`
        return axios.get(url)
    },
    addDirector(name, description) {
        const url = 'http://localhost:3100/api/director/'
        return axios.post(url, { name, description })
    },
    updateDirector(id, name, description) {
        const url = `http://localhost:3100/api/director/${id}`
        return axios.put(url, { name, description })
    },
    deleteDirector(id) {
        const url = `http://localhost:3100/api/director/${id}`
        return axios.delete(url)
    }

}
export default directorApi