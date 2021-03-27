/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import GoogleImage from '../assets/static/google-icon.png';
import TwiterImage from '../assets/static/twitter-icon.png';

const Register = () => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <div className='register__continer'>
        <h2>Inicia sesion</h2>
        <form action='' className='register__continer--form' onSubmit={handleSubmit}>
          <input name='name' className='input' type='text' placeholder='Nombre' onChange={handleInput} />
          <input name='email' className='input' type='email' placeholder='Correo' onChange={handleInput} />
          <input name='password' className='input' type='password' placeholder='contraseña' onChange={handleInput} />

          <button className='button' type='submit'>Registrarme</button>
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
};

export default Register;
