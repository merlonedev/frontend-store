import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutCep extends React.Component {
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
