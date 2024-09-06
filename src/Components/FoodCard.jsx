import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ id, name, price, desc, img, rating }) => {

    const dispatch = useDispatch();

    return (
        <div className='font-bold hover:shadow-xl duration-150 ease-in-out w-[300px] bg-white p-5 flex-col gap-2 rounded-lg lg:ml-6'>
            <img
                src={img}
                alt={`Image of ${name}`}
                className='w-full h-[150px] hover:scale-110 cursor-pointer transition-all duration-150 ease-in-out mb-3'
            />
            <div className='text-sm flex justify-between mb-3'>
                <h2 className='text-xl'>{name}</h2>
                <span className='text-green-500 text-xl'>₹{price}</span>
            </div>
            <p className='text-sm font-normal text-gray-500'>{desc.slice(0, 100)}...</p>
            <div className='flex justify-between mt-3 mb-1'>
                <span className='flex justify-center items-center'>
                    <AiFillStar className='text-yellow-400 mr-1' />{rating}
                </span>
                <button onClick={() => {
                    dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
                }}
                    className='p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm duration-150 ease-linear'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default FoodCard;