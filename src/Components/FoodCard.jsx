import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {

    const dispatch = useDispatch();

    return (
        <div className='font-bold hover:shadow-2xl duration-150 ease-in-out w-[calc(100%-1.5rem)] sm:w-[250px] md:w-[280px] lg:w-[300px] max-w-[300px] bg-white p-3 sm:p-4 md:p-5 flex flex-col gap-2 rounded-lg shadow-md'>
            <img
                src={img}
                alt={`Image of ${name}`}
                className='w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[150px] hover:scale-110 cursor-pointer transition-all duration-150 ease-in-out mb-1.5 sm:mb-2 md:mb-3 rounded object-cover'
            />
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1.5 sm:mb-2 md:mb-3 gap-1'>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2 flex-1'>{name}</h2>
                <span className='text-green-500 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap font-bold flex-shrink-0'>₹{price}</span>
            </div>
            <p className='text-xs sm:text-xs md:text-sm font-normal text-gray-500 line-clamp-2 leading-tight'>{desc.slice(0, 100)}...</p>
            <div className='flex justify-between items-center mt-1.5 sm:mt-2 md:mt-3 mb-0 gap-2'>
                <span className='flex justify-center items-center text-xs sm:text-xs md:text-sm whitespace-nowrap'>
                    <AiFillStar className='text-yellow-400 mr-1 text-sm sm:text-sm md:text-base' />{rating}
                </span>
                <button onClick={() => {
                    dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
                    handleToast(name);
                }}
                    className='p-1.5 sm:p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-xs sm:text-xs md:text-sm duration-150 ease-linear flex-1 sm:flex-shrink-0 font-bold'>
                    Add
                </button>
            </div>
        </div>
    );
}

export default FoodCard;