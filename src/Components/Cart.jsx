import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsCart from './ProductsCart';

class Cart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      return (
        <div>
          <Link to="/" className="link2">
            Voltar ao inicio
          </Link>
          <p
            data-testid="shopping-cart-empty-message"
            className="infoText"
          >
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
    return (
      <>
        <Link to="/" className="link2">
          Voltar ao inicio
        </Link>
        <Link to="/Checkout" className="link2" data-testid="checkout-products">
          Finalizar compra
        </Link>
        <div className="cart">
          { cart.map((product) => (
            <ProductsCart
              key={ product.id }
              product={ product }
            />
          ))}
        </div>
      </>
    );
  }
}
export default Cart;
