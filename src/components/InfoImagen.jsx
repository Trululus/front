import React from 'react';
import '../styles/InfoImagen.css'
import logo from '../assets/logo.png'

const InfoImagen = () => {
    return (
        <div className='info-img' style={{backgroundImage: `url(${logo})`}}>
        </div>
    );
};

export default InfoImagen;