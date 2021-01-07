/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Head';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Item from '../components/Item';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useinitialState';

const API = 'http://localhost:3000/initalState';
const Home = () => {
  const initalState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initalState.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carrousel>
            <Item />
          </Carrousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carrousel>
          {initalState.trends?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Exclsivos'>
        <Carrousel>
          {initalState.originals?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default Home;
