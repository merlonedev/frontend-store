import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { findIndex } from '../__mocks__/categories';

export default class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };

    this.getProductFromId = this.getProductFromId.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
  }

  componentDidMount() {
    const { cartItems } = this.props;
    cartItems.forEach((cartItem) => this.getProductFromId(cartItem));
  }

  async getProductFromId(id) {
    const apiURL = `https://api.mercadolibre.com/items/${id}`;
    const resultRequest = await fetch(apiURL);
    const result = await resultRequest.json();
    result.qty = 1;
    this.setState((prevState) => {
      const previous = [...prevState.items];
      previous.push(result);
      return { items: previous };
    });
  }

  increaseQty({ target }) { // credits: https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects
    const { items } = this.state;
    const itemToIncrease = target.parentElement.id;
    const itemIndex = items.findIndex(({ id }) => id === itemToIncrease);
    this.setState({
      items: [
        ...items.slice(0, itemIndex),
        { ...items[itemIndex], qty: items[itemIndex].qty + 1 },
        ...items.slice(itemIndex + 1),
      ],
    });
  }

  decreaseQty({ target }) {
    const { items } = this.state;
    const itemToDecrease = target.parentElement.id;
    const itemIndex = items.findIndex(({ id }) => id === itemToDecrease);
    if (items[itemIndex].qty < 1) return;
    this.setState({
      items: [
        ...items.slice(0, itemIndex),
        { ...items[itemIndex], qty: items[itemIndex].qty - 1 },
        ...items.slice(itemIndex + 1),
      ],
    });
  }

  render() {
    const { items } = this.state;
    return items.map((item) => (
      <div key={ item.id } id={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <p>{item.price * item.qty}</p>
        <p data-testid="shopping-cart-product-quantity">{item.qty}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQty }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decreaseQty }
        >
          -
        </button>
      </div>
    ));
  }
}

CartItems.propTypes = {
  cartItems: PropTypes.shape({
    title: PropTypes.string.isRequired,
    forEach: PropTypes.func.isRequired,
  }).isRequired,
};
