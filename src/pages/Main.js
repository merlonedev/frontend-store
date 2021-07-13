import React, { Component } from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Main extends Component {
  render() {
    return (
      <main>
        <ProductList />
        <Categories />
      </main>
    );
  }
}

export default Main;
