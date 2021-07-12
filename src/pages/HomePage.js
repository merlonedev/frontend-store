import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ButtonCart from '../components/ButtonCart';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ButtonCart />
      </div>
    );
  }
}

export default HomePage;
