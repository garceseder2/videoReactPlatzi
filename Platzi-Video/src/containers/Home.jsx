/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Item from '../components/Item';
//import useInitialState from '../hooks/useinitialState';

//const API = 'http://localhost:3000/initalState';
const Home = ({ mylist, trends, originals }) => {
  //const initalState = useInitialState(API);

  return (
    <>
      <Search />
      {mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carrousel>
            {mylist?.map((item) => <Item key={item.id} {...item} />)}
          </Carrousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carrousel>
          {trends?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Exclsivos'>
        <Carrousel>
          {originals?.map((item) => <Item key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
