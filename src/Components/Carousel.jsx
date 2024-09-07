// // Carousel.jsx
// import React, { useState } from 'react';

// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + images.length) % images.length
//         );
//     };

//     return (
//         <div className='relative w-full max-w-[600px] mx-auto overflow-hidden'>
//             <button
//                 className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700'
//                 onClick={handlePrev}
//             >
//                 &#9664;
//             </button>
//             <div className='flex justify-center items-center'>
//                 <img
//                     src={images[currentIndex]}
//                     alt={`Slide ${currentIndex}`}
//                     className='w-full h-auto object-cover'
//                 />
//             </div>
//             <button
//                 className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700'
//                 onClick={handleNext}
//             >
//                 &#9654;
//             </button>
//         </div>
//     );
// };

// export default Carousel;
// For APP.JSX

// App.jsx
// import React from 'react';
// import Carousel from './Carousel';

// const App = () => {
//     const images = [
//         'https://via.placeholder.com/600x300?text=Image+1',
//         'https://via.placeholder.com/600x300?text=Image+2',
//         'https://via.placeholder.com/600x300?text=Image+3',
//         'https://via.placeholder.com/600x300?text=Image+4'
//     ];

//     return (
//         <div className='p-4'>
//             <h1 className='text-2xl font-bold mb-4'>Image Carousel</h1>
//             <Carousel images={images} />
//         </div>
//     );
// };

// export default App;