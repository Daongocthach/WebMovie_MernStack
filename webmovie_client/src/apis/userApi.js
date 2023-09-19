import axios from 'axios'
import { setCookie } from '../utils/cookie'

const userApi = {
    login(email, password) {
        const url = 'http://localhost:3100/api/auth/login'
        return axios.post(url, {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response)
                if (response) {
                    setCookie('token', response.data.token, 1)
                    setCookie('avatar', response.data.image, 1)
                    setCookie('name', response.data.name, 1)
                }
                return response
            })
    },

    getProfile(token) {
        const url = 'http://localhost:3100/api/user/profile'
        return axios.post(url, {
            token: token
        })
            .then(response => {
                console.log(response)
                return response
            })
    },
    updateUser(_id, username, phone, image) {
        const url = 'http://localhost:3100/api/user/'
        return axios.put(url, {
            _id: _id,
            username: username,
            phone: phone,
            image: image
        })
            .then(response => {
                console.log(response)
                return response
            })
    }
}

export default userApi