import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutName extends Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor="checkout-fullname">
        <input
          data-testid="checkout-fullname"
          type="text"
          name="name"
          placeholder="Nome completo"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

CheckoutName.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutName;
