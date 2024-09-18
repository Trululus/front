import React from 'react';
import MenuBoton from './MenuBoton'; 
import Logo from './Logo'
import ShopCart from './ShopCart'
import Search from './Search'
import InfoPerfil from './InfoPerfil';
import { Link } from 'react-router-dom';
import '../styles/Topbar.css'


const Topbar = () => {
  return (
  <div className='topbar'>
    <Logo />
    <nav className='nav-bar'>
        <ul>
            <li><Link to='/' className='active'>Home</Link></li>
            <li><Link to='/about-us' className='active'>About us</Link></li>
            <li><Link to='/drops' className='active'>Drops</Link></li>
            <li><Link to='/caps' className='active'>Caps</Link></li>
        </ul>
    </nav>
    <Search />
    <div className='options'>
      <ShopCart />  
      <Link to='/register'>
      <InfoPerfil /></Link>
      <MenuBoton />
      

    </div>
  </div>

  );
};

export default Topbar;