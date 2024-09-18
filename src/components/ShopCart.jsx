import React from 'react';
import shopCar from '../assets/shop.png'

function ShopCart() {
    return (
        <div className='shop-cart'
            style={{
                backgroundImage: `url(${shopCar})`,
                backgroundSize: '95%',
                backgroundRepeat: 'no-repeat',
                height: '60px',
                width: '60px',
                userSelect: 'none',
                cursor: 'pointer',
            }}
        ></div>
    )
}

export default ShopCart;