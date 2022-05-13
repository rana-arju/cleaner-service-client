import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    return (
        <div>
           <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-primary-300">
                <div className="flex-1 px-2 mx-2">Clearner .co</div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal gap-x-2">
                    <li ><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                    <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                    <li><NavLink to="/services" className="rounded-lg">Services</NavLink></li>
                    <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                    <li><NavLink to="/login" className="rounded-lg">Login</NavLink></li>
                    </ul>
                </div>
                </div>
               {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-4/5 bg-base-100">
                <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                <li><NavLink to="/services" className="rounded-lg">Services</NavLink></li>
                <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                <li><NavLink to="/login" className="rounded-lg">Login</NavLink></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;