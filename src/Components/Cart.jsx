import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ItemCard } from './ItemCard';
import { useSelector } from 'react-redux';
import { IoIosCart } from "react-icons/io";

const Cart = () => {

    const [activeCart, setActiveCart] = useState(false);

    // ()=> setActiveCart(!activeCart)
    const handleCartActive = () => {
        setActiveCart(!activeCart);
    }

    //Cart => Store:reducers{cart} => CartSlice:cart[] for understanding this path
    const cartItems = useSelector((state) => state.cart.cart);

    return (
        <>
            <div className={`fixed right-0 top-0 lg:w-[23vw] w-full bg-white h-full ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-300 z-50 ease-linear`}>
                <div className='bg-yellow-400 shadow-xl flex justify-between p-5'>
                    <span className='text-2xl font-bold text-gray-800'>My Orders</span>
                    <IoMdClose className='border-2 border-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer duration-100 ease-linear' onClick={handleCartActive} />
                </div>

                {
                    cartItems.map((food) => {
                        return (
                            <ItemCard
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img}
                                qty={food.qty} />
                        );
                    })
                }

                <div className='p-5 absolute bottom-0 bg-white'>
                    <h3 className='font-bold text-gray-800'>Items :- 5</h3>
                    <h3 className='font-bold text-gray-800'>Total Amount :- ₹220</h3>
                    <hr className='mt-4 mb-6' />
                    <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg hover:bg-green-600 duration-150 ease-linear hover:shadow-xl w-[87vw] lg:w-[21vw]'>Check out</button>
                </div>
            </div>
            <IoIosCart className='rounded-full fixed bg-white shadow-xl text-5xl p-2 hover:bg-gray-400 duration-150 ease-linear bottom-10 right-2' onClick={handleCartActive} />
        </>
    );
}

export default Cart