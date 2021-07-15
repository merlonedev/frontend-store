import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtractButton extends Component {
  render() {
    const { decreaseQuantity, subtractTotalPrice, id, price, quantity } = this.props;
    return (
      <button
        data-testid="product-decrease-quantity"
        type="button"
        onClick={ () => {
          decreaseQuantity(id);
          subtractTotalPrice(price, quantity);
        } }
      >
        -
      </button>
    );
  }
}

SubtractButton.propTypes = {
  decreaseQuantity: PropTypes.func.isRequired,
  subtractTotalPrice: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default SubtractButton;
