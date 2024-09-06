import React from 'react';
import { IoFastFood } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
    return (
        <nav className='flex justify-between flex-col lg:flex-row px-6 py-3 cursor-pointer bg-green-800'>
            <div>
                <div className='flex items-center gap-2 lg:p-1 p-2 justify-center mb-2 lg:mb-0'>
                    <IoFastFood className='text-[31px] text-yellow-600' />
                    <h1 className='text-yellow-500 font-bold text-3xl'>Foodie<span className='text-amber-700 font-bold text-3xl'>Table</span></h1>
                </div>
                <h3 className='text-xl font-bold text-white mt-1'>{new Date().toUTCString().slice(0, 16)}</h3>
            </div>
            <div className='flex items-center lg:mt-2 mt-5 mb-2 lg:mb-5 relative'>
                <IoMdSearch className='text-4xl absolute right-2' />
                <input type="search" name='search' id='search' placeholder='Search here' autoComplete='off' className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] lg:focus:w-[26vw] duration-150 ease-linear border-none' />
            </div>
        </nav>
    );
}

export default Navbar