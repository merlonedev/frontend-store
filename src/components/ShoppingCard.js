import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCardIcon from './ShoppingCardIcon';

class ShoppingCard extends Component {
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

    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.addItemFromCart = this.addItemFromCart.bind(this);
  }

  removeItemFromCart(id) {
    const currentCart = JSON.parse(localStorage.getItem('carrinho'));
    currentCart.map((item) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity -= 1;
        return item;
      }
      return item;
    });
    localStorage.setItem('carrinho', JSON.stringify(currentCart));
    this.setState({ items: [...currentCart] });
  }

  addItemFromCart(id) {
    const currentCart = JSON.parse(localStorage.getItem('carrinho'));
    currentCart.map((item) => {
      if (item.id === id && item.quantity < item.available_quantity) {
        item.quantity += 1;
        return item;
      }
      if (item.quantity === item.available_quantity) {
        this.disable = true;
      }
      return item;
    });
    localStorage.setItem('carrinho', JSON.stringify(currentCart));
    this.setState({ items: [...currentCart] });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ShoppingCardIcon />
        { items.map((product) => (
          <div key={ product.id }>
            <span
              data-testid="shopping-cart-product-name "
            >
              {product.title}
            </span>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.removeItemFromCart(product.id) }
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.addItemFromCart(product.id) }
            >
              +
            </button>
          </div>))}
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          <ShoppingCardIcon />
        </Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

ShoppingCard.propTypes = ({
  productList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export default ShoppingCard;
