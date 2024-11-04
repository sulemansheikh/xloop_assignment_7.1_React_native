// src/Images.jsx
import React from 'react';
import image1 from './Images/image1.png';
import image2 from './Images/image2.jpg';

const Images = () => {
    return (
        <div className="images">
            <img src={image1} alt="image1" />
            <img src={image2} alt="Image2" />
        </div>
    );
};

export default Images;
