import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';

class CartPage extends Component {
  totalValue() {
    const productFromDetail = JSON.parse(localStorage.getItem('productList'));
    if (!productFromDetail) return 0;
    const total = productFromDetail.reduce((acc, { price }) => acc + price, 0);
    return total;
  }

  render() {
    const productList = JSON.parse(localStorage.getItem('productList'));
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <h1>SHOPPING CART</h1>
        {
          (!productList)
            ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            : <CartItems totalPrice={ this.totalValue() } productList={ productList } />
        }
        <button
          type="button"
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default CartPage;
