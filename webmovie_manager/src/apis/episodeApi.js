import axios from 'axios'
const episodeApi = {
    getListEpisodes() {
        const url = 'http://localhost:3100/api/episode/search'
        return axios.get(url)
    },
    getEpisodesByMovieId(id) {
        const url = `http://localhost:3100/api/episode/search/${id}`
        return axios.get(url)
    },
    addEpisode(name, description, duration, link) {
        const url = 'http://localhost:3100/api/episode'
        return axios.post(url, { name, description, duration, link })
    },
    updateEpisode(id, name, description, duration, link) {
        const url = `http://localhost:3100/api/episode/${id}`
        return axios.put(url, { name, description, duration, link })
    },
    deleteEpisode(id) {
        const url = `http://localhost:3100/api/episode/${id}`
        return axios.delete(url)
    }
}
export default episodeApi