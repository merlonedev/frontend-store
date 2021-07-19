import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartButton extends Component {
  render() {
    const { shoppingCartProductList, onClick, dataTestId } = this.props;
    return (
      <button
        type="button"
        onClick={ () => onClick() }
        data-testid={ dataTestId }
      >
        Carrinho
        <span
          data-testid="shopping-cart-size"
        >
          {shoppingCartProductList
            .reduce((acc, curr) => acc + (curr.quantity), 0)}
        </span>
      </button>
    );
  }
}

ShoppingCartButton.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  shoppingCartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShoppingCartButton;
