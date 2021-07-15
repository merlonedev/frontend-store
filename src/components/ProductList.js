import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts(categorieId = '', searchText = '') {
    const products = await API.getProductsFromCategoryAndQuery(categorieId, searchText);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        <SearchBar callBack={ this.getProducts } />
        <Category callBack={ this.getProducts } />
        {products
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />))}
      </main>
    );
  }
}

export default ProductList;
