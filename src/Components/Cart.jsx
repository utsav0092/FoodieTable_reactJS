import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { ItemCard } from './ItemCard';

const Cart = () => {
    return (
        <>
            <div className='fixed right-0 top-0 lg:w-[23vw] w-full bg-white h-full'>
                <div className='flex justify-between p-5'>
                    <span className='text-2xl font-bold text-gray-800'>My Orders</span>
                    <IoMdClose className='border-2 border-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer duration-100 ease-linear' />
                </div>

                <ItemCard />

                <div className='p-5 absolute bottom-0'>
                    <hr className='mt-2 mb-2' />
                    <h3 className='font-bold text-gray-800'>Items :- 5</h3>
                    <h3 className='font-bold text-gray-800'>Total Amount :- ₹220</h3>
                    <hr className='mt-4 mb-6' />
                    <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg hover:bg-green-600 duration-150 ease-linear hover:shadow-xl w-[87vw] lg:w-[21vw]'>Check out</button>
                </div>
            </div>
        </>
    );
}

export default Cart