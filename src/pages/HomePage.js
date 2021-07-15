import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ButtonCart from '../components/ButtonCart';
import ItemList from '../components/ItemList';
import CategorieList from '../components/CategorieList';

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
  }

  categorieState = (value) => {
    this.setState({ categorieSearch: value });
  }

  render() {
    const { querySearch, categorieSearch } = this.state;
    return (
      <div className="home-page">
        <SearchBar change={ this.stateSearch } />
        <ButtonCart />
        <div className="welcome-page">
          <CategorieList onClick={ this.categorieState } />
          {(querySearch === '' && categorieSearch === '')
            ? <p className="text">Nenhum produto foi encontrado</p>
            : <ItemList input={ querySearch } input2={ categorieSearch } />}
        </div>
      </div>
    );
  }
}

export default HomePage;
