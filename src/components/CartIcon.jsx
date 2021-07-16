import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

class CartIcon extends Component {
  // AJUDA EM: https://www.geeksforgeeks.org/how-to-create-shopping-cart-button-in-reactjs/
  render() {
    const { amount, className } = this.props;
    return (
      <div>
        <Badge
          data-testid="shopping-cart-size"
          color="secondary"
          badgeContent={ amount }
        >
          <i className={ `bi bi-cart4 ${className}` } />
        </Badge>
      </div>
    );
  }
}

CartIcon.propTypes = {
  amount: PropTypes.number,
  className: PropTypes.string,
};

CartIcon.defaultProps = {
  amount: 0,
  className: '',
};

export default CartIcon;
