import React from 'react';

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
