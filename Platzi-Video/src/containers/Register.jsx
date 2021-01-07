/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/components/Login.scss';

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
          <a href='/'>Iniciar Sesion</a>
        </div>
      </form>

      <section className='register__continer--social-media'>
        <div>
          <img src='../assets/google-icon.png' alt='Google' />
          Registrarme con google
        </div>
        <div>
          <img src='../assets/twitter-icon.png' alt='Twitter' />
          Registrarme con Twitter
        </div>
      </section>
    </div>
  </section>
);

export default Register;
