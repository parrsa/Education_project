import Home from './Api/Home/Home';
import Cards from './Api/Card/Cards';
import Login from './Api/Membership/Login'
import SignIn from './Api/Membership/Register'
import MainTeacher from './Api/RegisterTeacher/Main'
import RegisterTeacher from './Api/RegisterTeacher/Register'
import Pro from './Api/Product/Product'
import Basket from './Api/Basket/Basket';
import Information from './Api/UserControll/Information.js';
import Notfound from './Api/NotFound/Notfound';
import Dargah from './Api/ApiKhanm/Dargah';
let router = [
    { path:'/', element: <Home /> },
    { path: '/courses', element: <Cards /> },
    { path: '/Login', element: <Login /> },
    { path:'/sign-up', element:< SignIn />},
    { path:'/Main', element:< MainTeacher />} ,
    { path:'/Register-Teacher', element:< RegisterTeacher />}, 
    { path:'/Pro', element:< Pro />},
    { path:'/Basket', element:< Basket />} ,
    { path:'*', element:< Notfound />},
    { path:'information', element:< Information />},
    { path:'/information/:id', element:< Information />},
    { path:'/Dargah', element:< Dargah />},
]
export default router