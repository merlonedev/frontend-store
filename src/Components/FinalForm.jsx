import React from 'react';

class FinalForm extends React.Component {
  render() {
    return (
      <form className="finalform">
        <label htmlFor="name" data-testid="checkout-fullname" className="form">
          Nome Completo:
          <input type="text" name="name" required className="formInput" />
        </label>
        <label htmlFor="email" data-testid="checkout-email" className="form">
          Email:
          <input type="email" name="email" required className="formInput" />
        </label>
        <label htmlFor="CPF" data-testid="checkout-cpf" className="form">
          CPF:
          <input type="text" name="cpf" required className="formInput" />
        </label>
        <label htmlFor="phone" data-testid="checkout-phone" className="form">
          Telefone:
          <input type="text" name="phone" required className="formInput" />
        </label>
        <label htmlFor="cep" data-testid="checkout-cep" className="form">
          CEP:
          <input type="text" name="cep" required className="formInput" />
        </label>
        <label htmlFor="adress" data-testid="checkout-adress" className="form">
          Endereço:
          <input type="text" name="adress" required className="formInput" />
        </label>
      </form>
    );
  }
}

export default FinalForm;
