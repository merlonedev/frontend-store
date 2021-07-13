import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ButtonCart from '../components/ButtonCart';
import ItemList from '../components/ItemList';
import CategorieList from '../components/CategorieList';
import Loading from '../components/Loading';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  stateSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <SearchBar change={ this.stateSearch } onchange={ this.checkStateChange } />
        <ButtonCart />
        {(search === '') ? <Loading /> : <ItemList input={ search } />}
        <CategorieList />
      </div>
    );
  }
}

export default HomePage;
