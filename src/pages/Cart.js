import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCart';
import CartList from '../components/CartList';

class Cart extends Component {
  render() {
    return (
      <div>
        <CartList />
        {
          true && <EmptyCart />
        }
      </div>

    );
  }
}

export default Cart;
