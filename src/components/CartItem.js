import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { name } }) {
    const { quantity } = this.state;
    if (name === 'increase') {
      this.setState({
        quantity: quantity + 1,
      });
    } else if (name === 'decrease') {
      this.setState({
        quantity: (quantity > 1 ? quantity - 1 : quantity),
      });
    }
  }

  render() {
    const { quantity } = this.state;
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div className="shopping-cart">
        <button
          type="button"
        >
          X
        </button>
        <img className="image-cart" src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{ ` R$ ${price}`}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name="decrease"
          onClick={ this.handleClick }
        >
          -
        </button>
        <p>{ `Quantidade: ${quantity}`}</p>
        <p>{ ` R$ ${quantity * price}`}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name="increase"
          onClick={ this.handleClick }
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
