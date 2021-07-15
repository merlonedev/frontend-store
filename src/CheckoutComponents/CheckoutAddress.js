import React from 'react';

export default class CheckoutAddress extends React.Component {
  render() {
    const { address, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-address"
        name="address"
        placeholder="Endereço"
        value={ address }
        onChange={ handleChange }
      />
    );
  }
}
