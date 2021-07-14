import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item } = this.props;
    const { price, title, quantity } = item;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CartItem;
