import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{ product.title}</h1>
        <img src={ product.thumbnail } alt={ product.id } />
        <p data-testid="shopping-cart-product-quantity">
          1
        </p>
        <p>
          R$
          {product.price}
        </p>
      </div>
    );
  }
}

CartCard.propTypes = {
  product: PropTypes.objectOf(String),
};

CartCard.defaultProps = {
  product: undefined,
};

export default CartCard;
