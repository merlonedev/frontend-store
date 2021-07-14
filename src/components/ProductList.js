import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xablau: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts(categorieId = "", searchText = "") {
      console.log(searchText);
      const products = await API.getProductsFromCategoryAndQuery( categorieId,searchText);
      console.log(products.results)  
      this.setState({
        xablau: products.results,
      });
      console.log(this.state.xablau);
  }

  render() {
    const { xablau: products } = this.state;
        return (
      <main>
        <SearchBar callBack={ this.getProducts } />
        <Category callBack={ this.getProducts }/>
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
