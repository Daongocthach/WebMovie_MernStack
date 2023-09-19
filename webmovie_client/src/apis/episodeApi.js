import axios from 'axios'
const episodeApi = {
    getEpisodesByMovieId(id) {
        const url = `http://localhost:3100/api/episode/search/${id}`
        return axios.get(url)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }

}
export default episodeApi