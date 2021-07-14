import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCardIcon from './ShoppingCardIcon';

class ShoppingCard extends Component {
  render() {
    const { productList } = this.props;
    console.log(productList);
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
            <span data-testid="shopping-cart-product-quantity"> 1</span>
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
