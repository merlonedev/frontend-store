import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutCpf extends Component {
  render() {
    const { cpf, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-cpf"
        name="cpf"
        placeholder="CPF"
        value={ cpf }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutCpf.propTypes = {
  cpf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutCpf;
