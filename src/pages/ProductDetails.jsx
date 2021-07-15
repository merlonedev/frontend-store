import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      productDetail: {},
    };
    this.searchProduct = this.searchProduct.bind(this);
  }

  componentDidMount() {
    this.searchProduct();
  }

  async searchProduct() {
    const { match: { params: { id, categoryId, title } } } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    const findProduct = results.find((result) => result.id === id);
    this.setState({ productDetail: findProduct });
  }

  render() {
    const { productDetail: { title, price, thumbnail } } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h1>{price}</h1>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
