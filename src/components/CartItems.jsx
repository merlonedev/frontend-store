import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  constructor(props) {
    super(props);
    this.getProductFromId = this.getProductFromId.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  async getProductFromId(url) {
    const resultRequest = await fetch(url);
    const result = await resultRequest.json();
    return result;
  }

  increaseQty({ target }) {
    const itemToIncrease = target.parentElement.id;
    const { handlers } = this.props;
    handlers.increase(itemToIncrease);
  }

  decreaseQty({ target }) {
    const itemToRemove = target.parentElement.id;
    const { handlers } = this.props;
    handlers.decrease(itemToRemove);
  }

  removeItem({ target }) {
    const itemToRemove = target.parentElement.id;
    const { handlers } = this.props;
    handlers.remove(itemToRemove);
  }

  render() {
    const { cartItems: items } = this.props;
    return items.map((item) => (
      <div key={ item.id } id={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <p>{item.price * item.qty}</p>
        <p data-testid="shopping-cart-product-quantity">{item.qty}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decreaseQty }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQty }
        >
          +
        </button>
        <button type="button" onClick={ this.removeItem }>
          x
        </button>
        <button type="button">Finalizar Compra</button>
      </div>
    ));
  }
}

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      forEach: PropTypes.func,
      length: PropTypes.number,
    }),
  ).isRequired,
  handlers: PropTypes.shape({
    remove: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func,
  }).isRequired,
};
