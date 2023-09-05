import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/DashBoard/DashBoard'
import Login from '../pages/Login/Login'

function routes() {
    return (
        <Router>
            <Routes>
                {/* Định nghĩa các Route */}
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<DashBoard/>} />

            </Routes>
        </Router>
    )
}


export default routes