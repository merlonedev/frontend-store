import React, { Component } from 'react';
import PropTypes from 'prop-types';
import div from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class CartIcon extends Component {
  // AJUDA EM: https://www.geeksforgeeks.org/how-to-create-shopping-cart-button-in-reactjs/
  render() {
    const { qtd } = this.props;
    return (
      <div>
        <div
          data-testid="shopping-cart-size"
        >
          { qtd }
        </div>
        <ShoppingCartIcon />
      </div>
    );
  }
}

CartIcon.propTypes = {
  qtd: PropTypes.number.isRequired,
};

export default CartIcon;
