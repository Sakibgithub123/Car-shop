import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Header = ({cart}) => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then()
            .catch()

    }
    const nav = <>
        <li><NavLink to={"/"} >Home</NavLink> </li>
        <li><NavLink to={"/about"} >About Us</NavLink> </li>
        <li><NavLink to={"/contact"} >Contact</NavLink> </li>

        {
            user ? <li><NavLink to={"/add-product"}>Add Product</NavLink> </li> : ''
        }
        {
            user ? <li><NavLink to={"/cart"}>Carts <sup className="badge badge-secondary">{cart.length}</sup> </NavLink> </li> : ''
        }
    </>
    return (
        <div className="navbar bg-neutral-focus text-[#f15d5d]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#f15d5d]">
                        {
                            nav
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">CarMall</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#f15d5d]">
                    {
                        nav
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3">

                {
                    user ?
                    <div className="flex flex-col md:flex-row gap-4">
                    {user?.photoURL?
                    <div className="avatar ">
                    <div className="w-8 md:w-14 rounded-full">
                    <img src={user.photoURL} />
                      
                    </div>
                  </div>
                     
                      :''}
                    
                    <div> {user?.displayName? <p  className="bg-[#fff] text-sm text-[#2d3e50] py-2 px-3  border rounded font-medium ">{user.displayName}</p>  : ''}</div>
                    <button onClick={handleLogout} className="btn">LogOut</button>
                  </div>
                        
                        :
                        <div>
                            <button><NavLink to={"/login"} className="btn">Login</NavLink></button>
                            <button><NavLink to={"/signup"} className="btn">Register</NavLink></button>
                        </div>

                }
            </div>
        </div>
    );
};

export default Header;