import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/cartIcon.css';

class CartIcon extends Component {
  render() {
    const { amount, className } = this.props;
    return (
      <div className={ `icon-cart ${className}` }>
        <i className="bi bi-cart4 ico-cart" />
        <span
          className="count-cart"
          data-testid="shopping-cart-size"
        >
          { amount }
        </span>
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
