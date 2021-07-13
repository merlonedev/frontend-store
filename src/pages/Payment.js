import React, { Component } from 'react';
import Options from '../components/StateOptions';

class Payment extends Component {
  render() {
    return (
      <main>
        <div>
          <h2>Resive seus produtos</h2>
          <div>
            produtos
          </div>
        </div>
        <form>
          <h2>Informações do Comprador</h2>
          <input type="text" placeholder="Nome Completo" />
          <input type="number" placeholder="CPF" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Telefone" />
          <input type="number" placeholder="CEP" />
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Complemento" />
          <input type="number" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select>
            <option name="Estado">Estado</option>
            <Options />
          </select>
        </form>
        <div>
          <h2>Método de Pagamento</h2>
          <p>Boleto</p>
          <label htmlFor="radio-boleto">
            <input type="radio" className="radio-boleto" />
          </label>
          <p>Cartão de crédito</p>
          <label htmlFor="radio-visa">
            Visa
            <input type="radio" className="radio-visa" />
          </label>
          <label htmlFor="radio-mastercard">
            MasterCard
            <input type="radio" className="radio-mastercard" />
          </label>
          <label htmlFor="radio-elo">
            Elo
            <input type="radio" className="radio-elo" />
          </label>
        </div>
      </main>
    );
  }
}

export default Payment;
