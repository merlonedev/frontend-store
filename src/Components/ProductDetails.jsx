import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidUpdate() {
    this.getProducts();
  }

  async getProducts() {
    const { match: { params: { category_id, id } } } = this.props;
    const requisitionApi = await api.getProductsFromCategoryAndQuery(category_id, '');
    const details = requisitionApi.results.find((product) => product.id === id);

    this.setState({
      product: details,
    });
  }

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <section>
        <Link to="/">
          Voltar
        </Link>
        <Link to="/Components/Cart">
          Carrinho
        </Link>
        <h3 data-testid="product-detail-name">
          { title }
          -
          { price }
        </h3>
        <div>
          <img alt="imagem do produto" src={ thumbnail } />
        </div>
      </section>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category_id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
