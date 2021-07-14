import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryid: '',
      categoryname: '',
      searchText: '',
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getSearchText = this.getSearchText.bind(this);
  }

  async getProducts(categoryid, searchText) {
    const products = await API.getProductsFromCategoryAndQuery(categoryid, searchText);
    this.setState({
      products: products.results,
    });
  }

  getCategory(categoryid, categoryname) {
    this.setState({
      categoryid,
      categoryname,
    });
    const { searchText } = this.state;
    console.log(`getCategory:
      categoryid: ${categoryid}
      searchText: ${searchText}
      categoryname: ${categoryname}`);
    this.getProducts(categoryid, searchText);
  }

  getSearchText(searchText) {
    this.setState({
      searchText,
    });
    const { categoryid, categoryname } = this.state;
    console.log(`getSearchText:
      categoryid: ${categoryid}
      searchText: ${searchText}
      categoryname: ${categoryname}`);
    this.getProducts(undefined, searchText);
  }

  render() {
    const { products, searchText } = this.state;
    return (
      <main>
        <SearchBar callBack={ this.getSearchText } />
        <Category callBack={ this.getCategory } />
        {products
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              searchText={ searchText }
            />))}
      </main>
    );
  }
}

export default ProductList;
