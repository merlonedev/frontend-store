import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartList from '../components/CartList';
import { getCartItems } from '../services/localStorage';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };

    this.renderEmptyCart = this.renderEmptyCart.bind(this);
    this.renderCart = this.renderCart.bind(this);
    this.loadCartItems = this.loadCartItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cartItems = getCartItems();
    this.setState((prevState) => ({
      cart: [...prevState.cart, ...cartItems],
    }));
  }

  deleteItem(itemId) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const newCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify([...newCart]));
    this.setState({
      cart: newCart,
    });
  }

  renderCart() {
    const { cart } = this.state;
    return (
      <div>
        <CartList cart={ cart } deleteItem={ this.deleteItem } />
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout', state: cart } }
        >
          Checkout Products
        </Link>
      </div>
    );
  }

  renderEmptyCart() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        { cart.length === 0 ? this.renderEmptyCart() : this.renderCart() }
      </div>
    );
  }
}
