import React from 'react';
import boleto from '../img/boleto.png';
import visa from '../img/visa.png';
import master from '../img/master.png';
import elo from '../img/elo.png';

export default class Form1 extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="payment" className="payment">
          <div className="row">
            <label htmlFor="checkbox-barcode">
              <input type="radio" id="checkbox-barcode" name="payment" value="Boleto" />
              <img className="payment-icon" src={ boleto } alt="icone" />
            </label>
            <label htmlFor="checkbox-visa">
              <input type="radio" id="checkbox-visa" name="payment" value="Visa" />
              <img className="payment-icon" src={ visa } alt="icone" />
            </label>
          </div>
          <div className="row">
            <label htmlFor="checkbox-master">
              <input
                type="radio"
                id="checkbox-master"
                name="payment"
                value="MasterCard"
              />
              <img className="payment-icon" src={ master } alt="icone" />
            </label>
            <label htmlFor="checkbox-elo">
              <input type="radio" id="checkbox-elo" name="payment" value="Elo" />
              <img className="payment-icon" src={ elo } alt="icone" />
            </label>
          </div>
        </label>
      </form>
    );
  }
}
