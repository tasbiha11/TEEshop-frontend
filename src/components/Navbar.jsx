import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-[#873e23] fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center text-white'>
                    <h1 className='text-3xlfont-bold mr-4 sm:text-4xl cursor-pointer'>TheTeeShop</h1>
                    <ul className='hidden md:flex'>
                        <li className='cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li className='cursor-pointer'><Link to="collection" smooth={true} duration={500}>Collection</Link></li>
                        <li className='cursor-pointer'><Link to="print" smooth={true} duration={500}>Print Your Design</Link></li>
                        <li className='cursor-pointer'><Link to="reviews" smooth={true} duration={500}>Reviews</Link></li>
                        <li className='cursor-pointer'><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li className='cursor-pointer'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        <li className='cursor-pointer'><Link to="" smooth={true} duration={500}><FaShoppingCart /></Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='px-8 py-3 bg-slate-200 text-[#873e23] me-2 rounded-3xl'>
                        Sign In
                    </button>
                    <button className='px-8 py-3 bg-slate-200 text-[#873e23] rounded-3xl'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="collection" smooth={true} duration={500}>Collection</Link></li>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="print" smooth={true} duration={500}>Print Your Design</Link></li>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="reviews" smooth={true} duration={500}>Reviews</Link></li>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} duration={500}>About</Link></li>
                <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} duration={500}>Contact</Link></li>

                <div className='flex flex-col my-4'>
                    <button className='bg-[#873e23] text-slate-200 rounded-3xl px-8 py-3 mb-4'>Sign In</button>
                    <button className='bg-[#873e23] text-slate-200 rounded-3xl px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;