import React, { Component } from 'react';
import PaymentRadioButton from './PaymentRadioButton';

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: 'boleto',
    };
    this.handleChangePayment = this.handleChangePayment.bind(this);
  }

  handleChangePayment({ target }) {
    const { value } = target;
    this.setState(() => ({
      paymentMethod: value,
    }), () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <PaymentRadioButton
          type="radio"
          value="Boleto"
          onChange={ this.handleChangePayment }
        />
        <PaymentRadioButton
          type="radio"
          value="Visa"
          onChange={ this.handleChangePayment }
        />
        <PaymentRadioButton
          type="radio"
          value="MasterCard"
          onChange={ this.handleChangePayment }
        />
        <PaymentRadioButton
          type="radio"
          value="Elo"
          onChange={ this.handleChangePayment }
        />
      </div>
    );
  }
}

export default PaymentMethods;
