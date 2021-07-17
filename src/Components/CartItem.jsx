import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

export default class CartItem extends Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem({ id }) {
    const { getItemsFromStorage } = this.props;
    const actualStorage = JSON.parse(localStorage.getItem('ItemCart'));
    const index = actualStorage.findIndex((item) => item.id === id);
    if (actualStorage[index].quantity > 1) {
      actualStorage[index].quantity -= 1;
      localStorage.setItem('ItemCart', JSON.stringify(actualStorage));
      getItemsFromStorage();
    }
  }

  render() {
    const {
      title,
      image,
      price,
      quantity,
      storeItems,
      product,
      getItemsFromStorage,
    } = this.props;

    return (
      <div className="cart-item">
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ image } alt={ title } />
        <div className="cart-item-price-quantity">
          <h3>{ `preço: R$ ${price}` }</h3>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.removeItem(product) }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => {
              storeItems(product);
              getItemsFromStorage();
            } }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  storeItems: PropTypes.func.isRequired,
  product: PropTypes.shape().isRequired,
  getItemsFromStorage: PropTypes.func.isRequired,
};
