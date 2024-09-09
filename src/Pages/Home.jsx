import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItems from '../Components/FoodItems';
import Cart from '../Components/Cart.jsx';
import CenterImg from '../Components/CenterImg.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <CenterImg />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
}

export default Home