import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
    return (
        <nav className='sticky top-0 w-full flex gap-3 px-4 shadow items-center justify-between z-20 py-3 bg-neutral-900 text-slate-200' style={{ fontFamily: 'Poppins' }}>
            <Link to={'/'} className='flex gap-3 items-center'>
                <img src="/assets/avatars/elang.png" alt="Muhammad Elang Hardifal" className='w-12' />
                <strong className='text-xs md:text-base'>Muhammad Elang Hardifal</strong>
            </Link>
            <ul className='hidden md:flex gap-14 items-center font-semibold'>
                <li>
                    <button
                        onClick={() => scrollToSection('home')}
                        className={activeSection === 'home' ? 'text-teal-600' : 'text-slate-200'}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={activeSection === 'projects' ? 'text-teal-600' : 'text-slate-200'}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className={activeSection === 'skills' ? 'text-teal-600' : 'text-slate-200'}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('certificates')}
                        className={activeSection === 'certificates' ? 'text-teal-600' : 'text-slate-200'}
                    >
                        Certificates
                    </button>
                </li>
            </ul>
            <div>
                <Link to="https://wa.me/6282115100979" target='_blank' className='bg-teal-600 px-5 text-sm md:text-base font-semibold py-2 text-nowrap rounded-full flex gap-2 items-center'>
                    <FaWhatsapp className='text-xl' /> Hire Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
