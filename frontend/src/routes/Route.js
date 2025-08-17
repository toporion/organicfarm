import {createBrowserRouter} from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import AdminLayOut from "../layOut/AdminLayOut";
import AdminHome from "../adminPages/AdminHome";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
  },
  {
    path:'/admin',
    element:<AdminLayOut/>,
    children:[
      {
        path:'',
        element:<AdminHome/>
      }
    ]
  }
]);

export default router;