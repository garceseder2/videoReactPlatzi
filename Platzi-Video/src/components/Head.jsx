import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import UserL from '../assets/static/UserImg.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
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
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={UserL} alt='User' />}

          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/Register'>Registrarme</Link></li>
          <li><Link to='/Login'>Iniciar Sesion</Link></li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);

