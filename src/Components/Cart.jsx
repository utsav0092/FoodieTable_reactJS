import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ItemCard } from './ItemCard';
import { useSelector } from 'react-redux';
import { IoIosCart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [activeCart, setActiveCart] = useState(false);

    const navigate = useNavigate();

    // ()=> setActiveCart(!activeCart) will also work
    const handleCartActive = () => {
        setActiveCart(!activeCart);
    }

    //Cart => Store:reducers{cart} => CartSlice:cart[] for understanding this path
    const cartItems = useSelector((state) => state.cart.cart);

    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

    const totalPrice = cartItems.reduce((totalpri, item) => totalpri + item.qty * item.price, 0);

    return (
        <>
            <div className={`fixed right-0 top-0 sm:w-[90vw] md:w-[70vw] lg:w-[23vw] w-full bg-white h-full overflow-y-auto ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-300 z-50 ease-linear`}>
                <div className='bg-yellow-400 shadow-xl flex justify-between items-center p-3 sm:p-4 md:p-5 sticky top-0 z-10'>
                    <span className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800'>My Orders</span>
                    <IoMdClose className='border-2 border-gray-600 font-bold p-1 text-xl sm:text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer duration-100 ease-linear flex-shrink-0' onClick={handleCartActive} />
                </div>

                {
                    cartItems.length > 0 ? cartItems.map((food) => {
                        return (
                            <ItemCard
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img}
                                qty={food.qty} />
                        );
                    }) :
                        <h2 className='pt-10 text-center text-base sm:text-lg md:text-xl font-bold text-gray-400 px-4'>Your cart is empty</h2>
                }

                <div className='p-3 sm:p-4 md:p-5 absolute bottom-0 bg-white w-full border-t border-gray-200'>
                    <h3 className='font-bold text-gray-800 text-sm sm:text-base'>Items :- {totalQty}</h3>
                    <h3 className='font-bold text-gray-800 text-sm sm:text-base'>Total :- ₹{totalPrice}</h3>
                    <hr className='mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6' />
                    {/* Path is added in App.jsx */}
                    <button className='bg-green-500 font-bold px-3 sm:px-4 text-white py-2 sm:py-2.5 rounded-lg hover:bg-green-600 duration-150 ease-linear hover:shadow-xl w-full' onClick={() => navigate("./success")}>Check out</button>
                </div>
            </div>

            <div className='bg-red-600 w-5 h-5 sm:w-6 sm:h-6 text-center flex justify-center items-center rounded-full text-white font-bold fixed bottom-14 sm:bottom-20 right-2 z-10 text-xs sm:text-sm'>{totalQty}
            </div>


            <IoIosCart className={`rounded-full fixed bg-white hover:shadow-xl text-5xl sm:text-6xl p-2 hover:bg-gray-300 duration-150 ease-linear bottom-8 sm:bottom-10 right-2 ${totalQty > 0 ? "border-green-600 border-2" : "border-2 border-red-600"} cursor-pointer`} onClick={handleCartActive} />
        </>
    );
}

export default Cart