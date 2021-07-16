import React from 'react';

class FormCheckout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="checkout-fullname">
            Nome:
            <input
              type="text"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="checkout-email">
            Email:
            <input
              type="email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="checkout-cpf">
            CPF:
            <input
              type="text"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="checkout-phone">
            Telefone:
            <input
              type="tel"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="checkout-cep">
            CEP:
            <input
              type="text"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="checkout-address">
            Endereço:
            <input
              type="text"
              data-testid="checkout-address"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default FormCheckout;
