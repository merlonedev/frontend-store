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
      querySearch: '',
      categorieSearch: '',
    };
  }

  stateSearch = (value) => {
    this.setState({ querySearch: value });
  };

  categorieState = (value) => {
    this.setState({ categorieSearch: value });
  }

  render() {
    const { querySearch, categorieSearch } = this.state;
    return (
      <div>
        <SearchBar change={ this.stateSearch } />
        <ButtonCart />
        <CategorieList onClick={ this.categorieState } />
        {(querySearch === '' && categorieSearch === '')
          ? <Loading />
          : <ItemList input={ querySearch } input2={ categorieSearch } />}
      </div>
    );
  }
}

export default HomePage;
