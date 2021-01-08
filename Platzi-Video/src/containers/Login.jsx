/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleImage from '../assets/static/google-icon.png';
import TwiterImage from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <div className='login__continer'>
      <h2>Inicia sesion</h2>
      <form action='' className='login__continer--form'>
        <input className='input' type='input' placeholder='Correo' />
        <input className='input' type='password' placeholder='contraseña' />
        <button className='button' type='button'>Iniciar Sesion</button>
        <div className='login__continer--rememnber-me'>
          <label>
            <input type='checkbox' id='cbox' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>

        </div>
      </form>
      <section className='login__continer--social-media'>
        <div>
          <img src={GoogleImage} alt='Google' />
          Inicia sesion con google
        </div>
        <div>
          <img src={TwiterImage} alt='Twitter' />
          Inicia sesion con Twitter
        </div>
      </section>
      <p className='login__continer--register'>
        No tienes cuenta
        {' '}
        <Link to='/Register'>Registrate</Link>
      </p>

    </div>
  </section>
);

export default Login;
