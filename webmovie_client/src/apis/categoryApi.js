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


}
export default categoryApi