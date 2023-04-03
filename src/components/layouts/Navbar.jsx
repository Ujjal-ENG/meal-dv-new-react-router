import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <ul className="bg-[#663399] p-3 font-bold flex justify-center items-center gap-5 text-3xl">
                <NavLink to="/about" className={({ isActive, isPending }) => (isActive ? 'active' : '')}>
                    About
                </NavLink>
                <NavLink to="/contact-us" className={({ isActive, isPending }) => (isActive ? 'active' : '')}>
                    ContactUs
                </NavLink>
                <NavLink to="/users" className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}>
                    Meals
                </NavLink>
            </ul>
        </>
    );
};

export default Navbar;
