import React from 'react';

export default class CheckoutName extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-fullname"
        name="name"
        placeholder="Nome completo"
        value={ name }
        onChange={ handleChange }
      />
    );
  }
}
