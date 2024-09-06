import React from 'react';

const CategoryMenu = () => {
    return (
        <div className='mb-8 lg:mb-10 bg-yellow-400 p-10 shadow-lg'>
            <h3 className='text-2xl font-bold lg:text-center mb-4'>Find the best food</h3>
            <div className='my-2 flex lg:gap-4 gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden lg:justify-center'>
                <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>All      </button>
                <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Lunch    </button>
                <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Breakfast</button>
                <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Dinner   </button>
                <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Snacks   </button>
            </div>
        </div>
    );
}

export default CategoryMenu