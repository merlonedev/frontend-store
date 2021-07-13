import React, { Component } from 'react';
import CardSVG from '../components/CardSVG';
import BarSVG from '../components/BarSVG';
import Options from '../components/StateOptions';
import './Payment.css';

class Payment extends Component {
  render() {
    return (
      <main>
        <div>
          <h2 className="payment-title">Resive seus produtos</h2>
          <div className="payment-cart">
            produtos
          </div>
        </div>
        <h2 className="payment-title">Informações do Comprador</h2>
        <form className="payment-form">
          <input className="payment-input" type="text" placeholder="Nome Completo" />
          <input className="payment-input" type="number" placeholder="CPF" />
          <input className="payment-input" type="email" placeholder="E-mail" />
          <input className="payment-input" type="tel" placeholder="Telefone" />
          <input className="payment-input" type="number" placeholder="CEP" />
          <input className="payment-input address" type="text" placeholder="Endereço" />
          <input className="payment-input" type="text" placeholder="Complemento" />
          <input className="payment-input" type="number" placeholder="Número" />
          <input className="payment-input" type="text" placeholder="Cidade" />
          <select className="payment-select">
            <option name="Estado">Estado</option>
            <Options />
          </select>
        </form>
        <h2 className="payment-title">Método de Pagamento</h2>
        <div className="payment-radios">
          <div className="payment-card">
            <p>Boleto</p>
            <label htmlFor="radio-boleto">
              <input type="radio" className="radio-boleto" />
              <BarSVG />
            </label>
          </div>
          <div className="payment-card">
            <p>Cartão de crédito</p>
            <label htmlFor="radio-visa">
              <input type="radio" id="radio-visa" />
              Visa
              <CardSVG />
            </label>
            <label htmlFor="radio-mastercard">
              <input type="radio" id="radio-mastercard" />
              MasterCard
              <CardSVG />
            </label>
            <label htmlFor="radio-elo">
              <input type="radio" id="radio-elo" />
              Elo
              <CardSVG />
            </label>
          </div>
        </div>
        <button className="payment-button" type="button">Comprar</button>
      </main>
    );
  }
}

export default Payment;
