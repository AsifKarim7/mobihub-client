import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin/useAdmin';
import useBuyer from '../hooks/useBuyer/useBuyer';

import useSeller from '../hooks/useSeller/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet className="max-w-screen-xl"></Outlet>
                </div>
                <div className="drawer-side md:ml-40 md:mt-12 h-44">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 font-semibold border-4 rounded-xl border-blue-200 bg-white text-[#2666CF] items-center">

                        {user?.email && !isSeller && !isAdmin && <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        </>

                        }

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;