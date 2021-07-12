import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ButtonCart from '../components/ButtonCart';
import ItemList from '../components/ItemList';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  stateSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <SearchBar change={ this.stateSearch } />
        <ButtonCart />
        <ItemList input={ search } />
      </div>
    );
  }
}

export default HomePage;
