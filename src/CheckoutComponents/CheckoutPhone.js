import React from 'react';

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
