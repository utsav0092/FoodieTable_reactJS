import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

export const ItemCard = () => {
    return (
        <>
            <div className='p-5 flex gap-2 hover:shadow-lg duration-150 ease-linear rounded-md m-2 hover:bg-gray-100'>
                <MdDelete className='text-red-600 text-xl absolute right-6 cursor-pointer' />
                <img src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png" alt="Cart Image" className='w-[50px] h-[50px]' />
                <div>
                    <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
                    <div className='flex justify-between gap-4'>
                        <span className='text-green-500 font-bold'>₹220</span>
                        <div className='flex gap-1.5 items-center absolute right-7'>
                            <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-150 ease-linear cursor-pointer' />
                            <span className='font-bold'>1</span>
                            <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-150 ease-linear cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
