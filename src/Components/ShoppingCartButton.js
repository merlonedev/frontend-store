import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ShoppingCartButton extends React.Component {
  render() {
    const { cartQuantity } = this.props;
    return (
      <div>
        <button type="button" className="cart-button">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
        <div
          data-testid="shopping-cart-size"
        >
          { cartQuantity }
        </div>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};
