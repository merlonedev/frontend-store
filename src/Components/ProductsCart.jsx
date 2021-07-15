import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsCart extends Component {
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
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div className="card">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt="produto" className="photo" />
        <p>{ `R$ ${price * quantity}` }</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          name="decrease"
          onClick={ this.handleClick }
        >
          -
        </button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          name="increase"
          onClick={ this.handleClick }
        >
          +
        </button>
      </div>
    );
  }
}

export default ProductsCart;

ProductsCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
