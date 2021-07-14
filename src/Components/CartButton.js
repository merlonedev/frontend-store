import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiCircle } from 'react-icons/fi';

class CartButton extends Component {
  render() {
    const { quantity } = this.props;

    return (
      <div>
        <Link to="/cart-basket" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart size={ 60 } color="black" />
        </Link>
        <FiCircle size={ 30 } color="black" />
        <p data-testid="shopping-cart-size">{ quantity.length }</p>
      </div>
    );
  }
}

CartButton.propTypes = {
  quantity: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

CartButton.defaultProps = {
  quantity: 0,
};

export default CartButton;
