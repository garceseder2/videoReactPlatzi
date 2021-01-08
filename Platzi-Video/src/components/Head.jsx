import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import UserL from '../assets/static/UserImg.png';

const Header = () => (

  <header className='header'>
    <Link to='/'>
      <img
        className='header__img'
        src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
        alt='PlatziVideo'
      />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={UserL} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to='/Register'>Registrarme</Link></li>
        <li><Link to='/Login'>Iniciar Sesion</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;

