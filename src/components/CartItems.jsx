import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { reverse } from '../__mocks__/categories';
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
    this.removeItem = this.removeItem.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  componentDidMount() {
    const { cartItems } = this.props;
    // const reversed = cartItems.reverse();
    // cartItems.forEach((cartItem) => this.getProductFromId(cartItem));
    if (cartItems) this.setItems(cartItems);
  }

  async setItems(cartItems) {
    let URL = 'https://api.mercadolibre.com/items?ids=';
    cartItems.forEach((id) => { URL += `,${id}`; });
    const allItemsObj = await this.getProductFromId(URL);
    const items = allItemsObj.map((elem) => ({ ...elem.body, qty: 1 }));
    // allItemsObj.forEach((elem) => console.log(elem));
    this.setState({ items });
  }

  componentDidUpdate() {
    console.log('didupdate');
  }

  async getProductFromId(url) {
    // const apiURL = `https://api.mercadolibre.com/items/${id}`;
    const resultRequest = await fetch(url);
    const result = await resultRequest.json();
    // result.qty = 1;
    return result;
    // this.setState((prevState) => {
    //   const previous = [...prevState.items];
    //   previous.push(result);
    //   return { items: previous };
    // });
  }

  increaseQty({ target }) {
    // credits: https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects
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

  removeItem({ target }) {
    const { items } = this.state;
    const itemToRemove = target.parentElement.id;
    this.setState({
      items: items.filter(({ id }) => id !== itemToRemove),
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
  cartItems: PropTypes.shape({
    title: PropTypes.string.isRequired,
    forEach: PropTypes.func.isRequired,
  }).isRequired,
};
