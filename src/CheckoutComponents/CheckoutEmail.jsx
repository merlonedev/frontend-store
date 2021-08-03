import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutEmail extends Component {
  render() {
    const { email, handleChange } = this.props;
    return (
      <input
        type="email"
        data-testid="checkout-email"
        name="email"
        placeholder="Email"
        value={ email }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutEmail.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutEmail;
