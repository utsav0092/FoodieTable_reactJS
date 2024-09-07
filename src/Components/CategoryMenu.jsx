import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    
    const selectedCategory = useSelector((state) => state.category.category);

    const listUniqueCategories = () => {
        const uniqueCategories = [
            ...new Set(FoodData.map((food) => food.category)),
        ];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    return (
        <div className='mb-8 lg:mb-10 bg-yellow-400 p-10 shadow-lg'>
            <h3 className='text-2xl font-bold lg:text-center mb-4'>Find the best food</h3>
            <div className='my-2 flex lg:gap-4 gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden lg:justify-center'>
                <button
                    className={`duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white 
                            ${selectedCategory === "All" && "bg-green-600 text-white"}`}
                    onClick={() => dispatch(setCategory("All"))}>
                    All
                </button>

                {categories.map((category, index) => (
                    <button
                        className={`duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white 
                                  ${selectedCategory === category && "bg-green-600 text-white"}`}
                        key={index}
                        onClick={() => dispatch(setCategory(category))}>
                        {category}
                    </button>
                ))}
            </div>
        </div >
    );
}

export default CategoryMenu;

{/*
import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {

    // make the category dynamic instead of static.
    const [categories, setCategories] = useState([]);
    const listUniqueCategories = () => {
        const uniqueCategories = [
            ...new Set(FoodData.map((food) => food.category)),
        ];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
    };
    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);

    return (
        <div className='mb-8 lg:mb-10 bg-yellow-400 p-10 shadow-lg'>
            <h3 className='text-2xl font-bold lg:text-center mb-4'>Find the best food</h3>
            <div className='my-2 flex lg:gap-4 gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden lg:justify-center'>
                <button
                    className={`duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white 
                            ${selectedCategory === "All" && "bg-green-600 text-white"}`}
                    onClick={() => dispatch(setCategory())}>
                    All
                </button>

                {/*Static category menu*/}
{
    /*<button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>All</button>
    {/* <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Lunch    </button>
    <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Breakfast</button>
    <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Dinner   </button>
    <button className='duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white'>Snacks   </button> */
}

{/*Dynamically used category menu*/ }
// {
{/*categories.map((category, index) => {
                        return (
                            <button
                                className={`duration-200 px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white 
                                            ${selectedCategory === category && "bg-green-600 text-white"}`}
                                key={index}
                                onClick={() => dispatch(setCategory())}>
                                {category}
                            </button>
                        );
                    })
                }
            </div>
        </div >
    );
}

export default CategoryMenu*/}