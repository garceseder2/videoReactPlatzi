/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Item.scss';
import Play from '../assets/static/baseline_play_circle_white_18dp.png';
import Plus from '../assets/static/baseline_add_circle_white_18dp.png';

const Item = ({ poster_path, title, release_date }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img src={Play} alt='' />
        <img src={Plus} alt='' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${release_date}`}</p>
    </div>
  </div>
);

Item.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.number,
};

export default Item;
