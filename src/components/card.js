import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();

    this.onAddToCartItem = this.onAddToCartItem.bind(this);
  }

  onAddToCartItem(item) {
    const { addCartItem } = this.props;
    addCartItem(item);
  }

  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.onAddToCartItem(item) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

Card.propTypes = {
  addCartItem: PropTypes.func.isRequired,
};
