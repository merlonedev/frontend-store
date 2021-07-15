import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const {
      increaseQuantity,
      sumTotalPrice,
      id,
      price,
      availableQuantity,
      quantity } = this.props;
    return (
      <button
        data-testid="product-increase-quantity"
        type="button"
        disabled={ quantity >= availableQuantity }
        onClick={ () => {
          increaseQuantity(id);
          sumTotalPrice(price);
        } }
      >
        +
      </button>
    );
  }
}

AddButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  sumTotalPrice: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AddButton;
