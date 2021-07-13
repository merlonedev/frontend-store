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
    return (
      <>
        <h1 data-testid="product-detail-name">{details.title}</h1>
        <img src={ details.thumbnail } alt={ details.title } />
        <p>{details.price}</p>
        <Link
          to="/ShoppingCart"
          data-testid="product-detail-link"
        >
          Carrinho de Compras
        </Link>
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
};

export default ProductDetails;
