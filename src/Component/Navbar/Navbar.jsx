import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

    const [button, setButton] = useState(true);
    const [height, setheight] = useState(0);

    function isButtonPressed() {
        setButton(!button);
    }

    function isScrolled() {
        let x = structuredClone(height);
        x = window.scrollY;
        setheight(x);
    }

    useEffect(() => {
        window.addEventListener('scroll', isScrolled);
        return () => {
            window.removeEventListener('scroll', isScrolled);
        }
    }, []);


    return (
        <>
            <nav className="bg-[#2C3E50] fixed w-full z-20 top-0 start-0">
                <div className={`container flex flex-wrap md:flex-nowrap items-center justify-between mx-auto transition-all duration-500 p-4 ${height > 30 ? `` : `py-7 md:py-10`}`}>
                    <Link to=''>
                        <h1 className='text-white text-2xl md:text-4xl uppercase font-bold bg-slate-700'>start framework</h1>
                    </Link>
                    <button onClick={isButtonPressed} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#242C33] border-2 rounded-lg border-[#253544] md:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${button ? "hidden" : ''}  w-full md:block md:w-auto id="navbar-default`}>
                        <ul className="font-medium flex flex-col  p-4 md:p-0 mt-4  md:flex-row md:space-x-3 space-y-5 md:space-y-0 rtl:space-x-reverse md:mt-0 ">
                            <li>
                                <NavLink to="about" className="block py-2 px-3 text-white font-bold capitalize text-xl md:text-2xl  rounded" aria-current="page">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="portfolio" className="block w-fit py-2 px-4 text-white font-bold capitalize text-xl md:text-2xl rounded">portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" className="block py-2 px-3 text-white font-bold capitalize text-xl md:text-2xl rounded">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
