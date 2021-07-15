import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';
import ProductDetails from './ProductDetails';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryid: '',
      categoryname: '',
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
    // console.log('getProducts chamada');
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
    this.getProducts(categoryid, searchText);
    // console.log(`getCategory:
    //   categoryid: ${categoryid}
    //   searchText: ${searchText}
    //   categoryname: ${categoryname}`);
  }

  getSearchText(searchText) {
    this.setState({
      searchText,
    });
    this.getProducts(undefined, searchText);
    // const { categoryid, categoryname } = this.state;
    // console.log(`getSearchText:
    //   categoryid: ${categoryid}
    //   searchText: ${searchText}
    //   categoryname: ${categoryname}`);
  }

  whichProduct(products, productId) {
    return products.find((product) => product.id === productId);
  }

  renderDetails(productid) {
    const selectedProduct = this.whichProduct(this.state.products, productid);
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
