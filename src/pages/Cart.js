import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCart';

export default class Cart extends Component {
  render() {
    const { product: {
      title,
      thumbnail,
      price,
      id,
    } } = this.props;
    return (
      <>
        <div>
          <EmptyCart />
        </div>

        <div>
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <span data-testid="shopping-cart-product-quantity">{quantity.length}</span>
          </div>
        </div>
      </>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
