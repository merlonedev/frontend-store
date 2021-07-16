import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <Link to="/">Início</Link>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h3 data-testid="product-detail-price">{ price }</h3>
        <img src={ thumbnail } alt={ title } width="200px" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
        <form>
          <input type="email" />
          <textarea
            data-testid="product-detail-evaluation"
            name="avaliation"
            placeholder="Faça sua avaliação aqui"
            cols="40"
            rows="15"
          />
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
