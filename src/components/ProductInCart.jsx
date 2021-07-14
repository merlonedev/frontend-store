import React from 'react';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
        <p>{price}</p>
        <div data-testid="shopping-cart-product-quantity">1</div>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductInCart;
