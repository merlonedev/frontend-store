import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutEmail extends React.Component {
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
