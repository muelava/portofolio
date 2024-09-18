import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className='flex fixed justify-between w-full'>
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
