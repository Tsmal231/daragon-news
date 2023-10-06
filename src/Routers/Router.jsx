import { createBrowserRouter } from "react-router-dom";

import Root from "../mainlayout/Root"
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News/News";
import PrivetRoute from './../privet rout/privetRoute';






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/news/:id',
                element:<PrivetRoute><News></News></PrivetRoute>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
]);
export default router;