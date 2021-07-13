import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

class ButtonToCart extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <button type="button">
            <Link
              data-testid="shopping-cart-button"
              to="/shoppingcart"
            >
              CARRINHO DE COMPRAS
            </Link>
          </button>
        </Router>
      </BrowserRouter>
    );
  }
}

export default ButtonToCart;
