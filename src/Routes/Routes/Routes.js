import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductCollection from "../../Pages/ProductCollection/ProductCollection";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";

import AdminRoute from "../AdminRoute/AdminRoute";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:categoryId',
                element: <PrivateRoute><ProductCollection></ProductCollection></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.categoryId}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout> </DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute> <MyOrders></MyOrders> </BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute> <AddProduct></AddProduct> </SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute> <MyProducts></MyProducts> </SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute> <AllBuyers></AllBuyers> </AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute> <AllSeller></AllSeller> </AdminRoute>
            }

        ]
    }
])

export default router;