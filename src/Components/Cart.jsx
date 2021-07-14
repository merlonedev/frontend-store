import React, { Component } from 'react';
import ProductsCart from './ProductsCart';

class Cart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      return (
        <div data-testid="shopping-cart-empty-message" className="infoText">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <>
        { cart.map((product) => (
          <ProductsCart
            key={ product.id }
            product={ product }
          />
        ))}
      </>
    );
  }
}
export default Cart;
