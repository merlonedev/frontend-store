import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

class ButtonCart extends Component {
  render() {
    const { quantityTotal } = this.props;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <RiShoppingCartLine />
        </Link>
        <span data-testid="shopping-cart-size">{ quantityTotal }</span>
      </div>

    );
  }
}

ButtonCart.propTypes = {
  quantityTotal: PropTypes.number.isRequired,
};

export default ButtonCart;
