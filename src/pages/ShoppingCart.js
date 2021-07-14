import React, { Component } from 'react';
import ShoppingCard from '../components/ShoppingCard';

class ShoppingCart extends Component {
  constructor() {
    super();

    if (localStorage.getItem('carrinho')) {
      const cart = JSON.parse(localStorage.getItem('carrinho'));
      this.state = {
        items: [...cart],
      };
    } else {
      this.state = {
        items: [],
      };
    }
  }

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <main>
        <ShoppingCard />
      </main>
    );
  }
}

export default ShoppingCart;
