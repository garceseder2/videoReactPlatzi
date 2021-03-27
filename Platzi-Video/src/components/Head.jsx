import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logOutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import UserL from '../assets/static/UserImg.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogOut = () => {
    props.logOutRequest({});
  };
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
          {hasUser ?
            <li><Link to='/Register'>Cuenta</Link></li> :
            <li><Link to='/Register'>Registrarme</Link></li>}

          {hasUser ?
            <li><a href='#LogOut' onClick={handleLogOut}>Cerrar Sesión</a></li> :
            <li><Link to='/Login'>Iniciar Sesion</Link></li>}

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

const mapDispatchToProps = {

  logOutRequest,

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

