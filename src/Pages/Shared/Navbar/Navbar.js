import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/images/logo.png';
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItems = <>
        <Link className='motion-safe:hover:scale-110' to='/'>Home</Link>
        <Link className='motion-safe:hover:scale-110' to='/blog'>Blog</Link>
        {
            user?.email ?
                <>
                    <Link className='motion-safe:hover:scale-110' to='/dashboard'>Dashboard</Link>
                </>
                :
                <></>
        }
    </>

    const menuLoginLogout = <>
        {
            user?.email ?
                <button onClick={handleLogOut} className='flex items-center gap-3 motion-safe:hover:scale-110'><span>Logout</span> <FaSignOutAlt></FaSignOutAlt> </button>
                :
                <Link to='/login' className='flex items-center gap-3 motion-safe:hover:scale-110'><span>Login</span><FaUserAlt></FaUserAlt></Link>
        }
    </>



    return (
        <div className="navbar bg-[#DEF6FF] text-[#2666CF] font-bold py-2">

            <div className="navbar-start pl-0 md:pl-80">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="text-[#2666CF] text-center menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#DEF6FF] rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to='/'>
                    <img className='w-44 motion-safe:hover:scale-110' src={logo} alt="logo" />
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-3">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end pr-0 md:pr-80">
                {menuLoginLogout}
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div >
    );
};

export default Navbar;