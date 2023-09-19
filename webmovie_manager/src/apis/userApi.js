import axios from 'axios'

const userApi = {
    login(email, password) {
        const url = 'http://localhost:3100/api/auth/login'
        return axios.post(url, {
            email: email,
            password: password
        })
    },

    getProfile(token) {
        const url = 'http://localhost:3100/api/user/profile'
        return axios.post(url, {
            token: token
        })
    },
    getListUsers() {
        const url = 'http://localhost:3100/api/user/search'
        return axios.get(url)
    },
    addUser(email, username, password, phone, role, status) {
        const url = 'http://localhost:3100/api/user/'
        return axios.post(url, { email, username, password, phone, role, status })
    },
    deleteUser(id) {
        const url = `http://localhost:3100/api/user/${id}`
        return axios.delete(url)
    },
    updateUser(id, email, username, phone, image, role, status) {
        const url = `http://localhost:3100/api/user/${id}`
        return axios.put(url, {
            email: email,
            username: username,
            phone: phone,
            image: image,
            role: role,
            status: status
        })
    }
}

export default userApi