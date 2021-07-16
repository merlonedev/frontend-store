import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as fetchApi from '../services/api';
import Form from './Form';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = { details: {} };
    this.apiDetails = this.apiDetails.bind(this);
  }

  componentDidMount() {
    this.apiDetails();
  }

  apiDetails() {
    const { match: { params: { id, title } } } = this.props;
    fetchApi.getProductsFromCategoryAndQuery(id, title)
      .then((response) => this.setState({ details: response.results[0] }));
  }

  render() {
    const { details } = this.state;
    const { cartAdd } = this.props;
    return (
      <>
        <h1 data-testid="product-detail-name">{details.title}</h1>
        <img src={ details.thumbnail } alt={ details.title } />
        <p>{details.price}</p>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => cartAdd(details) }
        >
          Adicionar ao Carrinho
        </button>
        <Form />
      </>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cartAdd: PropTypes.func.isRequired,
};

export default ProductDetails;
