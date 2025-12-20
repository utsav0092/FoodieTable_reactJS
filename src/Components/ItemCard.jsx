import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromCart, decrementQty, incerementQty } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

export const ItemCard = ({ id, name, price, img, qty }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='p-2 sm:p-3 flex gap-2 hover:shadow-md duration-150 ease-linear rounded-md mx-2 sm:mx-3 mt-1 sm:mt-2 mb-1 sm:mb-2 hover:bg-gray-100 relative pr-10 sm:pr-12'>
                <MdDelete
                    onClick={() => {
                        dispatch(removeFromCart({ id, name, price, qty, img }));
                        toast(`${name} Removed!`, {
                            icon: "👍",
                        });
                    }}
                    className='text-red-600 hover:text-red-800 duration-150 ease-linear text-lg sm:text-xl absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 cursor-pointer flex-shrink-0'
                />
                <img src={img} alt="Cart item image" className='w-10 h-10 sm:w-12 sm:h-12 rounded object-cover flex-shrink-0' />
                <div className='flex-1 min-w-0'>
                    <h2 className='font-bold text-gray-800 text-xs sm:text-sm line-clamp-2'>{name}</h2>
                    <div className='flex justify-between items-center gap-2 mt-1'>
                        <span className='text-green-500 font-bold text-xs sm:text-sm flex-shrink-0'>₹{price}</span>
                        <div className='flex gap-1 items-center flex-shrink-0'>
                            <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded p-0.5 text-sm sm:text-base transition-all duration-150 ease-linear cursor-pointer flex-shrink-0'
                                onClick={() =>
                                    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} />
                            <span className='font-bold text-xs sm:text-sm w-5 text-center flex-shrink-0'>{qty}</span>
                            <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded p-0.5 text-sm sm:text-base transition-all duration-150 ease-linear cursor-pointer flex-shrink-0'
                                onClick={() =>
                                    qty >= 1 ? dispatch(incerementQty({ id })) : (qty = 0)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
