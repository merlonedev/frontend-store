import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ButtonCart from '../components/ButtonCart';
import CategorieList from '../components/CategorieList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ButtonCart />
        <CategorieList />
      </div>
    );
  }
}

export default HomePage;
