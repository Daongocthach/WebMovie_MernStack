import DashBoard from '../pages/DashBoard/DashBoard'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import UserList from '../pages/UserList/UserList'
import MovieList from '../pages/MovieList/MovieList'
import CategoryList from '../pages/CategoryList/CategoryList'
import CountryList from '../pages/CountryList/CountryList'
import DirectorList from '../pages/DirectorList/DirectorList'
import EpisodeList from '../pages/EpisodeList/EpisodeList'
const publicRoutes = [
    { path:'/', component: Login },
    { path:'/dashboard', component: DashBoard },
    { path:'/userlist', component: UserList },
    { path:'/categorylist', component: CategoryList },
    { path:'/countrylist', component: CountryList },
    { path:'/directorlist', component: DirectorList },
    { path:'/movielist', component: MovieList },
    { path:'/episodelist', component: EpisodeList },
    { path:'/profilelist', component: Profile }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }