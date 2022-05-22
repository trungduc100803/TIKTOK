import HomePage from "../pages/Home";
import FollowingPage from "../pages/Following";
import HeaderOnly from "../component/HeaderOnly";

const publicRoutes = [
    {path:'/', component: HomePage},
    {path:'/following', component: FollowingPage}
]


const privateRoutes = [

]

export {privateRoutes, publicRoutes} 