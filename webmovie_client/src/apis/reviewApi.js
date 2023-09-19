import axios from 'axios'
const reviewApi = {
    getReviewsByMovieId(id) {
        const url = `http://localhost:3100/api/review/search/movieId/${id}`
        return axios.get(url)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    },
    getReviewsByEpisodeId(id) {
        const url = `http://localhost:3100/api/review/search/episodeId/${id}`
        return axios.get(url)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    },
    addReview(comment, avatar, name) {
        const url = 'http://localhost:3100/api/review'
        return axios.post(url, {
            comment: comment,
            avatar: avatar,
            name: name
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }
}
export default reviewApi