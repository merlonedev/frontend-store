import React, { Component } from 'react';
import Search from '../components/Search';
import ProductsList from '../components/ProductList';
import CategoriesBar from '../components/CategoriesSideBar';

export default class ProductPage extends Component {
  render() {
    return (
      <>
        <Search />
        <ProductsList />
        <CategoriesBar />
      </>
    );
  }
}
