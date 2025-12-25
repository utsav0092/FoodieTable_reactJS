import React from 'react';
import centerImg from '../assets/centerImg.jpg';

const CenterImg = () => {
    return (
        <div className='w-full overflow-hidden'>
            <img 
                src={centerImg} 
                alt="Image banner" 
                className='h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full object-cover object-center' 
            />
        </div>
    );
}

export default CenterImg