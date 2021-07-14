import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Quantities extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        {quantity}
      </span>
    );
  }
}

Quantities.defaultProps = {
  quantity: undefined,
};

Quantities.propTypes = {
  quantity: PropTypes.number,
};
