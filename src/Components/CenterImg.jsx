import React from 'react';
import centerImg from '../assets/centerImg.jpg';

const CenterImg = () => {
    return (
        <div>
            <img src={centerImg} alt="Image banner" className='h-[60vh] w-full' />
        </div>
    );
}

export default CenterImg