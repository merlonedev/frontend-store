import React, { Component } from 'react';
import ShoppingCard from '../components/ShoppingCard';

class ShoppingCart extends Component {
  constructor() {
    super();

    if (localStorage.getItem('carrinho')) {
      const cart = JSON.parse(localStorage.getItem('carrinho'));
      this.state = {
        items: [cart],
      };
    } else {
      this.state = {
        items: [],
      };
    }
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        <ShoppingCard productList={ items } />
      </main>
    );
  }
}

export default ShoppingCart;
