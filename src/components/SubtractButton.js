import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtractButton extends Component {
  render() {
    const { decreaseQuantity, product } = this.props;
    return (
      <button
        data-testid="product-decrease-quantity"
        type="button"
        onClick={ () => decreaseQuantity(product) }
      >
        -
      </button>
    );
  }
}

SubtractButton.propTypes = {
  decreaseQuantity: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

export default SubtractButton;
