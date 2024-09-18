import React from 'react';
import menu from '../assets/menu.png';

const MenuBoton = () => {
  return (
    <div className='menu-boton'
      style={{
        backgroundImage: `url(${menu})`,
        backgroundSize: '95%',
        backgroundRepeat: 'no-repeat',
        height: '60px',
        width: '60px',
        userSelect: 'none',
        cursor: 'pointer',
      }}
    ></div>);
};

export default MenuBoton;