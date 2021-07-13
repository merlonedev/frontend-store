import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: p,
    // };

    this.getProductFromId = this.getProductFromId.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  componentDidMount() {
    // const { cartItems } = this.props;
    // const reversed = cartItems.reverse();
    // cartItems.forEach((cartItem) => this.getProductFromId(cartItem));
    // if (!cartItems.length) return;
    // this.setItems();
  }

  async setItems() {
    // let URL = 'https://api.mercadolibre.com/items?ids=';
    // cartItems.forEach((id) => { URL += `,${id}`; });
    // const allItemsObj = await this.getProductFromId(URL);
    // const items = allItemsObj.map((elem) => ({ ...elem.body, qty: 1 }));
    // // allItemsObj.forEach((elem) => console.log(elem));
    // this.setState({ items });
    // const { cartItems } = this.props;
    // this.setState({ items: cartItems });
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
    // const { items } = this.state;
    // const itemIndex = items.findIndex(({ id }) => id === itemToIncrease);
    // this.setState({
    //   items: [
    //     ...items.slice(0, itemIndex),
    //     { ...items[itemIndex], qty: items[itemIndex].qty + 1 },
    //     ...items.slice(itemIndex + 1),
    //   ],
    // });
    const itemToIncrease = target.parentElement.id;
    const { handlers } = this.props;
    handlers.increase(itemToIncrease);
  }

  decreaseQty({ target }) {
    // const { items } = this.state;
    // const itemToDecrease = target.parentElement.id;
    // const itemIndex = items.findIndex(({ id }) => id === itemToDecrease);
    // if (items[itemIndex].qty < 1) return;
    // this.setState({
    //   items: [
    //     ...items.slice(0, itemIndex),
    //     { ...items[itemIndex], qty: items[itemIndex].qty - 1 },
    //     ...items.slice(itemIndex + 1),
    //   ],
    // });
    const itemToRemove = target.parentElement.id;
    const { handlers } = this.props;
    handlers.decrease(itemToRemove);
  }

  removeItem({ target }) {
    // const { items } = this.state;
    // handleCartChange.remove(itemToRemove);
    // this.setState({
    //   items: items.filter(({ id }) => id !== itemToRemove),
    // });
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
