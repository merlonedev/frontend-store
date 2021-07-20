import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddRemoveCart from '../Components/AddRemoveCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.empyCart = this.empyCart.bind(this);
  }

  empyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { shoppingCart, removeProduct } = this.props;
    if (!shoppingCart.length) return this.empyCart();

    return (
      <div>
        {shoppingCart.map((products) => (
          <AddRemoveCart
            products={ products }
            key={ products.id }
            removeProduct={ removeProduct }
          />))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  shoppingCart: PropTypes.arrayOf(Object).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ShoppingCart;
