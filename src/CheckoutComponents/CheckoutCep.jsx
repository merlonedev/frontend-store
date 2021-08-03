import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutCep extends Component {
  render() {
    const { cep, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-cep"
        name="cep"
        placeholder="CEP"
        value={ cep }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutCep.propTypes = {
  cep: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutCep;
