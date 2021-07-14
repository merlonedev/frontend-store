import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup2 from './ButtonGroup2';

class CartIcon extends Component {
  render() {
    const { total } = this.props;
    return (
      <div style={ { display: 'block', padding: 30 } }>
        <Badge
          data-testid="shopping-cart-size"
          color="secondary"
          badgeContent={ total }
        >
          <ShoppingCartIcon />
        </Badge>
        <ButtonGroup2 />
      </div>
    );
  }
}

CartIcon.propTypes = {
  total: PropTypes.number.isRequired,
}

export default CartIcon;
