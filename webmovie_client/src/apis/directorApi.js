import axios from 'axios'
const directorApi = {
    getListDirectors() {
        const url = 'http://localhost:3100/api/director/search'
        return axios.get(url)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },


}
export default directorApi