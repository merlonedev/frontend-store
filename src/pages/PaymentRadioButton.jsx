import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentRadioButton extends Component {
  render() {
    const { type, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          type={ type }
          name="paymentMethod"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

PaymentRadioButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default PaymentRadioButton;
