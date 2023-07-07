import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CourierPartner from "../Pages/CourierPartner/CourierPartner";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Main />,
        children: [
            {
                path: '/dashboard/home',
                element: <Dashboard />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers />
            },

            {
                path: '/dashboard/courier-partner',
                element: <CourierPartner />
            },
        ]
    }
]

)