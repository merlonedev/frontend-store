import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const {
      increaseQuantity,
      product,
      availableQuantity,
      qtdInCart } = this.props;
    return (
      <button
        data-testid="product-increase-quantity"
        type="button"
        disabled={ qtdInCart >= availableQuantity }
        onClick={ () => increaseQuantity(product) }
      >
        +
      </button>
    );
  }
}

AddButton.propTypes = {
  qtdInCart: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
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

export default AddButton;
