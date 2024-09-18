import React from 'react';
import { Link } from 'react-router-dom';
import "@fontsource/poppins";

const Navbar: React.FC = () => {
    return (
        <nav className='fixed w-full py-5 bg-neutral-800 text-slate-100' style={{ fontFamily: 'Poppins' }}>
            <ul className='flex'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Projects</Link>
                </li>
                <li>
                    <Link to="/about">Skills</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
