import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCarIcone from './ShoppingCardIcone';

class ShoppingCarLink extends Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCarIcone />
        </Link>
      </div>
    );
  }
}

export default ShoppingCarLink;
