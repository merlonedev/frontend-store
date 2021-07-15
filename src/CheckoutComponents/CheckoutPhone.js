import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutPhone extends React.Component {
  render() {
    const { phone, handleChange } = this.props;
    return (
      <input
        type="tel"
        data-testid="checkout-phone"
        name="phone"
        placeholder="Telefone"
        value={ phone }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutPhone.propTypes = {
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
