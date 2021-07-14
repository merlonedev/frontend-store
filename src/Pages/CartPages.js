import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItemProduct from '../Components/CartItemProduct';

class CartPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        ...this.getItens(),
      ],
    };

    this.getItens = this.getItens.bind(this);
    this.renderCartItens = this.renderCartItens.bind(this);
  }

  getItens() {
    const keys = Object.keys(localStorage);
    return keys.map((key) => JSON.parse(localStorage.getItem(key)));
  }

  renderCartItens() {
    const { products } = this.state;
    return (
      products.length > 0
        ? products.map((product) => (
          <CartItemProduct
            key={ product.id }
            product={ product }
          />
        ))
        : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
  }

  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { this.renderCartItens() }
      </div>
    );
  }
}

CartPages.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default CartPages;
