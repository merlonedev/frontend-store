import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutAddress extends Component {
  render() {
    const { address, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-address"
        name="address"
        placeholder="Endereço"
        value={ address }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutAddress.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutAddress;
