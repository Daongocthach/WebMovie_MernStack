import axios from 'axios'
const ratingApi = {
    getRatingsByMovieId(id) {
        const url = `http://localhost:3100/api/rating/search/${id}`
        return axios.get(url)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }

}
export default ratingApi