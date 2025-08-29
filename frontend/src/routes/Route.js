import {createBrowserRouter} from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import AdminLayOut from "../layOut/AdminLayOut";
import AdminHome from "../adminPages/AdminHome";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import ForAdminShowServices from "../adminPages/ForAdminShowServices";
import UpdateService from "../adminPages/UpdateService";
import ForAdminShowStaffs from "../adminPages/ForAdminShowStaffs";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {path:'/register',element:<Register/>},
        {path:'/login',element:<Login/>},
    ]
  },
  {
    path:'/admin',
    element:<PrivateRoute allowedRoles={['user','admin']}><AdminLayOut/></PrivateRoute>,
    children:[
      {
        path:'',
        element:<AdminHome/>
      },
      {path:'show_services',element:<ForAdminShowServices/>},
      {path:'update_service/:serviceId',element:<UpdateService/>},
      {path:'show_staff',element:<ForAdminShowStaffs/>}
    ]
  }
]);

export default router;