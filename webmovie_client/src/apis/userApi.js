import axios from 'axios'
import { setCookie } from '../utils/setCookie'

const userApi = {
    login(email, password) {
        const url = 'http://localhost:3100/api/auth/login'
        return axios.post(url, {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response)
                setCookie('token', response.data.token, 1)
                return response
            })
            .catch(error => {
                return error
            })
    },
    logout(data) {
        const url = '/user/logout'
    },
    pingRole() {
        const url = '/user/ping_role'
    },
    getProfile() {
        const url = '/user/profile'
    }
}

export default userApi