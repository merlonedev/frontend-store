import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class CartIcon extends Component {
  // AJUDA EM: https://www.geeksforgeeks.org/how-to-create-shopping-cart-button-in-reactjs/
  render() {
    const { amount } = this.props;
    return (
      <div style={ { display: 'block' } }>
        <Badge
          data-testid="shopping-cart-size"
          color="secondary"
          badgeContent={ amount }
        >
          <ShoppingCartIcon />
        </Badge>
      </div>
    );
  }
}

CartIcon.propTypes = {
  amount: PropTypes.number,
};

CartIcon.defaultProps = {
  amount: 0,
};

export default CartIcon;
