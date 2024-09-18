import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import logoimg from './assets/logo.png';
import mockup from './assets/mokcuphat.jpg';
import hatRigth from './assets/gorra_lado.jpg';
import hatFront from './assets/gorra_logo.jpg';
import '../src/styles/Home.css';

const Home = () => {
  const [gorras, setGorras] = useState([hatRigth, mockup, hatFront]);
  const [currentIndex, setCurrentIndex] = useState(1); // Índice de la gorra actual en el contenedor grande

  useEffect(() => {
    // Función para rotar la imagen
    const rotateImages = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gorras.length); // Mueve al siguiente índice
    };

    // Configura el intervalo para rotar la imagen cada 3 segundos
    const intervalId = setInterval(rotateImages, 4000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [gorras.length]);

  const handleClick = (clickedIndex) => {
    let newGorras = [...gorras];
    // Intercambiar el contenido del índice clickeado con el índice 1
    [newGorras[1], newGorras[clickedIndex]] = [newGorras[clickedIndex], newGorras[1]];
    setGorras(newGorras); // Actualizamos la lista de gorras
  };

  return (
    <div className='home'>
      <Topbar />
      <div className='info-cont-top'>
        <div className='info-cont'>
          {/* Contenedor grande que muestra la gorra en la posición 1 */}
          <div
            className={`img-cont ${gorras[1] === hatRigth ? "img-cont-rigth" : ""}`}
            style={{
              backgroundImage: `url(${gorras[currentIndex]})`, // Mostrar gorra en la posición actual
              transition: 'all 0.6s ease-in-out', // Animación de transición
            }}
          ></div>
        </div>

        {/* Contenedores pequeños */}
        <div className='info-cont-small'>
          {/* Imagen pequeña 1 (índice 0) */}
          <div
            className='info-img'
            style={{
              backgroundImage: `url(${gorras[0]})`, // Mostrar la gorra en la posición 0
              backgroundSize: '95%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '90%',
              width: '90%',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(0)} // Al hacer clic, intercambiar con la posición 1
          ></div>
          {/* Imagen pequeña 2 (índice 2) */}
          <div
            className='info-img-hat'
            style={{
              backgroundImage: `url(${gorras[2]})`, // Mostrar la gorra en la posición 2
              backgroundSize: '95%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '90%',
              width: '90%',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(2)} // Al hacer clic, intercambiar con la posición 1
          ></div>
        </div>
      </div>

      {/* Sección destacada */}
      <h1 id='text-most'>LO MAS DESTACADO DE JS HATS</h1>
      <div className='cont-most'>
        <div
          className='img-most-cont'
          style={{
            backgroundImage: `url(${logoimg})`,
            backgroundSize: '85%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '85%',
            width: '85%',
            userSelect: 'none',
            margin: '2%',
            marginTop: '4%',
            padding: '1%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <h3 id='text-most-title'>Gorra Bacana</h3>
        <p id='water-mark-text'>JSHats</p>
        <p id='price-text'>$100</p>
      </div>
    </div>
  );
};

export default Home;
