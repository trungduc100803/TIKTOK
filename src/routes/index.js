import HomePage from "../pages/Home";
import FollowingPage from "../pages/Following";
import HeaderOnly from "../component/HeaderOnly";
import Profile from "../pages/Profile";
import Upload from '../pages/Upload'
import Search from "../pages/Search";
import Live from '../pages/Live'
import routesConfig from "../config/routes";


const publicRoutes = [
    {path:routesConfig.home, component: HomePage},
    {path:routesConfig.following, component: FollowingPage},
    {path:routesConfig.profile, component: Profile},
    {path:routesConfig.upload, component: Upload},
    {path:routesConfig.search, component: Search},
    {path:routesConfig.live, component: Live},
]


const privateRoutes = [

]

export {privateRoutes, publicRoutes} 