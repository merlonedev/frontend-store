import React, { Component } from 'react';
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
    const array = keys.filter((key) => key.includes('MLB'));
    return array.map((key) => JSON.parse(localStorage.getItem(key)));
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
        { this.renderCartItens() }
      </div>
    );
  }
}

export default CartPages;
