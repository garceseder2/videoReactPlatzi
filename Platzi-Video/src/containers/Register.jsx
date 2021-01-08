/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import GoogleImage from '../assets/static/google-icon.png';
import TwiterImage from '../assets/static/twitter-icon.png';

const Register = () => (
  <section className='register'>
    <div className='register__continer'>
      <h2>Inicia sesion</h2>
      <form action='/' className='register__continer--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='email' placeholder='Correo' />
        <input className='input' type='password' placeholder='contraseña' />
        <input className='input' type='password' placeholder='Confirma contraseña' />
        <button className='button' type='button'>Registrarme</button>
        <div className='register__continer--rememnber-me'>
          <Link to='/Login'>Iniciar Sesion</Link>
        </div>
      </form>

      <section className='register__continer--social-media'>
        <div>
          <img src={GoogleImage} alt='Google' />
          Registrarme con google
        </div>
        <div>
          <img src={TwiterImage} alt='Twitter' />
          Registrarme con Twitter
        </div>
      </section>
    </div>
  </section>
);

export default Register;
