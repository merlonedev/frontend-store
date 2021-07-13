import React, { Component } from 'react';
import CheckoutInput from '../components/CheckoutInput';

export default class Checkout extends Component {
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
    return (
      <main className="checkout">
        <section className="products-resume">
          <h2>Revise seus Produtos</h2>
          <div>--PRODUCTS--</div>
          <p>Total: R$ XXX,XX</p>
        </section>
        <form>
          <h2>Informações do Comprador</h2>
          <CheckoutInput
            id="checkout-fullname"
            label="Nome completo"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-cpf"
            label="CPF"
            tyoe="number"
          />
          <CheckoutInput
            id="checkout-email"
            label="Email"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-phone"
            label="Telefone"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-cep"
            label="CEP"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-adress"
            label="Endereço"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-complement"
            label="Complemento"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-number"
            label="Número"
            tyoe="text"
          />
          <CheckoutInput
            id="checkout-city"
            label="Cidade"
            tyoe="text"
          />
          <label htmlFor="state">
            Estado
            <select name="state" id="state">
              {states.map((state) => (
                <option value="state" key="state">{ state }</option>
              ))}
            </select>
          </label>
        </form>
      </main>
    );
  }
}
