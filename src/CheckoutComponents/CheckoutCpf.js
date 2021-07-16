import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutCpf extends React.Component {
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
