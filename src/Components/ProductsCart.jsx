import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsCart extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div className="card">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt="produto" className="photo" />
        <p>{ `R$ ${price}` }</p>
        <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
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
