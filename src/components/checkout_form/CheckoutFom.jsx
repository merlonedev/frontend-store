import React, { Component } from 'react';
import InputName from './InputName';
import InputCPF from './InputCPF';
import InputEmail from './InputEmail';
import InputPhone from './InputPhone';
import InputCEP from './InputCEP';
import InputAddress from './InputAddress';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, cpf, email, phone, cep, address } = this.state;
    return (
      <form className="checkout-form">
        <fieldset>
          <legend><h3>Informações do Comprador</h3></legend>
          <InputName
            name="name"
            onChange={ this.handleChange }
            value={ name }
          />
          <InputCPF
            name="cpf"
            onChange={ this.handleChange }
            value={ cpf }
          />
          <InputEmail
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
          <InputPhone
            name="phone"
            onChange={ this.handleChange }
            value={ phone }
          />
          <InputCEP
            name="cep"
            onChange={ this.handleChange }
            value={ cep }
          />
          <InputAddress
            name="address"
            onChange={ this.handleChange }
            value={ address }
          />
        </fieldset>

      </form>
    );
  }
}

export default CheckoutForm;