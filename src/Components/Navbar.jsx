import React from 'react';
import { IoFastFood } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className='flex justify-between flex-col lg:flex-row px-3 sm:px-6 py-2 sm:py-3 cursor-pointer bg-green-800 sticky top-0 shadow-xl gap-3 sm:gap-0'>
            <div className='w-full lg:w-auto'>
                <div className='flex items-center gap-1 sm:gap-2 lg:p-1 p-1 sm:p-2 justify-center mb-1 sm:mb-2 lg:mb-0'>
                    <IoFastFood className='text-2xl sm:text-3xl lg:text-[31px] text-yellow-600 flex-shrink-0' />
                    <h1 className='text-yellow-500 font-bold text-lg sm:text-2xl lg:text-3xl'>Foodie<span className='text-amber-700 font-bold text-lg sm:text-2xl lg:text-3xl'>Table</span></h1>
                </div>
                <h3 className='text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white mt-0 sm:mt-1 text-center lg:text-left'>{new Date().toUTCString().slice(0, 16)}</h3>
            </div>
            <div className='flex items-center lg:mt-2 mt-2 sm:mt-5 mb-1 sm:mb-2 lg:mb-5 relative flex-grow lg:flex-grow-0'>
                <input type="search" name='search' id='search' placeholder='Search here' autoComplete='off' className='p-2 sm:p-3 border border-gray-400 text-xs sm:text-sm rounded-lg outline-none w-full sm:w-auto lg:w-[25vw] lg:focus:w-[26vw] duration-150 ease-linear'
                    onChange={(e) => dispatch(setSearch(e.target.value))} />

                <IoMdSearch className='text-2xl sm:text-3xl lg:text-4xl absolute right-1 sm:right-2 text-gray-300 pointer-events-none' />
            </div>
        </nav>
    );
}

export default Navbar