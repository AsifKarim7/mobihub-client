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
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Payment from "../../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({ params }) => fetch(`https://mobihub-server-ecru.vercel.app/category/${params.categoryId}`)
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute> <DashboardLayout> </DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://mobihub-server-ecru.vercel.app/orders/${params.id}`)
            }

        ]
    }
])

export default router;