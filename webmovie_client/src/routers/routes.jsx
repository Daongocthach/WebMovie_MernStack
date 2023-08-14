import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Board from '../pages/Boards/_id'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Users/Login/Login'
import Register from '../pages/Users/Register/Register'
import Profile from '../pages/Users/Profile/Profile'
import Movie from '../pages/Movie/Movie'

function routes() {
    return (
        <Router>
            <Routes>
                {/* Định nghĩa các Route */}
                <Route path="/" element={<Board />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}


export default routes