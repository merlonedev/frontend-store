import React, { Component } from 'react';
import Search from '../components/Search';
import ProductsList from '../components/ProductList';

export default class ProductPage extends Component {
  render() {
    return (
      <>
        <Search />
        <ProductsList />
      </>
    );
  }
}
