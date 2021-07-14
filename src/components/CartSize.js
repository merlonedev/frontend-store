import React from 'react';
import PropTypes from 'prop-types';

class CartSize extends React.Component {
  render() {
    const { size } = this.props;
    return <p data-testid="shopping-cart-size">{ size }</p>;
  }
}

CartSize.propTypes = {
  size: PropTypes.number.isRequired,
};

export default CartSize;
