import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItems from '../Components/FoodItems';
import Footer from '../Components/Footer.jsx';
import Cart from '../Components/Cart.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
      {/* <Footer /> */}
    </>
  );
}

export default Home