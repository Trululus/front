import React from 'react';
import profile from '../assets/profile.jpg'

const InfoPerfil = () => {
    return (
        <div className='img-perfil'
            style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                height: '52px',
                width: '52px',
                userSelect: 'none',
                cursor: 'pointer',
            }}
        ></div>
    )
}

export default InfoPerfil;