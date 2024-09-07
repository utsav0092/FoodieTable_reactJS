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
            <div className='p-3 flex gap-2 hover:shadow-lg duration-150 ease-linear rounded-md mr-2 ml-2 mt-1 mb-1 hover:bg-gray-100'>
                <MdDelete
                    onClick={() => {
                        dispatch(removeFromCart({ id, name, price, qty, img }));
                        toast(`${name} Removed!`, {
                            icon: "👍",
                        });
                    }}
                    className='text-red-600 hover:text-2xl duration-150 ease-linear text-xl absolute right-6 cursor-pointer'
                />
                <img src={img} alt="Cart item image" className='w-[50px] h-[50px]' />
                <div>
                    <h2 className='font-bold text-gray-800'>{name}</h2>
                    <div className='flex justify-between gap-4'>
                        <span className='text-green-500 font-bold'>₹{price}</span>
                        <div className='flex gap-1.5 items-center absolute right-7'>
                            <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-150 ease-linear cursor-pointer'
                                onClick={() =>
                                    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} />
                            <span className='font-bold'>{qty}</span>
                            <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-150 ease-linear cursor-pointer'
                                onClick={() =>
                                    qty >= 1 ? dispatch(incerementQty({ id })) : (qty = 0)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
