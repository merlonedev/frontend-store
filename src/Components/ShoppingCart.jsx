import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">{cart.length}</p>
        {cart.map(({ title, thumbnail, price }) => (
          <div className="card" key="title">
            <p
              className="card-title"
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <img className="card-image" src={ thumbnail } alt={ title } />
            <p>{`R$: ${price}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(Array).isRequired,
};

export default ShoppingCart;
