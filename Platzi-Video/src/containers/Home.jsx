/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Item from '../components/Item';
import useInitialState from '../hooks/useinitialState';

const API = 'https://api.themoviedb.org/3/movie';
const APIKEY = '?api_key=fdefedc00262bc040d5a80e03bf3094a';
const categories = {
  popular: 'popular',
  now_playing: 'now_playing',
};
const Home = () => {
  const popularsMovies = useInitialState(API, APIKEY, categories.popular);
  console.log(popularsMovies.results);

  const nowPlayingMovies = useInitialState(API, APIKEY, categories.now_playing);
  console.log(nowPlayingMovies.results);
  return (
    <>
      <Search />
      {popularsMovies.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carrousel>
            {popularsMovies.results?.map((item) => <Item key={item.id} {...item} />)}
          </Carrousel>
        </Categories>
      )}

      <Categories title='Populares'>
        <Carrousel>
          {popularsMovies.results?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='En cartelera'>
        <Carrousel>
          {nowPlayingMovies.results?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

export default Home;
