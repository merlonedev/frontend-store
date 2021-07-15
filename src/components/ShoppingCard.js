import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCardIcon from './ShoppingCardIcon';

class ShoppingCard extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        <ShoppingCardIcon />
        { productList.map((product) => (
          <div key={ product.id }>
            <span
              data-testid="shopping-cart-product-name "
            >
              {product.title}
            </span>
            <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
          </div>))}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

ShoppingCard.propTypes = ({
  productList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export default ShoppingCard;
