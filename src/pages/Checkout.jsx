import React, { Component } from 'react';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      adress: '',
      cep: '',
      complement: '',
      number: '',
      city: '',
      isValid: false,
    };
  }

  handleSubmit = () => {

  }

  render() {
    const states = [
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RO',
      'RS',
      'RR',
      'SC',
      'SE',
      'SP',
      'TO',
    ];
    const {
      isValid,
      name,
      cpf,
      cep,
      adress,
      number,
      city,
      phone,
      email,
      complement,
    } = this.state;
    const validateStyle = isValid ? 'valid' : 'invalid';
    return (
      <main className="checkout">
        <section className="products-resume">
          <h2>Revise seus Produtos</h2>
          <div>--PRODUCTS--</div>
          <p>Total: R$ XXX,XX</p>
        </section>
        <form className="checkout-form">
          <h2>Informações do Comprador</h2>
          <input
            name="name"
            id="checkout-fullname"
            placeholder="Nome completo"
            value={ name }
            type="text"
            className={ validateStyle }
          />
          <input
            name="cpf"
            id="checkout-cpf"
            placeholder="CPF"
            value={ cpf }
            type="number"
          />
          <input
            name="email"
            id="checkout-email"
            placeholder="Email"
            value={ email }
            type="text"
          />
          <input
            name="phone"
            id="checkout-phone"
            placeholder="Telefone"
            value={ phone }
            type="number"
          />
          <input
            name="cep"
            id="checkout-cep"
            placeholder="CEP"
            value={ cep }
            type="number"
          />
          <input
            name="adress"
            id="checkout-adress"
            placeholder="Endereço"
            value={ adress }
            type="text"
          />
          <input
            name="complement"
            id="checkout-complement"
            placeholder="Complemento"
            value={ complement }
            type="text"
          />
          <input
            name="number"
            id="checkout-number"
            placeholder="Número"
            value={ number }
            type="number"
          />
          <input
            name="city"
            id="checkout-city"
            placeholder="Cidade"
            value={ city }
            type="text"
          />
          <label htmlFor="state-select">
            Estado
            <select name="state-select" id="state-select">
              {states.map((state) => (
                <option value={ state } key={ state }>{ state }</option>
              ))}
            </select>
          </label>
        </form>
        <section className="payment-checkout">
          <h2>Método de Pagamento</h2>
          <label htmlFor="payment">
            <h4>Boleto</h4>
            <input type="radio" name="payment" label="Boleto" id="boleto" />
            <h4>Cartão de Crédito</h4>
            <label htmlFor="visa">
              Visa
              <input type="radio" name="payment" label="Visa" id="visa" />
            </label>
            <label htmlFor="master">
              MasterCard
              <input type="radio" name="payment" label="MasterCard" id="master" />
            </label>
            <label htmlFor="elo">
              Elo
              <input type="radio" name="payment" label="Elo" id="elo" />
            </label>
          </label>
        </section>
        <button type="submit">Comprar</button>
      </main>
    );
  }
}
