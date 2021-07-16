import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartIcon from '../Icons/CartIcon';
import Evaluation from '../components/Evaluation';

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
    const { productDetail: { title, price, thumbnail, id } } = this.state;
    let todosElementos = [];
    const InfoONclick = { title, price, id };
    return (
      <div>
        <CartIcon />
        <h1 data-testid="product-detail-name">{title}</h1>
        <h1>{price}</h1>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            todosElementos = [...todosElementos, InfoONclick];
            return sessionStorage
              .setItem('shopItens', JSON.stringify(todosElementos));
          } }
        >
          Add to Cart
        </button>
        <div>
          <Evaluation />
        </div>
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
