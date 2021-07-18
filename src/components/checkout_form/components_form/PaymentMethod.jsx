import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: true,
      visa: false,
      mastercard: false,
      elo: false,
    };
    this.handleChangeRadios = this.handleChangeRadios.bind(this);
  }

  handleChangeRadios({ target }) {
    const { onChange } = this.props;
    const keys = Object.keys(this.state);
    const { state } = this;
    const newState = keys.reduce((acc, curr) => {
      if (target.id === curr) {
        acc[curr] = !state[curr];
      } else if (state[curr]) {
        acc[curr] = !state[curr];
      } else {
        acc[curr] = state[curr];
      }
      return acc;
    }, {});
    this.setState({ ...newState });
    onChange(target);
  }

  render() {
    const { ticket, visa, mastercard, elo } = this.state;
    return (
      <div className="methods-container">

        <div className="ticket-method">
          Boleto
          <label htmlFor="ticket">
            <input
              checked={ ticket }
              name="payMethod"
              id="ticket"
              type="radio"
              value="Boleto"
              onChange={ this.handleChangeRadios }
            />
            <i className="bi bi-upc ticket-ico" />
          </label>
        </div>

        <div className="card-method">
          <label className="visa-card" htmlFor="visa">
            <input
              checked={ visa }
              name="payMethod"
              id="visa"
              type="radio"
              value="Visa"
              onChange={ this.handleChangeRadios }
            />
            Visa
            <i className="bi bi-credit-card-2-back-fill card-ico" />
          </label>

          <label className="master-card" htmlFor="mastercard">
            <input
              checked={ mastercard }
              name="payMethod"
              id="mastercard"
              type="radio"
              value="MasterCard"
              onChange={ this.handleChangeRadios }
            />
            MasterCard
            <i className="bi bi-credit-card-2-back-fill card-ico" />
          </label>

          <label className="elo-card" htmlFor="elo">
            <input
              checked={ elo }
              name="payMethod"
              id="elo"
              type="radio"
              value="Elo"
              onChange={ this.handleChangeRadios }
            />
            Elo
            <i className="bi bi-credit-card-2-back-fill card-ico" />
          </label>

        </div>

      </div>
    );
  }
}

PaymentMethod.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PaymentMethod;
