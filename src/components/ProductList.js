import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';
import ProductDetails from './ProductDetails';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
      productId: '',
      toggleDetails: false,
    };
    this.getProducts = this.getProducts.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getSearchText = this.getSearchText.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  async getProducts(categoryid, searchText) {
    const products = await API.getProductsFromCategoryAndQuery(categoryid, searchText);
    this.setState({
      products: products.results,
    });
  }

  getCategory(categoryid) {
    const { searchText } = this.state;
    this.getProducts(categoryid, searchText);
  }

  getSearchText(searchText) {
    this.setState({
      searchText,
    });
    this.getProducts(undefined, searchText);
  }

  whichProduct(products, productId) {
    return products.find((product) => product.id === productId);
  }

  renderDetails(productid) {
    const { products } = this.state;
    const selectedProduct = this.whichProduct(products, productid);
    this.setState({
      productId: selectedProduct,
      toggleDetails: true,
    });
  }

  render() {
    const { products, searchText, toggleDetails, productId } = this.state;
    if (toggleDetails) {
      return (<ProductDetails
        product={ productId }
        callBack2={ () => this.setState({
          toggleDetails: false,
        }) }
      />);
    }
    return (
      <>
        <SearchBar callBack={ this.getSearchText } />
        <Category callBack={ this.getCategory } />
        {products
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              searchText={ searchText }
              callBack={ this.renderDetails }
            />))}
      </>
    );
  }
}

export default ProductList;
