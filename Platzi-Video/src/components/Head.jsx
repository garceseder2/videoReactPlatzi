import React from 'react';
import '../assets/styles/components/Header.scss';
import UserL from '../assets/static/UserImg.png';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
      alt='PlatziVideo'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={UserL} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;

