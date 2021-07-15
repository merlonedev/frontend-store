import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ShoppingCart extends Component {
  render() {
    const { list } = this.props;
    list.
      reduce((acc, cur) => {
        const array = list.filter( ({ id })=> cur.id === id);
      })
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        {
          list
            .map((product) => (
              const array = list
                .filter(({ id }) => {
                  id === id;
                })
            ))
        }
      </div>
    );
  }
}

export default ShoppingCart;
