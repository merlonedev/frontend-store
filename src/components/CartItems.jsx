import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };

    this.getProductFromId = this.getProductFromId.bind(this);
  }

  componentDidMount() {
    const { cartItems } = this.props;
    cartItems.forEach((cartItem) => this.getProductFromId(cartItem));
  }

  async getProductFromId(id) {
    const apiURL = `https://api.mercadolibre.com/items/${id}`;
    const resultRequest = await fetch(apiURL);
    const result = await resultRequest.json();
    this.setState((prevState) => {
      const previous = [...prevState.items];
      previous.push(result);
      return { items: previous };
    });
  }

  render() {
    const { items } = this.state;
    return items.map((item) => (
      <div key={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <p>{item.price}</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
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
