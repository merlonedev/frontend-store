import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItemProduct extends Component {
  render() {
    const { product, handlePlusButton, handleMinusButton, clicks } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <li key={ title }>
        <div data-testid="product">
          <p data-testid="shopping-cart-product-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
          <h2 data-testid="shopping-cart-product-quantity">{ clicks }</h2>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ handlePlusButton }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ handleMinusButton }
          >
            -
          </button>
          <p>{ `R$${(price * clicks).toFixed(2)}` }</p>
        </div>
      </li>
    );
  }
}

// ajeitar pois ta aparecendo todos os botoes, e o valor total da compra

CartItemProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handlePlusButton: PropTypes.func.isRequired,
  handleMinusButton: PropTypes.func.isRequired,
  clicks: PropTypes.number.isRequired,
};
